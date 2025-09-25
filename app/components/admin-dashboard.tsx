"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreatePropertyForm } from "@/components/create-property-form"
import { ProfitDistributionPanel } from "@/components/profit-distribution-panel"
import { KYCControls } from "@/components/kyc-controls"
import { AdminStats } from "@/components/admin-stats"
import { Plus, DollarSign, Shield, BarChart3, RefreshCw, AlertTriangle, TrendingUp, Users } from "lucide-react"

export function AdminDashboard() {
  const [kycEnabled, setKycEnabled] = useState(false)
  const [isResetting, setIsResetting] = useState(false)

  const handleResetDemo = async () => {
    setIsResetting(true)
    // Simulate reset process
    setTimeout(() => {
      setIsResetting(false)
      // Show success message
      alert("Demo data has been reset successfully!")
    }, 2000)
  }

  return (
    <div className="min-h-screen">
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-4 sm:px-6 lg:px-12 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight sm:text-2xl">
                Admin Dashboard
              </h1>
              <p className="text-sm sm:text-base text-slate-600 lg:text-base">
                Manage properties, distributions, and platform settings
              </p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
              <Badge className="bg-emerald-100 border-emerald-200 text-emerald-700 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full">
                <Shield className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                <span className="hidden xs:inline">Admin Access</span>
                <span className="xs:hidden">Admin</span>
              </Badge>
              <Button
                variant="outline"
                onClick={handleResetDemo}
                disabled={isResetting}
                className="border-slate-200 text-slate-700 hover:bg-slate-50 bg-white px-3 sm:px-4 lg:px-6 py-2 rounded-xl shadow-sm transition-all duration-200 text-xs sm:text-sm"
              >
                {isResetting ? (
                  <>
                    <div className="h-3 w-3 sm:h-4 sm:w-4 animate-spin rounded-full border-2 border-slate-400 border-t-transparent mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Resetting...</span>
                    <span className="sm:hidden">...</span>
                  </>
                ) : (
                  <>
                    <RefreshCw className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Reset Demo Data</span>
                    <span className="sm:hidden">Reset</span>
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-12 py-6 sm:py-8 lg:py-10">
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <AdminStats />
        </div>

        <Card className="mb-6 sm:mb-8 lg:mb-10 border-0 shadow-sm rounded-2xl overflow-hidden bg-white">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex items-start gap-3 sm:gap-4">
                <div
                  className={`p-2 sm:p-3 rounded-xl flex-shrink-0 transition-all duration-200 ${
                    kycEnabled
                      ? "bg-emerald-100 shadow-emerald-100/50 shadow-sm"
                      : "bg-slate-100 shadow-slate-100/50 shadow-sm"
                  }`}
                >
                  {kycEnabled ? (
                    <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-slate-500" />
                  )}
                </div>
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900">KYC Verification</h3>
                    <Badge
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        kycEnabled
                          ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                          : "bg-slate-100 text-slate-600 border border-slate-200"
                      }`}
                    >
                      {kycEnabled ? "Active" : "Inactive"}
                    </Badge>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                    {kycEnabled
                      ? "Identity verification is required for all property investments."
                      : "Open access mode - all wallets can purchase without verification."}
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-2 lg:flex-col lg:gap-2">
                <Button
                  onClick={() => setKycEnabled(!kycEnabled)}
                  size="sm"
                  className={`px-4 py-2 rounded-xl font-medium shadow-sm transition-all duration-200 text-sm ${
                    kycEnabled
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                      : "bg-slate-600 hover:bg-slate-700 text-white"
                  }`}
                >
                  {kycEnabled ? "Disable" : "Enable"}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="px-4 py-2 rounded-xl font-medium border-slate-200 text-slate-700 hover:bg-slate-50 bg-white shadow-sm transition-all duration-200 text-sm"
                >
                  Settings
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="properties" className="w-full">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
            <TabsList className="grid w-full grid-cols-4 bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200 p-2 h-auto rounded-none">
              <TabsTrigger
                value="properties"
                className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-3 sm:py-4 rounded-xl text-slate-600 data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-md data-[state=active]:border data-[state=active]:border-emerald-200 transition-all font-medium text-xs sm:text-sm whitespace-nowrap min-w-0"
              >
                <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="hidden xs:inline sm:hidden">Create</span>
                <span className="xs:hidden sm:inline">Create Property</span>
              </TabsTrigger>
              <TabsTrigger
                value="distributions"
                className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-3 sm:py-4 rounded-xl text-slate-600 data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-md data-[state=active]:border data-[state=active]:border-emerald-200 transition-all font-medium text-xs sm:text-sm whitespace-nowrap min-w-0"
              >
                <DollarSign className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="hidden xs:inline sm:hidden">Profits</span>
                <span className="xs:hidden sm:inline">Profit Distribution</span>
              </TabsTrigger>
              <TabsTrigger
                value="kyc"
                className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-3 sm:py-4 rounded-xl text-slate-600 data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-md data-[state=active]:border data-[state=active]:border-emerald-200 transition-all font-medium text-xs sm:text-sm whitespace-nowrap min-w-0"
              >
                <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="hidden xs:inline sm:hidden">KYC</span>
                <span className="xs:hidden sm:inline">KYC Management</span>
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-3 sm:py-4 rounded-xl text-slate-600 data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-md data-[state=active]:border data-[state=active]:border-emerald-200 transition-all font-medium text-xs sm:text-sm whitespace-nowrap min-w-0"
              >
                <BarChart3 className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="hidden xs:inline sm:hidden">Stats</span>
                <span className="xs:hidden sm:inline">Platform Analytics</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="properties" className="p-8 mt-0">
              <CreatePropertyForm />
            </TabsContent>

            <TabsContent value="distributions" className="p-8 mt-0">
              <ProfitDistributionPanel />
            </TabsContent>

            <TabsContent value="kyc" className="p-0 mt-0">
              <div className="p-6 sm:p-8">
                <div className="space-y-6">
                  {/* Header Section */}
                  <div className="text-center sm:text-left">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-100">
                        <Shield className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">KYC Management</h2>
                        <p className="text-slate-500 text-sm mt-0.5">
                          Configure identity verification and compliance settings
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* KYC Controls Container */}
                  <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="p-6 sm:p-8">
                      <KYCControls kycEnabled={kycEnabled} onToggleKYC={setKycEnabled} />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="p-0 mt-0">
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-emerald-100 rounded-xl shadow-sm">
                      <BarChart3 className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Platform Analytics</h2>
                      <p className="text-slate-600 text-sm mt-1">
                        Monitor platform performance, user engagement, and financial metrics
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
                  {/* Platform Metrics */}
                  <Card className="border-0 shadow-sm rounded-2xl overflow-hidden bg-white">
                    <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4 sm:pb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-emerald-100 rounded-xl">
                          <TrendingUp className="h-5 w-5 text-emerald-600" />
                        </div>
                        <CardTitle className="text-lg font-semibold text-slate-900">Platform Performance</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                          <span className="text-slate-600 font-medium text-sm">Total Volume (30d)</span>
                          <span className="font-semibold text-lg text-slate-900">$2.4M</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                          <span className="text-slate-600 font-medium text-sm">Active Transactions</span>
                          <span className="font-semibold text-lg text-slate-900">156</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                          <span className="text-emerald-700 font-medium text-sm">Platform Fees Collected</span>
                          <span className="font-semibold text-lg text-emerald-600">$12,450</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                          <span className="text-slate-600 font-medium text-sm">Average Property Yield</span>
                          <span className="font-semibold text-lg text-slate-900">8.7%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* User Analytics */}
                  <Card className="border-0 shadow-sm rounded-2xl overflow-hidden bg-white">
                    <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4 sm:pb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-emerald-100 rounded-xl">
                          <Users className="h-5 w-5 text-emerald-600" />
                        </div>
                        <CardTitle className="text-lg font-semibold text-slate-900">User Analytics</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                          <span className="text-emerald-700 font-medium text-sm">New Users (30d)</span>
                          <span className="font-semibold text-lg text-emerald-600">+89</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                          <span className="text-slate-600 font-medium text-sm">KYC Verified Users</span>
                          <span className="font-semibold text-lg text-slate-900">743</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                          <span className="text-slate-600 font-medium text-sm">Average Investment</span>
                          <span className="font-semibold text-lg text-slate-900">$15,250</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                          <span className="text-slate-600 font-medium text-sm">Retention Rate</span>
                          <span className="font-semibold text-lg text-slate-900">87%</span>
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
    </div>
  )
}
