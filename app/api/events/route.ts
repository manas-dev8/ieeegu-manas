import { NextResponse } from 'next/server'

export async function GET() {
  
  const events = [
    { id: 1, title: 'AI Workshop', date: '2023-07-15' },
    { id: 2, title: 'Hackathon 2023', date: '2023-08-01' },
    { id: 3, title: 'Tech Talk: Future of Computing', date: '2023-08-15' },
  ]

  return NextResponse.json(events)
}

