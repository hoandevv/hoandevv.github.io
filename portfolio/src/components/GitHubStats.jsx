const username = 'hoandevv';

const GitHubStats = () => {
  return (
    <section id="github" className="py-24 max-w-5xl mx-auto px-4">
      <div className="flex items-center mb-16">
        <span className="heading-number text-xl">05.</span>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-lighter">
          GitHub Activity
        </h2>
        <div className="h-px bg-navy-lighter flex-1 ml-6" />
      </div>

      <div className="grid md:grid-cols-2 gap-5">

        {/* Activity graph - full width */}
        <div className="md:col-span-2 group relative rounded-xl bg-navy-light border border-navy-lighter hover:border-cyan/30 transition-all duration-300 overflow-hidden p-1">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
          <img
            src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=react-dark&hide_border=true&area=true&color=64ffda&line=64ffda&point=a78bfa&area_color=64ffda`}
            alt="Contribution Activity"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
