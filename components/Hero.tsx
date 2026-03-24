export default function Hero() {
    return(
<section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-8 py-24">

      {/* Badge */}
      <div className="flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-500 mb-8">
        <span className="w-2 h-2 rounded-full bg-amber-300 inline-block"></span>
        Under Development
      </div>

      {/* Headline */}
      <h1 className="font-mono text-5xl font-bold leading-tight mb-6">
        An AI-based skill matchmaking platform for job seekers and employers.
      </h1>

      {/* Subheadline */}
      <p className="font-sans text-xl text-gray-500 max-w-xl leading-relaxed mb-10">
        Discover your perfect job match by analyzing your skills against real opportunities, and help employers find their ideal candidates instantly.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        <button className="bg-black text-white font-bold px-8 py-3 rounded-lg text-base hover:bg-gray-800 transition-colors">
          Get Started Free
        </button>
        <button className="border border-gray-300 text-black px-8 py-3 rounded-lg text-base hover:bg-gray-50 transition-colors">
          See how it works
        </button>
      </div>
    </section>    )
}