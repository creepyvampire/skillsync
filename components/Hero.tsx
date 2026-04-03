export default function Hero() {
    return(
<section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-8 py-24">

      <div className="flex items-center p-6 mx-30 my-5 gap-10">
        <h1 className="font-mono text-3xl flex-1">SkillSync is an AI-based skill matchmaking platform for job seekers and employers.</h1>
        <img src="/hero_page_jobhunt.png" alt="SkillSync platform interface" className="w-2xl rounded-lg ml-4 shrink-0" />
      </div>
      {/* CTA Buttons */}
      <div className="flex gap-4 flex-wrap justify-center mt-4">
        <button className="bg-black text-white font-bold px-8 py-3 rounded-lg text-base hover:bg-white hover:text-black transition-colors">
          Get Started Free
        </button>
        <button className="bg-black text-white font-bold px-8 py-3 rounded-lg text-base hover:bg-white hover:text-black transition-colors">
          See how it works
        </button>
      </div>
    </section>    
    )
}