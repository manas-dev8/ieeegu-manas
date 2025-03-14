import WorldMap from "@/components/ui/world-map";

export function WorldMapDemo() {
  return (
    <div className="py-8 w-full bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold md:text-4xl text-xl sm:text-3xl text-black dark:text-white text-center">
          IEEE&apos;s GLOBAL RECOGNITION
        </p>
        <p className="text-sm md:text-lg text-neutral-500 dark:text-neutral-400 max-w-7xl mx-auto p-8">
          The Institute of Electrical and Electronics Engineers (IEEE) is the
          world&apos;s largest technical professional organization dedicated to
          advancing technology for humanity. With over 400,000 members in more
          than 160 countries, IEEE plays a key role in shaping global
          technological innovation through its research, publications,
          standards, and conferences.
          <br />
          IEEE has 39 technical societies, each focusing on specific fields of
          engineering and technology. These societies provide resources,
          conferences, publications, and networking opportunities for
          professionals and students worldwide.
        </p>
      </div>
      <div className="w-full flex justify-center items-center">
        <WorldMap
          className="w-full h-auto transition-colors duration-300 bg-white dark:bg-gray-900"
          dotsStyle="fill-black dark:fill-white"
          dots={[
            { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 34.0522, lng: -118.2437 } },
            { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: -15.7975, lng: -47.8919 } },
            { start: { lat: -15.7975, lng: -47.8919 }, end: { lat: 38.7223, lng: -9.1393 } },
            { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 28.6139, lng: 77.209 } },
            { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 43.1332, lng: 131.9113 } },
            { start: { lat: 28.6139, lng: 77.209 }, end: { lat: -1.2921, lng: 36.8219 } },
            { start: { lat: 34.0522, lng: -118.2437 }, end: { lat: 40.7128, lng: -74.006 } },
            { start: { lat: 40.7128, lng: -74.006 }, end: { lat: 45.4215, lng: -75.6972 } },
            { start: { lat: 38.7223, lng: -9.1393 }, end: { lat: 48.8566, lng: 2.3522 } },
            { start: { lat: 48.8566, lng: 2.3522 }, end: { lat: 52.52, lng: 13.405 } },
            { start: { lat: 52.52, lng: 13.405 }, end: { lat: 59.3293, lng: 18.0686 } },
            { start: { lat: 59.3293, lng: 18.0686 }, end: { lat: 55.7558, lng: 37.6173 } },
            { start: { lat: 55.7558, lng: 37.6173 }, end: { lat: 25.276987, lng: 55.296249 } },
            { start: { lat: 25.276987, lng: 55.296249 }, end: { lat: 28.6139, lng: 77.209 } },
            { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 13.7563, lng: 100.5018 } },
            { start: { lat: 13.7563, lng: 100.5018 }, end: { lat: 35.6895, lng: 139.6917 } },
            { start: { lat: 35.6895, lng: 139.6917 }, end: { lat: 37.5665, lng: 126.978 } },
            { start: { lat: 37.5665, lng: 126.978 }, end: { lat: -33.8688, lng: 151.2093 } },
            { start: { lat: -33.8688, lng: 151.2093 }, end: { lat: -26.2041, lng: 28.0473 } },
            { start: { lat: -26.2041, lng: 28.0473 }, end: { lat: -1.2921, lng: 36.8219 } },
            { start: { lat: -1.2921, lng: 36.8219 }, end: { lat: -34.6037, lng: -58.3816 } },
            { start: { lat: -34.6037, lng: -58.3816 }, end: { lat: 19.4326, lng: -99.1332 } },
            { start: { lat: 19.4326, lng: -99.1332 }, end: { lat: 40.7128, lng: -74.006 } },
          ]}
        />
      </div>
    </div>
  );
}
