"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/property-card"
import { PropertyDetail } from "@/components/property-detail"
import { Search, MapPin, TrendingUp, Activity, ChevronLeft, ChevronRight } from "lucide-react"

const mockProperties = [
  {
    id: "1",
    title: "Amazon Rainforest Conservation",
    location: "Brazil",
    type: "forest",
    image: "/lush-amazon-rainforest-canopy-aerial-view.jpg",
    availableSupply: 25,
    expectedYield: 8.5,
    totalValue: 2500000,
    tags: ["Carbon Credits", "Biodiversity", "REDD+"],
    description: "1,000 hectares of pristine Amazon rainforest for conservation and carbon credit generation.",
    status: "open", // added status for Open/Closed filter
    revenueGenerated: null, // added revenue tracking for sold properties
  },
  {
    id: "2",
    title: "Solar Farm Texas",
    location: "Texas, USA",
    type: "solar",
    image: "/large-solar-panel-farm-desert-landscape.jpg",
    availableSupply: 40,
    expectedYield: 12.3,
    totalValue: 5000000,
    tags: ["Clean Energy", "Grid Connected", "Tax Credits"],
    description: "50MW solar installation with 25-year power purchase agreement.",
    status: "open",
    revenueGenerated: null,
  },
  {
    id: "3",
    title: "Sustainable Office Complex",
    location: "Copenhagen, Denmark",
    type: "real-estate",
    image: "/modern-sustainable-office-building-green-architect.jpg",
    availableSupply: 15,
    expectedYield: 6.8,
    totalValue: 8000000,
    tags: ["LEED Platinum", "Net Zero", "ESG Compliant"],
    description: "LEED Platinum certified office complex with net-zero energy consumption.",
    status: "open",
    revenueGenerated: null,
  },
  {
    id: "4",
    title: "Mangrove Restoration Project",
    location: "Philippines",
    type: "forest",
    image: "/mangrove-forest-restoration-coastal-wetlands.jpg",
    availableSupply: 60,
    expectedYield: 7.2,
    totalValue: 1200000,
    tags: ["Blue Carbon", "Coastal Protection", "Community Impact"],
    description: "500 hectares of mangrove restoration for coastal protection and carbon sequestration.",
    status: "open",
    revenueGenerated: null,
  },
  {
    id: "5",
    title: "Wind Farm Scotland",
    location: "Scotland, UK",
    type: "solar",
    image: "/wind-turbines-scottish-highlands-renewable-energy.jpg",
    availableSupply: 0, // sold out property
    expectedYield: 9.8,
    totalValue: 3500000,
    tags: ["Offshore Wind", "Grid Connected", "Long-term PPA"],
    description: "25 turbine offshore wind farm with 20-year power purchase agreement.",
    status: "closed", // closed status for sold out
    revenueGenerated: 420000, // added revenue for sold property
  },
  {
    id: "6",
    title: "Green Residential Development",
    location: "Vancouver, Canada",
    type: "real-estate",
    image: "/sustainable-residential-development-green-building.jpg",
    availableSupply: 20,
    expectedYield: 5.5,
    totalValue: 6500000,
    tags: ["Passive House", "Affordable Housing", "Community Solar"],
    description: "120-unit residential development with passive house standards and community amenities.",
    status: "open",
    revenueGenerated: null,
  },
  {
    id: "7",
    title: "Sahara Solar Complex",
    location: "Morocco",
    type: "solar",
    image: "/massive-solar-panel-installation-in-sahara-desert-.jpg",
    availableSupply: 35,
    expectedYield: 11.2,
    totalValue: 4200000,
    tags: ["Desert Solar", "Grid Export", "MENA Region"],
    description: "75MW concentrated solar power plant in the Sahara with molten salt storage technology.",
    status: "open",
    revenueGenerated: null,
  },
  {
    id: "8",
    title: "Kenyan Wildlife Conservancy",
    location: "Kenya",
    type: "forest",
    image: "/african-savanna-wildlife-conservancy-with-acacia-t.jpg",
    availableSupply: 45,
    expectedYield: 6.8,
    totalValue: 1800000,
    tags: ["Wildlife Protection", "Eco-Tourism", "Carbon Offset"],
    description: "15,000 hectare wildlife conservancy supporting local communities and endangered species protection.",
    status: "open",
    revenueGenerated: null,
  },
  {
    id: "9",
    title: "Mumbai Smart Office Tower",
    location: "Mumbai, India",
    type: "real-estate",
    image: "/modern-smart-office-tower-mumbai-india-with-glass-.jpg",
    availableSupply: 25,
    expectedYield: 8.9,
    totalValue: 12000000,
    tags: ["Smart Building", "LEED Gold", "Tech Hub"],
    description: "40-story smart office tower with AI-powered building management and rooftop solar installation.",
    status: "open",
    revenueGenerated: null,
  },
  {
    id: "10",
    title: "Australian Wind Farm",
    location: "South Australia",
    type: "solar",
    image: "/wind-turbines-on-rolling-hills-south-australia-out.jpg",
    availableSupply: 30,
    expectedYield: 10.5,
    totalValue: 5500000,
    tags: ["Onshore Wind", "Battery Storage", "Grid Stabilization"],
    description: "150MW wind farm with integrated battery storage system for grid stability and peak demand.",
    status: "open",
    revenueGenerated: null,
  },
  {
    id: "11",
    title: "Indonesian Peatland Restoration",
    location: "Borneo, Indonesia",
    type: "forest",
    image: "/tropical-peatland-forest-restoration-borneo-indone.jpg",
    availableSupply: 55,
    expectedYield: 7.8,
    totalValue: 2200000,
    tags: ["Peatland Restoration", "REDD+", "Biodiversity Hotspot"],
    description:
      "8,000 hectares of critical peatland restoration preventing CO2 emissions and protecting orangutan habitat.",
    status: "open",
    revenueGenerated: null,
  },
  {
    id: "12",
    title: "Dubai Green District",
    location: "Dubai, UAE",
    type: "real-estate",
    image: "/futuristic-sustainable-district-dubai-uae-with-gre.jpg",
    availableSupply: 15,
    expectedYield: 9.2,
    totalValue: 15000000,
    tags: ["Net Zero", "Smart City", "Desert Architecture"],
    description: "Mixed-use sustainable district with net-zero energy buildings and integrated renewable systems.",
    status: "open",
    revenueGenerated: null,
  },
  {
    id: "13",
    title: "Chilean Lithium Solar Farm",
    location: "Atacama, Chile",
    type: "solar",
    image: "/solar-panels-in-atacama-desert-chile-with-mountain.jpg",
    availableSupply: 40,
    expectedYield: 13.1,
    totalValue: 3800000,
    tags: ["High Altitude Solar", "Mining Integration", "Lithium Processing"],
    description: "100MW solar installation powering sustainable lithium extraction operations in the Atacama Desert.",
    status: "open",
    revenueGenerated: null,
  },
  {
    id: "14",
    title: "Norwegian Fjord Hydroelectric",
    location: "Bergen, Norway",
    type: "solar",
    image: "/small-hydroelectric-dam-in-norwegian-fjord-with-mo.jpg",
    availableSupply: 0,
    expectedYield: 8.7,
    totalValue: 4500000,
    tags: ["Hydroelectric", "Fjord Power", "Grid Export"],
    description:
      "25MW run-of-river hydroelectric facility harnessing fjord waterfall energy with minimal environmental impact.",
    status: "closed",
    revenueGenerated: 380000,
  },
  {
    id: "15",
    title: "Japanese Vertical Farm",
    location: "Tokyo, Japan",
    type: "real-estate",
    image: "/modern-vertical-farm-building-tokyo-japan-with-led.jpg",
    availableSupply: 20,
    expectedYield: 7.4,
    totalValue: 8500000,
    tags: ["Vertical Farming", "Urban Agriculture", "Food Security"],
    description:
      "12-story vertical farm producing 500 tons of vegetables annually using 95% less water than traditional farming.",
    status: "open",
    revenueGenerated: null,
  },
]

