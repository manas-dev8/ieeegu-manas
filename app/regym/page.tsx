// import RegistrationForm from "@/components/registration-form"

// export default function Home() {
//   return (
//     <main className="container mx-auto py-8 px-4">
//       <h1 className="text-3xl pt-10 dark:text-slate-900 sticky font-bold text-center mb-8">IEEE (ICCSAI - 2025) YOUNG MINDS Event Registration</h1>
//       <RegistrationForm />
//     </main>
//   )
// }

export default function Maintenance() {
  return (
    <main className="container mx-auto min-h-screen flex flex-col items-center justify-center py-8 px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-gray-100 mb-6">
          Under Maintenance
        </h1>
        <div className="mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          We're currently working on improving this page.
        </p>
        <p className="text-md text-gray-500 dark:text-gray-400">
          Thank you for your patience. Please check back later.
        </p>
      </div>
    </main>
  )
}