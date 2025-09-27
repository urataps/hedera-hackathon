"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PortfolioTable } from "@/components/portfolio-table"
import { SellModal } from "@/components/sell-modal"
import { ProfitHistory } from "@/components/profit-history"
import {
  TrendingUp,
  DollarSign,
  PieChart,
  Calendar,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  Leaf,
  Sun,
  Home,
} from "lucide-react"

interface PortfolioHolding {
  id: string
  propertyId: string
  propertyTitle: string
  propertyType: "forest" | "solar" | "real-estate"
  propertyImage: string
  sharesOwned: number
  totalShares: number
  purchasePrice: number
  currentValue: number
  expectedYield: number
  lastDistribution: number
  totalDistributions: number
  purchaseDate: string
}

interface ProfitDistribution {
  id: string
  propertyId: string
  propertyTitle: string
  amount: number
  date: string
  status: "completed" | "pending"
}

const mockHoldings: PortfolioHolding[] = [
  {
    id: "1",
    propertyId: "1",
    propertyTitle: "Amazon Rainforest Conservation",
    propertyType: "forest",
    propertyImage: "/lush-amazon-rainforest-canopy-aerial-view.jpg",
    sharesOwned: 500,
    totalShares: 10000,
    purchasePrice: 125000,
    currentValue: 132500,
    expectedYield: 8.5,
    lastDistribution: 2125,
    totalDistributions: 8500,
    purchaseDate: "2023-12-15",
  },
  {
    id: "2",
    propertyId: "2",
    propertyTitle: "Solar Farm Texas",
    propertyType: "solar",
    propertyImage: "/large-solar-panel-farm-desert-landscape.jpg",
    sharesOwned: 250,
    totalShares: 10000,
    purchasePrice: 62500,
    currentValue: 68750,
    expectedYield: 12.3,
    lastDistribution: 1537,
    totalDistributions: 6150,
    purchaseDate: "2024-01-08",
  },
  {
    id: "3",
    propertyId: "3",
    propertyTitle: "Sustainable Office Complex",
    propertyType: "real-estate",
    propertyImage: "/modern-sustainable-office-building-green-architect.jpg",
    sharesOwned: 100,
    totalShares: 10000,
    purchasePrice: 80000,
    currentValue: 82000,
    expectedYield: 6.8,
    lastDistribution: 1360,
    totalDistributions: 2720,
    purchaseDate: "2024-01-20",
  },
]

const mockDistributions: ProfitDistribution[] = [
  {
    id: "1",
    propertyId: "1",
    propertyTitle: "Amazon Rainforest Conservation",
    amount: 2125,
    date: "2024-01-15",
    status: "completed",
  },
  {
    id: "2",
    propertyId: "2",
    propertyTitle: "Solar Farm Texas",
    amount: 1537,
    date: "2024-01-15",
    status: "completed",
  },
  {
    id: "3",
    propertyId: "3",
    propertyTitle: "Sustainable Office Complex",
    amount: 1360,
    date: "2024-01-15",
    status: "completed",
  },
  {
    id: "4",
    propertyId: "1",
    propertyTitle: "Amazon Rainforest Conservation",
    amount: 2250,
    date: "2024-04-15",
    status: "pending",
  },
  {
    id: "5",
    propertyId: "2",
    propertyTitle: "Solar Farm Texas",
    amount: 1625,
    date: "2024-04-15",
    status: "pending",
  },
]

const typeIcons = {
  forest: Leaf,
  solar: Sun,
  "real-estate": Home,
}

