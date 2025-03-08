"use client"

import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"

const templates = [
  {
    title: "Modern Landing Page",
    description: "A clean and modern landing page template with hero and features sections.",
    type: "Landing",
    sections: 2,
    image: "/templates/modern-landing.jpg"
  },
  {
    title: "Creative Portfolio",
    description: "Showcase your work with this elegant portfolio template.",
    type: "Portfolio",
    sections: 2,
    image: "/templates/creative-portfolio.jpg"
  },
  {
    title: "Business Website",
    description: "Professional template for businesses and startups.",
    type: "Business",
    sections: 2,
    image: "/templates/business-website.jpg"
  }
]

export default function Page() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedFilter, setSelectedFilter] = React.useState("All")
  const [activeTab, setActiveTab] = React.useState("all")

  // Filter templates based on search query and selected filter
  const filteredTemplates = React.useMemo(() => {
    return templates.filter((template) => {
      const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          template.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesFilter = selectedFilter === "All" || template.type === selectedFilter

      return matchesSearch && matchesFilter
    })
  }, [searchQuery, selectedFilter])

  // Get templates based on active tab
  const getTabTemplates = (templates: typeof filteredTemplates) => {
    switch (activeTab) {
      case "recent":
        // In a real app, you'd sort by date or have a separate recent templates array
        return templates.slice(0, 2)
      case "popular":
        // In a real app, you'd sort by popularity or have a separate popular templates array
        return templates.slice().reverse()
      default:
        return templates
    }
  }

  const displayedTemplates = getTabTemplates(filteredTemplates)

  const handleUseTemplate = (templateId: string) => {
    router.push(`/editor/${templateId}`)
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Templates</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>All Templates</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-col gap-4 p-4">
          <div className="flex items-center justify-between">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search templates..." 
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    {selectedFilter}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setSelectedFilter("All")}>
                    All
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedFilter("Landing")}>
                    Landing Pages
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedFilter("Portfolio")}>
                    Portfolios
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedFilter("Business")}>
                    Business
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
            </TabsList>
            <TabsContent value={activeTab} className="mt-6">
              {displayedTemplates.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No templates found matching your criteria
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {displayedTemplates.map((template) => (
                    <Card key={template.title}>
                      <CardHeader>
                        <img
                          src={template.image}
                          alt={template.title}
                          className="aspect-video w-full rounded-lg object-cover"
                        />
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <CardTitle>{template.title}</CardTitle>
                          <span className="text-xs font-medium text-muted-foreground">
                            {template.type}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {template.description}
                        </p>
                      </CardContent>
                      <CardFooter className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          {template.sections} sections
                        </div>
                        <Button onClick={() => handleUseTemplate(template.title.toLowerCase().replace(/\s+/g, '-'))}>
                          Use Template
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
