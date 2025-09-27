"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Shield, UserCheck, UserX, Plus, Search, CheckCircle, XCircle } from "lucide-react"

interface KYCUser {
  id: string
  walletAddress: string
  status: "verified" | "pending" | "rejected"
  verificationDate: string
  country: string
  riskLevel: "low" | "medium" | "high"
}

const mockKYCUsers: KYCUser[] = [
  {
    id: "1",
    walletAddress: "0.0.123456",
    status: "verified",
    verificationDate: "2024-01-15",
    country: "United States",
    riskLevel: "low",
  },
  {
    id: "2",
    walletAddress: "0.0.789012",
    status: "verified",
    verificationDate: "2024-01-12",
    country: "Canada",
    riskLevel: "low",
  },
  {
    id: "3",
    walletAddress: "0.0.345678",
    status: "pending",
    verificationDate: "2024-01-20",
    country: "United Kingdom",
    riskLevel: "medium",
  },
  {
    id: "4",
    walletAddress: "0.0.901234",
    status: "rejected",
    verificationDate: "2024-01-18",
    country: "Unknown",
    riskLevel: "high",
  },
]

interface KYCControlsProps {
  kycEnabled: boolean
  onToggleKYC: (enabled: boolean) => void
}

export function KYCControls({ kycEnabled, onToggleKYC }: KYCControlsProps) {
  const [newWalletAddress, setNewWalletAddress] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredUsers = mockKYCUsers.filter(
    (user) =>
      user.walletAddress.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.country.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const verifiedCount = mockKYCUsers.filter((user) => user.status === "verified").length
  const pendingCount = mockKYCUsers.filter((user) => user.status === "pending").length
  const rejectedCount = mockKYCUsers.filter((user) => user.status === "rejected").length

  const handleAddWallet = () => {
    if (newWalletAddress.trim()) {
      // Simulate adding wallet to allowlist
      console.log("Adding wallet to allowlist:", newWalletAddress)
      setNewWalletAddress("")
    }
  }

  const handleUpdateStatus = (userId: string, newStatus: "verified" | "rejected") => {
    // Simulate status update
    console.log("Updating user status:", userId, newStatus)
  }

  return (
    <div className="space-y-6">
      {/* KYC Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">KYC Status</p>
                <p className={`text-lg font-bold ${kycEnabled ? "text-green-600" : "text-orange-600"}`}>
                  {kycEnabled ? "Enabled" : "Disabled"}
                </p>
              </div>
              <Shield className={`h-6 w-6 ${kycEnabled ? "text-green-600" : "text-orange-600"}`} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Verified Users</p>
                <p className="text-lg font-bold text-green-600">{verifiedCount}</p>
              </div>
              <UserCheck className="h-6 w-6 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending Review</p>
                <p className="text-lg font-bold text-orange-600">{pendingCount}</p>
              </div>
              <Shield className="h-6 w-6 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Rejected</p>
                <p className="text-lg font-bold text-red-600">{rejectedCount}</p>
              </div>
              <UserX className="h-6 w-6 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* KYC Controls */}
      <Card>
        <CardHeader>
          <CardTitle>KYC Management</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
            <div>
              <h4 className="font-semibold text-foreground">KYC Requirement</h4>
              <p className="text-sm text-muted-foreground">
                {kycEnabled
                  ? "Only verified wallets can purchase property shares"
                  : "All wallets can purchase without verification"}
              </p>
            </div>
            <Button onClick={() => onToggleKYC(!kycEnabled)} variant={kycEnabled ? "destructive" : "default"}>
              {kycEnabled ? "Disable KYC" : "Enable KYC"}
            </Button>
          </div>

          <div className="space-y-2">
            <Label htmlFor="wallet-address">Add Wallet to Allowlist</Label>
            <div className="flex gap-2">
              <Input
                id="wallet-address"
                value={newWalletAddress}
                onChange={(e) => setNewWalletAddress(e.target.value)}
                placeholder="0.0.123456"
              />
              <Button onClick={handleAddWallet} disabled={!newWalletAddress.trim()}>
                <Plus className="h-4 w-4 mr-2" />
                Add
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* User Management */}
      <Card>
        <CardHeader>
          <CardTitle>User Verification Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search by wallet address or country..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="hidden md:block">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Wallet Address</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead>Risk Level</TableHead>
                  <TableHead>Verification Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-mono">{user.walletAddress}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          user.status === "verified"
                            ? "bg-green-100 border-green-300 text-green-700"
                            : user.status === "pending"
                              ? "bg-orange-100 border-orange-300 text-orange-700"
                              : "bg-red-100 border-red-300 text-red-700"
                        }
                      >
                        {user.status === "verified" && <CheckCircle className="h-3 w-3 mr-1" />}
                        {user.status === "rejected" && <XCircle className="h-3 w-3 mr-1" />}
                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.country}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          user.riskLevel === "low"
                            ? "bg-green-100 border-green-300 text-green-700"
                            : user.riskLevel === "medium"
                              ? "bg-orange-100 border-orange-300 text-orange-700"
                              : "bg-red-100 border-red-300 text-red-700"
                        }
                      >
                        {user.riskLevel.charAt(0).toUpperCase() + user.riskLevel.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {new Date(user.verificationDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </TableCell>
                    <TableCell>
                      {user.status === "pending" && (
                        <div className="flex gap-1">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleUpdateStatus(user.id, "verified")}
                            className="bg-green-50 border-green-300 text-green-700"
                          >
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleUpdateStatus(user.id, "rejected")}
                            className="bg-red-50 border-red-300 text-red-700"
                          >
                            Reject
                          </Button>
                        </div>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3">
            {filteredUsers.map((user) => (
              <Card key={user.id}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-mono text-sm">{user.walletAddress}</div>
                      <div className="text-sm text-muted-foreground">{user.country}</div>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        user.status === "verified"
                          ? "bg-green-100 border-green-300 text-green-700"
                          : user.status === "pending"
                            ? "bg-orange-100 border-orange-300 text-orange-700"
                            : "bg-red-100 border-red-300 text-red-700"
                      }
                    >
                      {user.status === "verified" && <CheckCircle className="h-3 w-3 mr-1" />}
                      {user.status === "rejected" && <XCircle className="h-3 w-3 mr-1" />}
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className={
                        user.riskLevel === "low"
                          ? "bg-green-100 border-green-300 text-green-700"
                          : user.riskLevel === "medium"
                            ? "bg-orange-100 border-orange-300 text-orange-700"
                            : "bg-red-100 border-red-300 text-red-700"
                      }
                    >
                      {user.riskLevel.charAt(0).toUpperCase() + user.riskLevel.slice(1)} Risk
                    </Badge>
                    {user.status === "pending" && (
                      <div className="flex gap-1">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleUpdateStatus(user.id, "verified")}
                          className="bg-green-50 border-green-300 text-green-700"
                        >
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleUpdateStatus(user.id, "rejected")}
                          className="bg-red-50 border-red-300 text-red-700"
                        >
                          Reject
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
