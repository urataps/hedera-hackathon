"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Building, Users, DollarSign, TrendingUp, Leaf, Sun, Home } from "lucide-react"

export function AdminStats() {
  const stats = [
    {
      title: "Total Properties",
      value: "6",
      change: "+2 this month",
      icon: Building,
      color: "text-slate-500",
    },
    {
      title: "Active Investors",
      value: "1,247",
      change: "+89 this month",
      icon: Users,
      color: "text-slate-500",
    },
    {
      title: "Total Asset Value",
      value: "$26.7M",
      change: "+$3.2M this month",
      icon: DollarSign,
      color: "text-slate-500",
    },
    {
      title: "Avg. Platform Yield",
      value: "8.7%",
      change: "+0.3% this month",
      icon: TrendingUp,
      color: "text-slate-500",
    },
  ]

  const assetBreakdown = [
    {
      type: "Forest Assets",
      count: 2,
      icon: Leaf,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      image: "/lush-green-forest-with-tall-trees-and-sunlight.jpg",
      saleProgress: 85,
    },
    {
      type: "Energy Projects",
      count: 2,
      icon: Sun,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      image: "/modern-solar-panels-and-wind-turbines-renewable-en.jpg",
      saleProgress: 62,
    },
    {
      type: "Real Estate",
      count: 2,
      icon: Home,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      image: "/modern-luxury-residential-building-with-clean-arch.jpg",
      saleProgress: 43,
    },
  ]

  return (
    <div className="space-y-8 mb-8">
      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card
              key={stat.title}
              className="bg-white border border-slate-100 shadow-sm hover:shadow-md rounded-3xl overflow-hidden transition-all duration-200 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-slate-500 font-medium mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
                    <p className="text-xs text-emerald-600 font-medium">{stat.change}</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
        <CardContent className="p-8">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Asset Type Distribution</h3>
            <p className="text-slate-600">Diversified portfolio across multiple asset classes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {assetBreakdown.map((asset) => {
              const Icon = asset.icon
              return (
                <div
                  key={asset.type}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  {/* Image Section */}
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={asset.image || "/placeholder.svg"}
                      alt={asset.type}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                    {/* Icon Overlay */}
                    <div className={`absolute top-3 right-3 p-2 ${asset.bgColor} rounded-xl shadow-sm`}>
                      <Icon className={`h-5 w-5 ${asset.color}`} />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-1">{asset.type}</h4>
                        <p className="text-sm text-slate-600">Active Properties</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-slate-500">{asset.count}</div>
                        <div className="text-xs text-slate-500 mt-1">Properties</div>
                      </div>
                    </div>

                    {/* Progress indicator */}
                    <div className="mt-4">
                      <div className="flex justify-between text-xs text-slate-600 mb-2">
                        <span>Sale Progress</span>
                        <span>{asset.saleProgress}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="h-2 rounded-full bg-slate-500" style={{ width: `${asset.saleProgress}%` }} />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
