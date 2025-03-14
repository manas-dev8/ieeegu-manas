'use client'

import useSWR from 'swr'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  description: string
  image: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const ProjectShowcase = () => {
  const { data: projects, error } = useSWR<Project[]>('/api/projects', fetcher)

  if (error) return <div className="text-white">Failed to load projects</div>
  if (!projects) return <div className="text-white">Loading...</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <div key={project.id} className="bg-white bg-opacity-5 p-4 rounded-lg animate-slideIn transition-all duration-300 hover:bg-opacity-10 hover:scale-105">
          <Image src={project.image} alt={project.title} width={300} height={200} className="rounded-lg mb-4 w-full h-40 object-cover" />
          <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
          <p className="text-sm text-gray-300">{project.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ProjectShowcase