export function Marketplace() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [yieldRange, setYieldRange] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedProperty, setSelectedProperty] = useState<(typeof mockProperties)[0] | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  const filteredProperties = mockProperties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || property.type === selectedCategory
    const matchesRegion =
      selectedRegion === "all" ||
      property.location.includes(selectedRegion) ||
      (selectedRegion === "Africa" && (property.location.includes("Morocco") || property.location.includes("Kenya"))) ||
      (selectedRegion === "Middle East" &&
        (property.location.includes("Dubai") || property.location.includes("UAE"))) ||
      (selectedRegion === "Oceania" && property.location.includes("Australia")) ||
      (selectedRegion === "Asia" &&
        (property.location.includes("India") ||
          property.location.includes("Indonesia") ||
          property.location.includes("Japan"))) ||
      (selectedRegion === "Americas" &&
        (property.location.includes("Chile") ||
          property.location.includes("Canada") ||
          property.location.includes("Brazil"))) ||
      (selectedRegion === "Europe" &&
        (property.location.includes("Norway") ||
          property.location.includes("Denmark") ||
          property.location.includes("Scotland")))
    const matchesYield =
      yieldRange === "all" ||
      (yieldRange === "low" && property.expectedYield < 7) ||
      (yieldRange === "medium" && property.expectedYield >= 7 && property.expectedYield < 10) ||
      (yieldRange === "high" && property.expectedYield >= 10)
    const matchesStatus = statusFilter === "all" || property.status === statusFilter

    return matchesSearch && matchesCategory && matchesRegion && matchesYield && matchesStatus
  })

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedProperties = filteredProperties.slice(startIndex, endIndex)

  const handleFilterChange = (filterType: string, value: string) => {
    setCurrentPage(1)
    switch (filterType) {
      case "search":
        setSearchTerm(value)
        break
      case "category":
        setSelectedCategory(value)
        break
      case "region":
        setSelectedRegion(value)
        break
      case "yield":
        setYieldRange(value)
        break
      case "status":
        setStatusFilter(value)
        break
    }
  }

  const handleViewDetail = (property: (typeof mockProperties)[0]) => {
    setSelectedProperty(property)
  }

  const handleBackToMarketplace = () => {
    setSelectedProperty(null)
  }

  if (selectedProperty) {
    return <PropertyDetail property={selectedProperty} onBack={handleBackToMarketplace} />
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="container mx-auto px-6 py-8">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 mb-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="relative flex-1 min-w-[320px]">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input
                placeholder="Search properties, locations, or asset types..."
                value={searchTerm}
                onChange={(e) => handleFilterChange("search", e.target.value)}
                className="pl-12 pr-4 py-4 bg-white border-2 border-slate-200 rounded-full focus:border-emerald-500 focus:ring-0 text-slate-900 placeholder:text-slate-500 shadow-sm hover:shadow-md transition-all duration-200"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <Select value={selectedCategory} onValueChange={(value) => handleFilterChange("category", value)}>
                <SelectTrigger className="bg-white border-2 border-slate-200 hover:border-slate-300 rounded-full px-6 py-3 hover:shadow-md transition-all duration-200 min-w-[140px]">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                    <SelectValue placeholder="Asset Type" />
                  </div>
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-0 shadow-2xl bg-white p-2">
                  <SelectItem value="all" className="rounded-xl">
                    All Assets
                  </SelectItem>
                  <SelectItem value="forest" className="rounded-xl">
                    🌲 Forest
                  </SelectItem>
                  <SelectItem value="solar" className="rounded-xl">
                    ⚡ Energy
                  </SelectItem>
                  <SelectItem value="real-estate" className="rounded-xl">
                    🏢 Real Estate
                  </SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedRegion} onValueChange={(value) => handleFilterChange("region", value)}>
                <SelectTrigger className="bg-white border-2 border-slate-200 hover:border-slate-300 rounded-full px-6 py-3 hover:shadow-md transition-all duration-200 min-w-[120px]">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3 w-3 text-slate-500" />
                    <SelectValue placeholder="Location" />
                  </div>
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-0 shadow-2xl bg-white p-2">
                  <SelectItem value="all" className="rounded-xl">
                    All Locations
                  </SelectItem>
                  <SelectItem value="USA" className="rounded-xl">
                    🇺🇸 USA
                  </SelectItem>
                  <SelectItem value="Europe" className="rounded-xl">
                    🇪🇺 Europe
                  </SelectItem>
                  <SelectItem value="Asia" className="rounded-xl">
                    🌏 Asia
                  </SelectItem>
                  <SelectItem value="Americas" className="rounded-xl">
                    🌎 Americas
                  </SelectItem>
                  <SelectItem value="Africa" className="rounded-xl">
                    🌍 Africa
                  </SelectItem>
                  <SelectItem value="Middle East" className="rounded-xl">
                    🕌 Middle East
                  </SelectItem>
                  <SelectItem value="Oceania" className="rounded-xl">
                    🏝️ Oceania
                  </SelectItem>
                </SelectContent>
              </Select>

              <Select value={yieldRange} onValueChange={(value) => handleFilterChange("yield", value)}>
                <SelectTrigger className="bg-white border-2 border-slate-200 hover:border-slate-300 rounded-full px-6 py-3 hover:shadow-md transition-all duration-200 min-w-[120px]">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-3 w-3 text-emerald-500" />
                    <SelectValue placeholder="Yield" />
                  </div>
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-0 shadow-2xl bg-white p-2">
                  <SelectItem value="all" className="rounded-xl">
                    All Yields
                  </SelectItem>
                  <SelectItem value="low" className="rounded-xl">
                    📈 Under 7%
                  </SelectItem>
                  <SelectItem value="medium" className="rounded-xl">
                    📊 7% - 10%
                  </SelectItem>
                  <SelectItem value="high" className="rounded-xl">
                    🚀 Over 10%
                  </SelectItem>
                </SelectContent>
              </Select>

              <Select value={statusFilter} onValueChange={(value) => handleFilterChange("status", value)}>
                <SelectTrigger className="bg-white border-2 border-slate-200 hover:border-slate-300 rounded-full px-6 py-3 hover:shadow-md transition-all duration-200 min-w-[120px]">
                  <div className="flex items-center gap-2">
                    <Activity className="h-3 w-3 text-emerald-500" />
                    <SelectValue placeholder="Status" />
                  </div>
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-0 shadow-2xl bg-white p-2">
                  <SelectItem value="all" className="rounded-xl">
                    All Status
                  </SelectItem>
                  <SelectItem value="open" className="rounded-xl">
                    🟢 Open
                  </SelectItem>
                  <SelectItem value="closed" className="rounded-xl">
                    🔴 Closed
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {paginatedProperties.map((property) => (
            <PropertyCard key={property.id} property={property} onViewDetail={handleViewDetail} />
          ))}
        </div>

        {filteredProperties.length > itemsPerPage && (
          <div className="flex justify-center items-center mt-16">
            <div className="flex items-center gap-1 bg-white rounded-2xl p-2 shadow-lg border border-slate-100/50 backdrop-blur-sm">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="rounded-xl h-10 w-10 p-0 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronLeft className="h-4 w-4 text-slate-600" />
              </Button>

              <div className="flex items-center gap-1 mx-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant="ghost"
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className={`rounded-xl h-10 min-w-[40px] px-3 font-medium transition-all duration-200 ${
                      currentPage === page
                        ? "bg-emerald-500 hover:bg-emerald-600 text-white shadow-md shadow-emerald-500/25"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="rounded-xl h-10 w-10 p-0 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronRight className="h-4 w-4 text-slate-600" />
              </Button>
            </div>
          </div>
        )}

        {filteredProperties.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-white rounded-3xl p-12 max-w-md mx-auto shadow-sm border border-slate-100">
              <MapPin className="h-16 w-16 text-slate-300 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">No properties found</h3>
              <p className="text-slate-500 text-lg">Try adjusting your search criteria or filters.</p>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
