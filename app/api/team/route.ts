import { NextResponse } from 'next/server'

export async function GET() {
  
  const team = [
    { id: 1, name: 'John Doe', role: 'Chair', image: '/placeholder.svg?height=100&width=100' },
    { id: 2, name: 'Jane Smith', role: 'Vice Chair', image: '/placeholder.svg?height=100&width=100' },
    { id: 3, name: 'Alice Johnson', role: 'Secretary', image: '/placeholder.svg?height=100&width=100' },
    { id: 4, name: 'Bob Williams', role: 'Webmaster', image: '/placeholder.svg?height=100&width=100' },
  ]

  return NextResponse.json(team)
}

