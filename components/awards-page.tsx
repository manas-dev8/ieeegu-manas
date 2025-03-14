import Image from "next/image";

const studentBranchAwards = [
  {
    image: "https://res.cloudinary.com/dgna3swph/image/upload/v1737884425/ee551988-89c4-4896-a346-a5e104bb9525_xyuqx6.jpg",
    caption: "Best Emerging Student Branch 2024 - Celebrating Technical Excellence",
  },
];

const volunteerAwards = [
  {
    image: "https://res.cloudinary.com/dgna3swph/image/upload/v1737884424/9b113fc3-0172-4254-8ef5-18bcee431e06_ifbizn.jpg",
    caption: "Shubhranshu Shekhar Dash - IEEE India Council Outstanding Volunteer Award 2024",
  },
  {
    image: "https://res.cloudinary.com/dgna3swph/image/upload/v1737884425/dd3228cd-cd8a-4baa-a05a-5a1f016fc8a2_yklk5k.jpg",
    caption: "Shubhranshu Shekhar Dash - IEEE UP Section Outstanding Volunteer Award 2024",
  },
];

export default function AwardsPage() {
  return (
    <div className="min-h-screen bg-[#1a1f3c]">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00629B] to-[#0096D6] opacity-90" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Achievements</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Celebrating excellence and innovation at IEEE Student Branch, Galgotias University
          </p>
        </div>
      </section>

      {/* Student Branch Awards */}
      <section className="py-16 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Student Branch Awards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {studentBranchAwards.map((award, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden w-full sm:w-[350px] md:w-[500px] h-[300px] mx-auto mb-6">
              <Image
                src={award.image}
                alt={award.caption}
                width={500}
                height={350}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <p className="text-white p-4 text-sm md:text-base">{award.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Volunteer Awards */}
      <section className="py-16 px-4 md:px-8 bg-[#151833]">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Volunteer Awards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {volunteerAwards.map((award, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden w-full sm:w-[350px] md:w-[500px] h-[300px] mx-auto mb-6">
              <Image
                src={award.image}
                alt={award.caption}
                width={500}
                height={350}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <p className="text-white p-4 text-sm md:text-base">{award.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
