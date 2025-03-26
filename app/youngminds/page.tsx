import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function YoungMinds() {
    const speakers = [
        { name: 'Dr. Sarah Chen', role: 'AI Researcher', organization: 'Tech University' },
        { name: 'Michael Rodriguez', role: 'Software Engineer', organization: 'InnovateTech' },
        { name: 'Aisha Patel', role: 'Product Designer', organization: 'DesignHub' },
        { name: 'James Wilson', role: 'Robotics Expert', organization: 'Future Systems' },
    ];
    
    const events = [
        {
            id: "imagix",
            name: "IMAGIX",
            date: "02-04-2025",
            venue: "AI/DS LIBRARY LG",
            organizer: "COMPUTER SOCIETY",
            pricePerPerson: 0,
            fixedPrice: 150,
            minTeamSize: 1,
            maxTeamSize: 3,
            isFixedPrice: true
        },
        {
            id: "techTriviaBlitz",
            name: "TECH TRIVIA BLITZ",
            date: "03-04-2025",
            venue: "AI/DS 307",
            organizer: "WOMEN IN ENGINEERING",
            pricePerPerson: 70,
            minTeamSize: 1,
            maxTeamSize: 1,
            isFixedPrice: false
        },
        {
            id: "decodeTheCode",
            name: "DECODE THE CODE",
            date: "03-04-2025",
            venue: "AI/DS 307",
            organizer: "WOMEN IN ENGINEERING",
            pricePerPerson: 60,
            minTeamSize: 1,
            maxTeamSize: 1,
            isFixedPrice: false
        },
        {
            id: "codeBlind",
            name: "CODEBLINDS",
            date: "03-04-2025",
            venue: "AI/DS 307",
            organizer: "TECHNOJAM",
            pricePerPerson: 60,
            minTeamSize: 1,
            maxTeamSize: 1,
            isFixedPrice: false
        },
        {
            id: "followTheLine",
            name: "FOLLOW THE LINE",
            date: "04-04-2025",
            venue: "C BLOCK",
            organizer: "INDUSTRY APPLICATIONS SOCIETY",
            pricePerPerson: 100,
            minTeamSize: 1,
            maxTeamSize: 4,
            isFixedPrice: false
        },
        {
            id: "designCanvas",
            name: "DESIGN CANVAS",
            date: "04-04-2025",
            venue: "GROUND",
            organizer: "INDUSTRY APPLICATIONS SOCIETY",
            pricePerPerson: 50,
            minTeamSize: 2,
            maxTeamSize: 4,
            isFixedPrice: false
        },
        {
            id: "codeastra",
            name: "CODE ASTRA",
            date: "05-04-2025",
            venue: "AI/DS 1ST FLOOR FULL LENGTH",
            organizer: "GALGOTIAS TECH COUNCIL",
            pricePerPerson: 100,
            minTeamSize: 2,
            maxTeamSize: 4,
            isFixedPrice: false
        },
        {
            id: "culturalEvents",
            name: "CULTURAL EVENTS",
            date: "05-04-2025",
            venue: "NEW AUDI",
            organizer: "GALGOTIAS UNIVERSITY STUDENT COUNCIL",
            pricePerPerson: 50,
            minTeamSize: 1,
            maxTeamSize: 1,
            isFixedPrice: false
        },
        {
            id: "photoWalk",
            name: "PHOTOWALK",
            date: "05-04-2025",
            venue: "UNIVERSITY CAMPUS",
            organizer: "VGTC GU",
            pricePerPerson: 50,
            minTeamSize: 1,
            maxTeamSize: 1,
            isFixedPrice: false
        },
        {
            id: "codeastra2",
            name: "CODE ASTRA",
            date: "06-04-2025",
            venue: "AI/DS 1ST FLOOR FULL LENGTH",
            organizer: "GALGOTIAS TECH COUNCIL",
            pricePerPerson: 100,
            minTeamSize: 2,
            maxTeamSize: 4,
            isFixedPrice: false
        },
        {
            id: "pitchMe",
            name: "PITCH ME 3.0",
            date: "06-04-2025",
            venue: "AI/DS 307",
            organizer: "E CELL",
            pricePerPerson: 0,
            fixedPrice: 150,
            minTeamSize: 1,
            maxTeamSize: 2,
            isFixedPrice: true
        },
        {
            id: "photoWalk2",
            name: "PHOTOWALK",
            date: "06-04-2025",
            venue: "UNIVERSITY CAMPUS",
            organizer: "VGTC GU",
            pricePerPerson: 50,
            minTeamSize: 1,
            maxTeamSize: 1,
            isFixedPrice: false
        }
    ];
    
    // Group events by date
    const eventsByDate = events.reduce<Record<string, typeof events>>((acc, event) => {
        if (!acc[event.date]) {
            acc[event.date] = [];
        }
        acc[event.date].push(event);
        return acc;
    }, {});
    
    // Function to determine value indicator
    const getValueIndicator = (event: { 
        isFixedPrice: boolean; 
        fixedPrice?: number; 
        pricePerPerson: number; 
    }) => {
        if (event.isFixedPrice) {
            if (event.fixedPrice && event.fixedPrice <= 100) return 1;
            else if (event.fixedPrice && event.fixedPrice <= 200) return 2;
            else return 3;
        } else {
            if (event.pricePerPerson <= 50) return 1;
            else if (event.pricePerPerson <= 100) return 2;
            else return 3;
        }
    };
    
    const sponsors = [
        { category: "Platinum", names: ["TechCorp", "InnovateNow"] },
        { category: "Gold", names: ["NextGen Systems", "Digital Solutions"] },
        { category: "Silver", names: ["CloudWave", "DevSecOps", "Quantum Computing"] }
    ];
    
    const partners = [
        { type: "Academic", names: ["Galgotias University", "Tech Institute", "Innovation Academy"] },
        { type: "Community", names: ["CodeCommunity", "TechTalks", "Developer Network", "Women in Tech"] }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-20 px-4">
                <div className="container mx-auto max-w-5xl">
                    <h1 className="text-5xl font-bold mb-6">Young Minds</h1>
                    <p className="text-2xl mb-8">Empowering the next generation of technology innovators</p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/regym">
                        <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-50 transition">
                            Register Now
                        </button>
                        </Link>
                        <button className="border border-white py-3 px-6 rounded-full hover:bg-blue-700 transition">
                            Learn More
                        </button>
                    </div>
                    <p className="mt-8 text-blue-100">April 2-6, 2025 • IEEE GU Campus • Galgotias University</p>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl dark:text-black font-bold mb-8 text-center">About The Event</h2>
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Young Minds is a 5-day immersive technology event designed to inspire and educate students
                            about the latest advancements in technology. From coding and artificial intelligence to design
                            thinking and innovation, participants will have the opportunity to learn from industry experts,
                            collaborate with peers, and develop projects that address real-world challenges.
                        </p>
                        <div className="mt-8 flex justify-center gap-8 flex-wrap">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-600">5</div>
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

            {/* Competitions Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold mb-2 dark:text-black text-center">Tech Competitions</h2>
                    <p className="text-center text-gray-600 mb-8">Exciting challenges to showcase your skills and creativity</p>
                    <p className="text-center text-gray-600 mb-8">Attention: Dates are in DD-MM-YY format</p>
                    
                    {/* Program by Day */}
                    {Object.keys(eventsByDate).sort().map(date => (
                        <div key={date} className="mb-12">
                            <h3 className="text-2xl font-bold mb-4 text-blue-600 border-b pb-2">{date}</h3>
                            
                            {/* Events for this day */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {eventsByDate[date].map(event => (
                                    <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                                        <div className="bg-blue-600 text-white py-2 px-4 flex justify-between items-center">
                                            <h4 className="font-bold truncate">{event.name}</h4>
                                            <div className="flex gap-1">
                                                {[...Array(getValueIndicator(event))].map((_, i) => (
                                                    <span key={i} className="h-2 w-2 bg-yellow-400 rounded-full"></span>
                                                ))}
                                                {[...Array(3 - getValueIndicator(event))].map((_, i) => (
                                                    <span key={i} className="h-2 w-2 bg-white bg-opacity-30 rounded-full"></span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-2">
                                                <p className="text-sm font-medium text-blue-600">{event.organizer}</p>
                                            </div>
                                            <div className="flex items-center mb-2">
                                                <svg className="h-4 w-4 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <p className="text-gray-600 text-sm">{event.venue}</p>
                                            </div>
                                            <div className="flex items-center">
                                                <svg className="h-4 w-4 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                                <p className="text-gray-600 text-sm">
                                                    Team: {event.minTeamSize === event.maxTeamSize 
                                                           ? `${event.minTeamSize} participant${event.minTeamSize > 1 ? 's' : ''}` 
                                                           : `${event.minTeamSize}-${event.maxTeamSize} participants`}
                                                </p>
                                            </div>
                                            
                                            <Link href="/regym">
                                            <button className="mt-4 w-full bg-blue-50 text-blue-600 font-medium py-2 rounded hover:bg-blue-100 transition">
                                                Register
                                            </button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Speakers Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl font-bold mb-8 dark:text-black text-center">Featured Speakers</h2>
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

            {/* Sponsors Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold mb-2 text-black text-center">Our Sponsors</h2>
                    <p className="text-center text-gray-600 mb-8">Thanks to our incredible sponsors for making this event possible</p>
                    
                    {sponsors.map((tier, index) => (
                        <div key={index} className="mb-10">
                            <h3 className="text-xl font-bold mb-4 text-center">
                                <span className="inline-block px-6 py-1 rounded-full bg-blue-600 text-white">{tier.category}</span>
                            </h3>
                            <div className="flex flex-wrap justify-center gap-6">
                                {tier.names.map((name, i) => (
                                    <div key={i} className={`
                                        ${tier.category === 'Platinum' ? 'h-32 w-64' : tier.category === 'Gold' ? 'h-24 w-48' : 'h-20 w-40'} 
                                        bg-white shadow-md rounded-lg flex items-center justify-center border border-gray-200`}>
                                        <p className="font-bold text-gray-700">{name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Partners Section - Improved */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold mb-2 text-black text-center">Our Partners</h2>
                    <p className="text-center text-gray-600 mb-8">Collaborating to create an exceptional experience</p>
                    
                    {partners.map((category, index) => (
                        <div key={index} className="mb-10">
                            <h3 className="text-xl font-bold mb-6 text-center">
                                <span className="inline-block px-6 py-1 rounded-full bg-blue-600 text-white">{category.type} Partners</span>
                            </h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {category.names.map((name, i) => (
                                    <div key={i} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                                        <div className="w-16 h-16 bg-blue-50 rounded-full mx-auto mb-4 flex items-center justify-center">
                                            <span className="text-blue-600 font-bold">{name.charAt(0)}</span>
                                        </div>
                                        <h3 className="font-bold text-lg text-gray-800">{name}</h3>
                                        <p className="text-blue-600 text-sm mt-1">{category.type} Partner</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    
                    {/* Community spotlight */}
                    <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
                        <h3 className="text-xl font-bold mb-4 dark:text-black text-center">Community Spotlight</h3>
                        <p className="text-center text-gray-600 mb-6">
                            Special thanks to our community supporters who help us reach a wider audience
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {['Developer Network', 'Women in Tech', 'Student Innovation Hub', 'Tech Meetups'].map((name, i) => (
                                <div key={i} className="bg-blue-50 px-6 py-3 rounded-full text-blue-700 font-medium">
                                    {name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration Section */}
            <section className="py-16 px-4 bg-blue-600 text-white">
                <div className="container mx-auto max-w-5xl text-center">
                    <h2 className="text-3xl font-bold mb-4">Join Us at Young Minds 2023</h2>
                    <p className="text-xl mb-8 text-blue-100">Limited spots available. Register today to secure your place.</p>
                    <Link href="regym">
                    <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition text-lg">
                        Register Now
                    </button>
                    </Link>
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
                            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                                <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
                                <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/refund-policy" className="text-gray-400 hover:text-white transition-colors">Refund Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                        <p>© 2025 ICCSAI Young Minds | IEEE Galgotias University. All rights reserved.</p>
                        <div className="flex flex-wrap justify-center gap-4 mt-4">
                            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">Terms</Link>
                            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">Privacy</Link>
                            <Link href="/refund-policy" className="text-gray-400 hover:text-white text-sm">Refunds</Link>
                            <Link href="/about" className="text-gray-400 hover:text-white text-sm">About</Link>
                            <Link href="/contact" className="text-gray-400 hover:text-white text-sm">Contact</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}