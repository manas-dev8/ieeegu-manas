import { Suspense } from 'react'
// import Image from 'next/image'
import dynamic from 'next/dynamic'

const LiveUpdates = dynamic(() => import('@/components/LiveUpdates'), { ssr: false })
const ProjectShowcase = dynamic(() => import('@/components/ProjectShowcase'), { ssr: false })
const TeamMembers = dynamic(() => import('@/components/TeamMembers'), { ssr: false })
const GalaxyBackground = dynamic(() => import('@/components/GalaxyBackground'), { ssr: false })

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="relative h-screen flex flex-col items-center justify-center p-4 sm:p-8 overflow-hidden">
        <GalaxyBackground />
        <div className="z-10 text-center">
          <div className="w-48 h-24 bg-white bg-opacity-20 rounded-lg mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
            IEEE CS GUSB Logo
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-2 text-white">IEEE CS GUSB</h1>
          <p className="text-xl sm:text-2xl text-white">Innovate. Create. Elevate.</p>
        </div>
      </header>

      <main className="relative z-10">
        <section className="py-16 px-4 sm:px-8 bg-cover bg-center" style={{backgroundImage: 'url("/space-nebula.jpg")'}}>
          <div className="max-w-4xl mx-auto bg-black bg-opacity-70 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">About Us</h2>
            <p className="text-lg text-white animate-fadeIn">
              IEEE Computer Society Galgotias University Student Branch is dedicated to advancing technology and fostering innovation among students. We organize workshops, seminars, and projects to help our members stay at the forefront of computer science and engineering.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-8 bg-cover bg-center" style={{backgroundImage: 'url("/space-stars.jpg")'}}>
          <div className="max-w-4xl mx-auto bg-black bg-opacity-70 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">Upcoming Events</h2>
            <Suspense fallback={<div className="text-white">Loading events...</div>}>
              <LiveUpdates />
            </Suspense>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-8 bg-cover bg-center" style={{backgroundImage: 'url("/space-galaxy.jpg")'}}>
          <div className="max-w-4xl mx-auto bg-black bg-opacity-70 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">Project Showcase</h2>
            <Suspense fallback={<div className="text-white">Loading projects...</div>}>
              <ProjectShowcase />
            </Suspense>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-8 bg-cover bg-center" style={{backgroundImage: 'url("/space-planets.jpg")'}}>
          <div className="max-w-4xl mx-auto bg-black bg-opacity-70 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">Our Team</h2>
            <Suspense fallback={<div className="text-white">Loading team members...</div>}>
              <TeamMembers />
            </Suspense>
          </div>
        </section>
      </main>

      <footer className="relative z-10 bg-black bg-opacity-70 py-8 text-center text-white">
        <p>&copy; 2024 IEEE CS GUSB. All rights reserved.</p>
      </footer>
    </div>
  )
}