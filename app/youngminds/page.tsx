import React from 'react';
import Image from 'next/image';

export default function YoungMinds() {
    const days = [
        {
            day: 'Day 1',
            title: 'Introduction to Technology',
            description: 'Kickoff event with keynote speakers and interactive demos.',
            activities: ['Opening Ceremony', 'Keynote Speech', 'Technology Exhibition']
        },
        {
            day: 'Day 2',
            title: 'Coding Fundamentals',
            description: 'Learn the basics of programming and computational thinking.',
            activities: ['Coding Workshops', 'Problem Solving Sessions', 'Team Building']
        },
        {
            day: 'Day 3',
            title: 'Innovation & Design',
            description: 'Explore creative thinking and product design concepts.',
            activities: ['Design Thinking Workshop', 'Prototyping Session', 'Innovation Challenge']
        },
        {
            day: 'Day 4',
            title: 'Artificial Intelligence',
            description: 'Dive into AI, machine learning, and future technologies.',
            activities: ['AI Fundamentals', 'Hands-on ML Projects', 'Ethics in AI Panel']
        },
        {
            day: 'Day 5',
            title: 'Project Development',
            description: 'Work in teams to build real-world technology solutions.',
            activities: ['Project Planning', 'Development Sprint', 'Mentoring Sessions']
        },
        {
            day: 'Day 6',
            title: 'Showcase & Celebration',
            description: 'Present your projects and celebrate achievements.',
            activities: ['Project Presentations', 'Awards Ceremony', 'Networking Event']
        },
    ];

    const speakers = [
        { name: 'Dr. Sarah Chen', role: 'AI Researcher', organization: 'Tech University' },
        { name: 'Michael Rodriguez', role: 'Software Engineer', organization: 'InnovateTech' },
        { name: 'Aisha Patel', role: 'Product Designer', organization: 'DesignHub' },
        { name: 'James Wilson', role: 'Robotics Expert', organization: 'Future Systems' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-20 px-4">
                <div className="container mx-auto max-w-5xl">
                    <h1 className="text-5xl font-bold mb-6">Young Minds</h1>
                    <p className="text-2xl mb-8">Empowering the next generation of technology innovators</p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-50 transition">
                            Register Now
                        </button>
                        <button className="border border-white py-3 px-6 rounded-full hover:bg-blue-700 transition">
                            Learn More
                        </button>
                    </div>
                    <p className="mt-8 text-blue-100">July 10-15, 2023 • IEEE GU Campus • Galgotias University</p>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl font-bold mb-8 text-center">About The Event</h2>
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Young Minds is a 6-day immersive technology event designed to inspire and educate students
                            about the latest advancements in technology. From coding and artificial intelligence to design
                            thinking and innovation, participants will have the opportunity to learn from industry experts,
                            collaborate with peers, and develop projects that address real-world challenges.
                        </p>
                        <div className="mt-8 flex justify-center gap-8 flex-wrap">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-600">6</div>
                                <div className="text-gray-600">Days</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-600">24+</div>
                                <div className="text-gray-600">Workshops</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-600">12+</div>
                                <div className="text-gray-600">Speakers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-600">300+</div>
                                <div className="text-gray-600">Participants</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Schedule Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl font-bold mb-8 text-center">Event Schedule</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {days.map((day, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                                <div className="bg-blue-600 text-white py-3 px-6">
                                    <h3 className="font-bold">{day.day} - {day.title}</h3>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 mb-4">{day.description}</p>
                                    <ul className="space-y-2">
                                        {day.activities.map((activity, idx) => (
                                            <li key={idx} className="flex items-center">
                                                <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                                                {activity}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Speakers Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl font-bold mb-8 text-center">Featured Speakers</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {speakers.map((speaker, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
                                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-gray-500">Photo</span>
                                </div>
                                <h3 className="font-bold text-xl">{speaker.name}</h3>
                                <p className="text-blue-600">{speaker.role}</p>
                                <p className="text-gray-600 text-sm">{speaker.organization}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <button className="border border-blue-600 text-blue-600 py-2 px-6 rounded-full hover:bg-blue-50 transition">
                            View All Speakers
                        </button>
                    </div>
                </div>
            </section>

            {/* Registration Section */}
            <section className="py-16 px-4 bg-blue-600 text-white">
                <div className="container mx-auto max-w-5xl text-center">
                    <h2 className="text-3xl font-bold mb-4">Join Us at Young Minds 2023</h2>
                    <p className="text-xl mb-8 text-blue-100">Limited spots available. Register today to secure your place.</p>
                    <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition text-lg">
                        Register Now
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-4 bg-gray-800 text-white">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full md:w-1/3 mb-6">
                            <h3 className="text-xl font-bold mb-4">Young Minds</h3>
                            <p className="text-gray-400">A technology event by IEEE Galgotias University</p>
                        </div>
                        <div className="w-full md:w-1/3 mb-6">
                            <h3 className="text-xl font-bold mb-4">Contact</h3>
                            <p className="text-gray-400">ieeegu@galgotiasuniversity.edu.in</p>
                            <p className="text-gray-400">+91 98765 43210</p>
                        </div>
                        <div className="w-full md:w-1/3 mb-6">
                            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                            <div className="flex gap-4">
                                <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
                                <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
                                <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                        <p>© 2023 Young Minds | IEEE Galgotias University. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}