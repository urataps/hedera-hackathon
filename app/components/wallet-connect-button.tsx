"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { WalletConnectPopup } from "@/components/wallet-connect-popup"
import { Wallet, CheckCircle, Copy, ExternalLink, LogOut, AlertCircle } from "lucide-react"

interface WalletState {
  isConnected: boolean
  address: string
  balance: number
  network: string
  isKYCVerified: boolean
  walletType: string // added wallet type tracking
}

export function WalletConnectButton() {
  const [wallet, setWallet] = useState<WalletState>({
    isConnected: false,
    address: "",
    balance: 0,
    network: "Hedera Testnet",
    isKYCVerified: false,
    walletType: "",
  })
  const [isConnecting, setIsConnecting] = useState(false)
  const [connectingWallet, setConnectingWallet] = useState<string | null>(null)
  const [connectionError, setConnectionError] = useState("")
  const [showWalletPopup, setShowWalletPopup] = useState(false) // added popup state

  // Simulate checking for existing wallet connection on mount
  useEffect(() => {
    const checkExistingConnection = () => {
      const savedConnection = localStorage.getItem("hedera-wallet-connection")
      if (savedConnection) {
        const connectionData = JSON.parse(savedConnection)
        setWallet(connectionData)
      }
    }
    checkExistingConnection()
  }, [])

  const handleConnect = async (walletId: string) => {
    setIsConnecting(true)
    setConnectingWallet(walletId)
    setConnectionError("")

    try {
      // Simulate wallet connection process
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simulate random wallet address and balance
      const mockWallet: WalletState = {
        isConnected: true,
        address: `0.0.${Math.floor(Math.random() * 900000) + 100000}`,
        balance: Math.floor(Math.random() * 10000) + 1000,
        network: "Hedera Testnet",
        isKYCVerified: Math.random() > 0.3, // 70% chance of being KYC verified
        walletType: walletId,
      }

      setWallet(mockWallet)
      localStorage.setItem("hedera-wallet-connection", JSON.stringify(mockWallet))
      setShowWalletPopup(false) // close popup on successful connection
    } catch (error) {
      setConnectionError("Failed to connect wallet. Please try again.")
    } finally {
      setIsConnecting(false)
      setConnectingWallet(null)
    }
  }

  const handleDisconnect = () => {
    setWallet({
      isConnected: false,
      address: "",
      balance: 0,
      network: "Hedera Testnet",
      isKYCVerified: false,
      walletType: "",
    })
    localStorage.removeItem("hedera-wallet-connection")
  }

  const copyAddress = () => {
    navigator.clipboard.writeText(wallet.address)
    // Could add toast notification here
  }

  const openExplorer = () => {
    // Simulate opening Hedera explorer
    window.open(`https://hashscan.io/testnet/account/${wallet.address}`, "_blank")
  }

  if (!wallet.isConnected) {
    return (
      <>
        <div className="flex flex-col items-end gap-1">
          <Button
            onClick={() => setShowWalletPopup(true)}
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white border-0 rounded-xl px-4 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Wallet className="h-4 w-4" />
            Connect Wallet
          </Button>
          {connectionError && (
            <div className="flex items-center gap-1 text-xs text-red-600 bg-red-50 px-2 py-1 rounded-lg">
              <AlertCircle className="h-3 w-3" />
              {connectionError}
            </div>
          )}
        </div>

        <WalletConnectPopup
          isOpen={showWalletPopup}
          onClose={() => setShowWalletPopup(false)}
          onConnect={handleConnect}
          isConnecting={isConnecting}
          connectingWallet={connectingWallet}
        />
      </>
    )
  }

  return (
    <div className="flex items-center gap-3">
      <Badge
        variant="outline"
        className={`rounded-full px-3 py-1 text-xs font-medium border-2 ${
          wallet.isKYCVerified
            ? "bg-emerald-50 border-emerald-200 text-emerald-700"
            : "bg-amber-50 border-amber-200 text-amber-700"
        }`}
      >
        {wallet.isKYCVerified ? (
          <>
            <CheckCircle className="h-3 w-3 mr-1" />
            Verified
          </>
        ) : (
          <>
            <AlertCircle className="h-3 w-3 mr-1" />
            Pending
          </>
        )}
      </Badge>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 bg-white hover:bg-slate-50 border-slate-200 rounded-xl px-4 py-2 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="h-2 w-2 bg-emerald-500 rounded-full" />
            <span className="font-mono text-sm text-slate-700">{wallet.address}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-72 bg-white border-slate-200 rounded-2xl shadow-xl p-2">
          <div className="p-4 border-b border-slate-100">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-slate-900">Connected Wallet</span>
              <Badge variant="outline" className="text-xs bg-slate-50 text-slate-600 rounded-full">
                {wallet.network}
              </Badge>
            </div>
            <div className="text-xs text-slate-500 mb-1 capitalize font-medium">{wallet.walletType}</div>
            <div className="font-mono text-sm text-slate-600 mb-2">{wallet.address}</div>
            <div className="text-sm">
              <span className="text-slate-500">Balance: </span>
              <span className="font-semibold text-slate-900">{wallet.balance.toLocaleString()} HBAR</span>
            </div>
          </div>

          <DropdownMenuItem
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 cursor-pointer"
            onClick={copyAddress}
          >
            <Copy className="h-4 w-4 text-slate-500" />
            <span className="text-slate-700">Copy Address</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 cursor-pointer"
            onClick={openExplorer}
          >
            <ExternalLink className="h-4 w-4 text-slate-500" />
            <span className="text-slate-700">View on Explorer</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 cursor-pointer text-red-600"
            onClick={handleDisconnect}
          >
            <LogOut className="h-4 w-4" />
            <span>Disconnect</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
