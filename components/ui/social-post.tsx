import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Instagram, Linkedin } from 'lucide-react'

interface SocialPostProps {
  type: "instagram" | "linkedin"
  imageUrl: string
  title: string
  content: string
}

export function SocialPost({ type, imageUrl, title, content }: SocialPostProps) {
  const Icon = type === "instagram" ? Instagram : Linkedin

  return (
    <Card className="overflow-hidden w-[300px] flex-shrink-0 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
      <CardHeader className="flex flex-row items-center space-x-2 p-4">
        <Icon className="h-5 w-5" />
        <CardTitle className="text-sm">{title}</CardTitle>
      </CardHeader>
      <Image src={imageUrl || "/placeholder.svg"} alt={title} width={300} height={300} className="w-full object-cover h-48" />
      <CardContent className="p-4">
        <p className="text-sm">{content}</p>
      </CardContent>
    </Card>
  )
}

