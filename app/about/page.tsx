"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Zap, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function AboutIEEE() {
  return (
    <section className="py-16 bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 animate-fade-in-up">
          About IEEE at Galgotias University
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6 animate-fade-in-left">
            <p className="text-lg">
              IEEE (Institute of Electrical and Electronics Engineers) is the world&apos;s largest technical professional organization dedicated to advancing technology for the benefit of humanity.
            </p>
            <p className="text-lg">
              At Galgotias University, the IEEE Student Branch provides a platform for students to enhance their technical skills, network with professionals, and contribute to technological advancements.
            </p>
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p className="text-lg">
              To foster technological innovation and excellence for the benefit of humanity, while promoting the professional development of our student members.
            </p>
            <h3 className="text-xl font-semibold">What We Offer</h3>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Technical workshops and seminars</li>
              <li>Industry expert talks and panel discussions</li>
              <li>Project development opportunities</li>
              <li>Networking events with professionals</li>
              <li>Access to IEEE&apos;s vast digital library</li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <Button className="transition-all duration-300 hover:scale-105 bg-white text-black dark:bg-gray-800 dark:text-white">
                Join IEEE Galgotias
              </Button>
              <Link href="https://tr.ee/VZE64pxyk4">
                <Button variant="outline" className="flex items-center transition-all duration-300 hover:scale-105 dark:border-gray-600 dark:text-white">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Our Linktree
                </Button>
              </Link>
            </div>
          </div>
          <div className="space-y-6 animate-fade-in-right">
            <div className="grid gap-4">
              <Card className="transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 dark:bg-gray-800 dark:text-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2" />
                    Learning Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Access to workshops, seminars, and technical talks by industry experts.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 dark:bg-gray-800 dark:text-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2" />
                    Networking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Connect with peers, professors, and professionals in the field of technology.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 dark:bg-gray-800 dark:text-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="mr-2" />
                    Innovation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Participate in projects and competitions to showcase your technical skills.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
