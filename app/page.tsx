export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-bold">
        CareerLens AI
      </h1>

      <p className="mt-6 text-xl text-slate-300 text-center max-w-2xl">
        An AI-powered career intelligence platform that helps job seekers
        track applications, analyze hiring outcomes, identify skill gaps,
        and receive personalized recommendations.
      </p>

      <button className="mt-10 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700">
        Get Started
      </button>
    </main>
  );
}