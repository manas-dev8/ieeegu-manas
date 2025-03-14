'use client'

import useSWR from 'swr'
import Image from 'next/image'

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const TeamMembers = () => {
  const { data: members, error } = useSWR<TeamMember[]>('/api/team', fetcher)

  if (error) return <div className="text-white">Failed to load team members</div>
  if (!members) return <div className="text-white">Loading...</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {members.map((member) => (
        <div key={member.id} className="bg-white bg-opacity-5 p-4 rounded-lg text-center animate-slideIn transition-all duration-300 hover:bg-opacity-10 hover:scale-105">
          <Image src={member.image} alt={member.name} width={100} height={100} className="rounded-full mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white">{member.name}</h3>
          <p className="text-sm text-gray-300">{member.role}</p>
        </div>
      ))}
    </div>
  )
}

export default TeamMembers