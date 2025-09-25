"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Marketplace } from "@/components/marketplace"
import { PortfolioDashboard } from "@/components/portfolio-dashboard"
import { AdminDashboard } from "@/components/admin-dashboard"

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState<"marketplace" | "portfolio" | "admin">("marketplace")

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "marketplace":
        return <Marketplace />
      case "portfolio":
        return <PortfolioDashboard />
      case "admin":
        return <AdminDashboard />
      default:
        return <Marketplace />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="md:ml-72 min-h-screen bg-[rgba(255,255,255,1)] md:pl-0">{renderCurrentPage()}</main>
    </div>
  )
}
