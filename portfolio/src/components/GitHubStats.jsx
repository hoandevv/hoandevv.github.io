import { motion } from 'framer-motion';

const GitHubStats = () => {
  const username = 'hoandevv';

  return (
    <section id="github" className="py-24 px-8 bg-[#0d1117]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-cyan-400" />
            <span className="text-cyan-400 text-xs font-mono tracking-widest uppercase">GitHub Activity</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Thống kê <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Repos</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#0d1117]/80 border border-white/[0.08] rounded-2xl p-4 hover:border-cyan-400/30 transition-all">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&title_color=22d3ee&icon_color=c084fc&text_color=94a3b8&border_color=1e293b&hide_border=false&bg_color=0d1117`}
              alt="GitHub Stats"
              className="w-full rounded-xl"
            />
          </div>
          <div className="bg-[#0d1117]/80 border border-white/[0.08] rounded-2xl p-4 hover:border-cyan-400/30 transition-all">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&title_color=22d3ee&text_color=94a3b8&border_color=1e293b&hide_border=false&bg_color=0d1117`}
              alt="Top Languages"
              className="w-full rounded-xl"
            />
          </div>
          <div className="md:col-span-2 bg-[#0d1117]/80 border border-white/[0.08] rounded-2xl p-4 hover:border-cyan-400/30 transition-all">
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=react-dark&hide_border=true&area=true`}
              alt="Activity Graph"
              className="w-full rounded-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;
