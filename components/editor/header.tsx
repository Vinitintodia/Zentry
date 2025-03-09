"use client"

import React from "react"
import { ArrowLeft, Eye, Code, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from "next/navigation"
import { useEditor } from "@/contexts/editor-context"
import { useUser } from "@clerk/nextjs"
import { ThemeToggle } from "@/components/theme-toggle"

interface HeaderProps {
  title: string;
}

export function EditorHeader({ title }: HeaderProps) {
  const { viewMode, setViewMode, setShowExportCode } = useEditor()
  const router = useRouter()
  const { user } = useUser()
  
  // Get user initials for avatar fallback
  const getInitials = () => {
    if (!user) return "U";
    
    const firstName = user.firstName || "";
    const lastName = user.lastName || "";
    
    return firstName.charAt(0) + lastName.charAt(0);
  }
  
  return (
    <header className="editor-header  h-14 items-center justify-between border-b px-6">
      <div className="flex h-14 items-center justify-between border-b px-4">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={() => router.push("/dashboard")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <span className="font-medium">{title}</span>
      </div>
      
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" onClick={() => setViewMode(viewMode === "design" ? "preview" : "design")}>
          <Eye className="mr-2 h-4 w-4" />
          Preview
        </Button>
        <Button variant="ghost" size="sm" onClick={() => setShowExportCode(true)}>
          <Code className="mr-2 h-4 w-4" />
          Export
        </Button>
        <Button variant="outline" size="sm">
          <Save className="mr-2 h-4 w-4" />
          Save
        </Button>
      </div>
      
      <div className="flex items-center gap-4">
      <ThemeToggle />
        <Avatar className="h-8 w-8">
          <AvatarImage src={user?.imageUrl} alt={user?.fullName || "User"} />
          <AvatarFallback>{getInitials()}</AvatarFallback>
        </Avatar>
        <div className="text-sm">
          <p className="font-medium">{user?.fullName || "Guest User"}</p>
          <p className="text-xs text-muted-foreground">Editing</p>
        </div>
      </div>
    </div>
      
    </header>
  )
} 