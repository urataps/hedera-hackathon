"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Plus, X, Upload, CheckCircle, Building2, DollarSign, Leaf } from "lucide-react"

interface PropertyFormData {
  title: string
  location: string
  type: string
  description: string
  totalValue: string
  totalShares: string
  expectedYield: string
  sustainabilityScore: string
  tags: string[]
  area: string
  imageUrl: string
}

export function CreatePropertyForm() {
  const [formData, setFormData] = useState<PropertyFormData>({
    title: "",
    location: "",
    type: "",
    description: "",
    totalValue: "",
    totalShares: "",
    expectedYield: "",
    sustainabilityScore: "",
    tags: [],
    area: "",
    imageUrl: "",
  })

  const [newTag, setNewTag] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (field: keyof PropertyFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData((prev) => ({ ...prev, tags: [...prev.tags, newTag.trim()] }))
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({ ...prev, tags: prev.tags.filter((tag) => tag !== tagToRemove) }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Simulate property creation
    setTimeout(() => {
      setSubmitStatus("success")
      setIsSubmitting(false)
      // Reset form after success
      setTimeout(() => {
        setSubmitStatus("idle")
        setFormData({
          title: "",
          location: "",
          type: "",
          description: "",
          totalValue: "",
          totalShares: "",
          expectedYield: "",
          sustainabilityScore: "",
          tags: [],
          area: "",
          imageUrl: "",
        })
      }, 3000)
    }, 2500)
  }

  const isFormValid =
    formData.title && formData.location && formData.type && formData.totalValue && formData.totalShares

  if (submitStatus === "success") {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-green-800 mb-2">Property Created Successfully!</h3>
          <p className="text-green-700 mb-4">
            {formData.title} has been added to the marketplace with {formData.totalShares} shares available for
            investment.
          </p>
          <Badge variant="outline" className="bg-green-100 border-green-300 text-green-800">
            Property ID: PROP-{Date.now()}
          </Badge>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-0 shadow-xl bg-white rounded-3xl overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200 px-8 py-8 text-[rgba(255,255,255,1)] bg-[rgba(255,255,255,1)]">
        <CardTitle className="text-3xl font-bold text-slate-800 flex items-center gap-3">
          <div className="p-3 bg-emerald-500 rounded-2xl">
            <Building2 className="h-8 w-8 text-white" />
          </div>
          Create New Property
        </CardTitle>
        <p className="text-slate-600 mt-2 text-lg">Add a new real-world asset to the marketplace</p>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-slate-100 rounded-xl">
                <Building2 className="h-5 w-5 text-slate-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Basic Information</h3>
            </div>
            <div className="rounded-2xl p-6 space-y-6 bg-[rgba(255,255,255,1)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="title" className="text-base font-semibold text-slate-700">
                    Property Title *
                  </Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    placeholder="e.g., Amazon Rainforest Conservation"
                    required
                    className="h-12 text-base border-slate-300 rounded-xl focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="location" className="text-base font-semibold text-slate-700">
                    Location *
                  </Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    placeholder="e.g., Brazil"
                    required
                    className="h-12 text-base border-slate-300 rounded-xl focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="type" className="text-base font-semibold text-slate-700">
                    Property Type *
                  </Label>
                  <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
                    <SelectTrigger className="h-12 text-base border-slate-300 rounded-xl focus:border-emerald-500 focus:ring-emerald-500">
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="forest">Forest Conservation</SelectItem>
                      <SelectItem value="solar">Solar Energy</SelectItem>
                      <SelectItem value="real-estate">Real Estate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="area" className="text-base font-semibold text-slate-700">
                    Area/Size
                  </Label>
                  <Input
                    id="area"
                    value={formData.area}
                    onChange={(e) => handleInputChange("area", e.target.value)}
                    placeholder="e.g., 1,000 hectares"
                    className="h-12 text-base border-slate-300 rounded-xl focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="description" className="text-base font-semibold text-slate-700">
                  Description
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="Describe the property and its investment potential..."
                  rows={4}
                  className="text-base border-slate-300 rounded-xl focus:border-emerald-500 focus:ring-emerald-500 resize-none"
                />
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-[rgba(241,245,249,1)]">
                <DollarSign className="h-5 w-5 text-[rgba(69,85,108,1)]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Financial Information</h3>
            </div>
            <div className="rounded-2xl p-6 space-y-6 bg-[rgba(255,255,255,1)]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="totalValue" className="text-base font-semibold text-slate-700">
                    Total Property Value ($) *
                  </Label>
                  <Input
                    id="totalValue"
                    type="number"
                    value={formData.totalValue}
                    onChange={(e) => handleInputChange("totalValue", e.target.value)}
                    placeholder="2,500,000"
                    required
                    className="h-12 text-base border-slate-300 rounded-xl focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="totalShares" className="text-base font-semibold text-slate-700">
                    Total Shares *
                  </Label>
                  <Input
                    id="totalShares"
                    type="number"
                    value={formData.totalShares}
                    onChange={(e) => handleInputChange("totalShares", e.target.value)}
                    placeholder="10,000"
                    required
                    className="h-12 text-base border-slate-300 rounded-xl focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="expectedYield" className="text-base font-semibold text-slate-700">
                    Expected Yield (%)
                  </Label>
                  <Input
                    id="expectedYield"
                    type="number"
                    step="0.1"
                    value={formData.expectedYield}
                    onChange={(e) => handleInputChange("expectedYield", e.target.value)}
                    placeholder="8.5"
                    className="h-12 text-base border-slate-300 rounded-xl focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {formData.totalValue && formData.totalShares && (
                <div className="bg-white p-6 rounded-2xl border border-emerald-200 shadow-sm">
                  <div className="text-sm font-medium text-slate-600 mb-2">Price per share:</div>
                  <div className="text-3xl font-bold text-emerald-600">
                    ${(Number.parseInt(formData.totalValue) / Number.parseInt(formData.totalShares)).toFixed(2)}
                  </div>
                </div>
              )}
            </div>
          </div>

          <Separator />

          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-[rgba(241,245,249,1)]">
                <Leaf className="h-5 w-5 text-[rgba(69,85,108,1)]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Sustainability & Tags</h3>
            </div>
            <div className="rounded-2xl p-6 space-y-6 bg-background">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="sustainabilityScore" className="text-base font-semibold text-slate-700">
                    Sustainability Score (0-100)
                  </Label>
                  <Input
                    id="sustainabilityScore"
                    type="number"
                    min="0"
                    max="100"
                    value={formData.sustainabilityScore}
                    onChange={(e) => handleInputChange("sustainabilityScore", e.target.value)}
                    placeholder="95"
                    className="h-12 text-base border-slate-300 rounded-xl focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="imageUrl" className="text-base font-semibold text-slate-700">
                    Image URL
                  </Label>
                  <div className="flex gap-3">
                    <Input
                      id="imageUrl"
                      value={formData.imageUrl}
                      onChange={(e) => handleInputChange("imageUrl", e.target.value)}
                      placeholder="https://example.com/image.jpg"
                      className="h-12 text-base border-slate-300 rounded-xl focus:border-emerald-500 focus:ring-emerald-500"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="h-12 px-4 rounded-xl border-slate-300 bg-transparent"
                    >
                      <Upload className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-base font-semibold text-slate-700">Tags</Label>
                <div className="flex gap-3">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add a tag..."
                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                    className="h-12 text-base border-slate-300 rounded-xl focus:border-emerald-500 focus:ring-emerald-500"
                  />
                  <Button
                    type="button"
                    onClick={addTag}
                    variant="outline"
                    size="sm"
                    className="h-12 px-6 rounded-xl border-slate-300 bg-transparent"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add
                  </Button>
                </div>
                {formData.tags.length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-4">
                    {formData.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="flex items-center gap-2 px-4 py-2 text-sm bg-white border-slate-300 rounded-xl"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="ml-1 hover:text-red-500 transition-colors"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-6">
            <Button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className="min-w-[240px] h-14 text-lg font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              {isSubmitting ? (
                <>
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent mr-3" />
                  Creating Property...
                </>
              ) : (
                <>
                  <Plus className="h-5 w-5 mr-3" />
                  Create Property
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
