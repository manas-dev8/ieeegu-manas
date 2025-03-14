'use client'

import useSWR from 'swr'

interface Event {
  id: number
  title: string
  date: string
  description: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const LiveUpdates = () => {
  const { data: events, error } = useSWR<Event[]>('/api/events', fetcher, { refreshInterval: 60000 })

  if (error) return <div className="text-white">Failed to load events</div>
  if (!events) return <div className="text-white">Loading...</div>

  return (
    <ul className="space-y-4">
      {events.map(event => (
        <li key={event.id} className="bg-white bg-opacity-5 p-4 rounded-lg animate-slideIn transition-all duration-300 hover:bg-opacity-10 hover:scale-105">
          <h3 className="text-xl font-semibold text-white">{event.title}</h3>
          <p className="text-sm text-gray-300">{event.date}</p>
          <p className="text-white mt-2">{event.description}</p>
        </li>
      ))}
    </ul>
  )
}

export default LiveUpdates