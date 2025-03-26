import RegistrationForm from "@/components/registration-form"

export default function Home() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl pt-10 dark:text-slate-900 sticky font-bold text-center mb-8">IEEE (ICCSAI - 2025) YOUNG MINDS Event Registration</h1>
      <RegistrationForm />
    </main>
  )
}