export function PortfolioDashboard() {
  const [selectedHolding, setSelectedHolding] = useState<PortfolioHolding | null>(null)
  const [showSellModal, setShowSellModal] = useState(false)
  const [isClaimingDistributions, setIsClaimingDistributions] = useState(false)

  const totalInvested = mockHoldings.reduce((sum, holding) => sum + holding.purchasePrice, 0)
  const totalCurrentValue = mockHoldings.reduce((sum, holding) => sum + holding.currentValue, 0)
  const totalProfit = mockHoldings.reduce((sum, holding) => sum + holding.totalDistributions, 0)
  const totalGainLoss = totalCurrentValue - totalInvested
  const totalReturn = ((totalCurrentValue + totalProfit - totalInvested) / totalInvested) * 100

  const pendingDistributions = mockDistributions
    .filter((dist) => dist.status === "pending")
    .reduce((sum, dist) => sum + dist.amount, 0)

  const handleSellShares = (holding: PortfolioHolding) => {
    setSelectedHolding(holding)
    setShowSellModal(true)
  }

  const handleClaimDistributions = async () => {
    setIsClaimingDistributions(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Show success message
    if (typeof window !== "undefined") {
      // Simple toast notification
      const toast = document.createElement("div")
      toast.className = "fixed top-4 right-4 bg-emerald-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 font-medium"
      toast.textContent = `Successfully claimed $${pendingDistributions.toLocaleString()}!`
      document.body.appendChild(toast)

      setTimeout(() => {
        document.body.removeChild(toast)
      }, 3000)
    }

    setIsClaimingDistributions(false)
  }

  const triggerConfetti = () => {
    if (typeof window !== "undefined") {
      // Create confetti effect using CSS animations
      const confettiContainer = document.createElement("div")
      confettiContainer.className = "fixed inset-0 pointer-events-none z-50"

      // Create multiple confetti pieces
      for (let i = 0; i < 50; i++) {
        const confetti = document.createElement("div")
        confetti.className = "absolute w-2 h-2 opacity-80"
        confetti.style.backgroundColor = ["#10b981", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6"][
          Math.floor(Math.random() * 5)
        ]
        confetti.style.left = Math.random() * 100 + "%"
        confetti.style.top = "-10px"
        confetti.style.borderRadius = "2px"
        confetti.style.animation = `confetti-fall ${2 + Math.random() * 3}s linear forwards`
        confettiContainer.appendChild(confetti)
      }

      document.body.appendChild(confettiContainer)

      // Remove confetti after animation
      setTimeout(() => {
        document.body.removeChild(confettiContainer)
      }, 5000)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const style = document.createElement("style")
      style.textContent = `
        @keyframes confetti-fall {
          0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `
      document.head.appendChild(style)

      return () => {
        document.head.removeChild(style)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200/60 shadow-sm sticky top-0 z-10">
        <div className="px-6 sm:px-8 lg:px-12 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <h1 className="font-bold tracking-tight text-2xl text-slate-900 sm:text-2xl">Portfolio Dashboard</h1>
              <p className="text-slate-600 leading-relaxed text-base">
                Track your real-world asset investments and returns
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Badge
                variant="outline"
                className="bg-slate-50/80 border-slate-200 text-slate-700 px-4 py-2 rounded-full font-medium shadow-sm hover:shadow-md hover:bg-slate-50 transition-all duration-200"
              >
                <Wallet className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline text-sm">Connected: </span>
                <span className="font-mono text-sm">0.0.123456</span>
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 sm:px-8 lg:px-12 py-8 pt-12">
        {pendingDistributions > 0 && (
          <div className="mb-8 p-4 bg-emerald-50/80 border border-emerald-200/60 rounded-2xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <Calendar className="h-4 w-4 text-emerald-600" />
              </div>
              <div>
                <p className="font-semibold text-emerald-900 text-sm">
                  ${pendingDistributions.toLocaleString()} in distributions ready to claim
                </p>
              </div>
            </div>
            <Button
              size="sm"
              onClick={handleClaimDistributions}
              disabled={isClaimingDistributions}
              className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white text-sm px-5 py-2 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
            >
              {isClaimingDistributions ? "Claiming..." : "Claim"}
            </Button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="bg-white/80 backdrop-blur-sm border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-600">Total Invested</p>
                  <p className="text-3xl font-bold text-slate-900 tracking-tight">${totalInvested.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[rgba(241,245,249,1)]">
                  <DollarSign className="h-6 w-6 text-[rgba(98,116,142,1)]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-600">Current Value</p>
                  <p className="text-3xl font-bold text-slate-900 tracking-tight">
                    ${totalCurrentValue.toLocaleString()}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[rgba(241,245,249,1)]">
                  <PieChart className="h-6 w-6 text-[rgba(98,116,142,1)]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-600">Total Profit Received</p>
                  <p className="text-3xl font-bold text-emerald-600 tracking-tight">${totalProfit.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[rgba(241,245,249,1)]">
                  <TrendingUp className="h-6 w-6 text-[rgba(98,116,142,1)]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-600">Total Return</p>
                  <p
                    className={`text-3xl font-bold tracking-tight ${totalReturn >= 0 ? "text-emerald-600" : "text-red-600"}`}
                  >
                    {totalReturn >= 0 ? "+" : ""}
                    {totalReturn.toFixed(1)}%
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[rgba(241,245,249,1)]">
                  {totalReturn >= 0 ? (
                    <ArrowUpRight className="h-6 w-6 text-[rgba(98,116,142,1)]" />
                  ) : (
                    <ArrowDownRight className="h-6 w-6 text-[rgba(98,116,142,1)]" />
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="holdings" className="w-full">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl border border-slate-200/60 shadow-xl overflow-hidden">
            <TabsList className="grid w-full grid-cols-3 bg-gradient-to-r from-slate-50/80 to-slate-100/80 backdrop-blur-sm border-b border-slate-200/60 p-3 h-auto rounded-none">
              <TabsTrigger
                value="holdings"
                className="flex items-center justify-center gap-2 px-8 py-5 rounded-2xl text-slate-600 data-[state=active]:bg-white/90 data-[state=active]:text-emerald-600 data-[state=active]:shadow-lg data-[state=active]:border data-[state=active]:border-emerald-100 hover:bg-white/60 transition-all duration-300 font-semibold m-1 backdrop-blur-sm"
              >
                <Wallet className="h-5 w-5" />
                <span className="hidden sm:inline text-base">My Holdings</span>
                <span className="sm:hidden">Holdings</span>
              </TabsTrigger>
              <TabsTrigger
                value="distributions"
                className="flex items-center justify-center gap-2 px-8 py-5 rounded-2xl text-slate-600 data-[state=active]:bg-white/90 data-[state=active]:text-emerald-600 data-[state=active]:shadow-lg data-[state=active]:border data-[state=active]:border-emerald-100 hover:bg-white/60 transition-all duration-300 font-semibold m-1 backdrop-blur-sm"
              >
                <TrendingUp className="h-5 w-5" />
                <span className="hidden sm:inline text-base">Profit History</span>
                <span className="sm:hidden">Profits</span>
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="flex items-center justify-center gap-2 px-8 py-5 rounded-2xl text-slate-600 data-[state=active]:bg-white/90 data-[state=active]:text-emerald-600 data-[state=active]:shadow-lg data-[state=active]:border data-[state=active]:border-emerald-100 hover:bg-white/60 transition-all duration-300 font-semibold m-1 backdrop-blur-sm"
              >
                <PieChart className="h-5 w-5" />
                <span className="hidden sm:inline text-base">Analytics</span>
                <span className="sm:hidden">Stats</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="holdings" className="p-10 m-0 pb-0 pt-6">
              <PortfolioTable
                holdings={mockHoldings}
                onSellShares={(holding) => {
                  handleSellShares(holding)
                  // Trigger confetti when sell button is clicked
                  triggerConfetti()
                }}
              />
            </TabsContent>

            <TabsContent value="distributions" className="p-10 m-0">
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Profit History</h2>
                    <p className="text-slate-600 text-lg">Track your distribution payments and earnings over time</p>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-emerald-50 border-emerald-200 text-emerald-700 px-4 py-2 rounded-full font-medium"
                  >
                    {mockDistributions.length} Distributions
                  </Badge>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/60 shadow-xl overflow-hidden">
                  <ProfitHistory distributions={mockDistributions} />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="p-10 m-0">
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Portfolio Analytics</h2>
                    <p className="text-slate-600 text-lg">Detailed insights into your investment performance</p>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-emerald-50 border-emerald-200 text-emerald-700 px-4 py-2 rounded-full font-medium"
                  >
                    {mockHoldings.length} Assets
                  </Badge>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl bg-white overflow-hidden">
                    <CardHeader className="pb-6 px-8 pt-8 bg-gradient-to-r from-slate-50/80 to-white border-b border-slate-100">
                      <CardTitle className="font-semibold text-slate-900 tracking-tight flex items-center gap-3 text-lg">
                        <div className="w-10 h-10 rounded-2xl bg-emerald-100 flex items-center justify-center">
                          <PieChart className="h-5 w-5 text-emerald-600" />
                        </div>
                        Asset Allocation
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-8 pb-8 pt-6">
                      <div className="space-y-6">
                        {Object.entries(
                          mockHoldings.reduce(
                            (acc, holding) => {
                              acc[holding.propertyType] = (acc[holding.propertyType] || 0) + holding.currentValue
                              return acc
                            },
                            {} as Record<string, number>,
                          ),
                        ).map(([type, value]) => {
                          const percentage = (value / totalCurrentValue) * 100
                          const Icon = typeIcons[type as keyof typeof typeIcons]
                          return (
                            <div key={type} className="space-y-3">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100">
                                    <Icon className="h-4 w-4 text-emerald-600" />
                                  </div>
                                  <div>
                                    <span className="capitalize text-slate-800 font-medium text-sm">
                                      {type === "real-estate" ? "Real Estate" : type}
                                    </span>
                                    <p className="text-slate-500 text-xs">${value.toLocaleString()}</p>
                                  </div>
                                </div>
                                <span className="font-semibold text-slate-900 text-sm">{percentage.toFixed(1)}%</span>
                              </div>
                              <Progress value={percentage} className="bg-slate-100 h-2 rounded-full" />
                            </div>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl bg-white overflow-hidden">
                    <CardHeader className="pb-6 px-8 pt-8 bg-gradient-to-r from-slate-50/80 to-white border-b border-slate-100">
                      <CardTitle className="font-semibold text-slate-900 tracking-tight flex items-center gap-3 text-lg">
                        <div className="w-10 h-10 rounded-2xl bg-emerald-100 flex items-center justify-center">
                          <TrendingUp className="h-5 w-5 text-emerald-600" />
                        </div>
                        Performance Metrics
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-8 pb-8 pt-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-slate-50/80 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors duration-200">
                          <div>
                            <span className="text-slate-700 font-medium text-sm">Unrealized Gain/Loss</span>
                            <p className="text-slate-500 text-xs">Portfolio value change</p>
                          </div>
                          <span
                            className={`font-semibold text-sm ${totalGainLoss >= 0 ? "text-emerald-600" : "text-red-600"}`}
                          >
                            {totalGainLoss >= 0 ? "+" : ""}${totalGainLoss.toLocaleString()}
                          </span>
                        </div>

                        <div className="flex justify-between items-center p-4 bg-emerald-50/80 rounded-2xl border border-emerald-100 hover:bg-emerald-50 transition-colors duration-200">
                          <div>
                            <span className="text-emerald-700 font-medium text-sm">Realized Profit</span>
                            <p className="text-emerald-600 text-xs">Total distributions</p>
                          </div>
                          <span className="font-semibold text-emerald-700 text-sm">
                            +${totalProfit.toLocaleString()}
                          </span>
                        </div>

                        <div className="flex justify-between items-center p-4 bg-blue-50/80 rounded-2xl border border-blue-100 hover:bg-blue-50 transition-colors duration-200">
                          <div>
                            <span className="text-blue-700 font-medium text-sm">Average Yield</span>
                            <p className="text-blue-600 text-xs">Expected annual return</p>
                          </div>
                          <span className="font-semibold text-blue-700 text-sm">
                            {(mockHoldings.reduce((sum, h) => sum + h.expectedYield, 0) / mockHoldings.length).toFixed(
                              1,
                            )}
                            %
                          </span>
                        </div>

                        <div className="flex justify-between items-center p-4 bg-purple-50/80 rounded-2xl border border-purple-100 hover:bg-purple-50 transition-colors duration-200">
                          <div>
                            <span className="text-purple-700 font-medium text-sm">Properties Owned</span>
                            <p className="text-purple-600 text-xs">Total investments</p>
                          </div>
                          <span className="font-semibold text-purple-700 text-sm">{mockHoldings.length}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

      {showSellModal && selectedHolding && (
        <SellModal
          holding={selectedHolding}
          onClose={() => {
            setShowSellModal(false)
            setSelectedHolding(null)
          }}
        />
      )}
    </div>
  )
}
