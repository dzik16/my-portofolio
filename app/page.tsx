'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import AnimatedSection from '@/components/AnimatedSection'
import CountUp from '@/components/CountUp'
import TypeWriter from '@/components/TypeWriter'

const ParticleCanvas = dynamic(() => import('@/components/ParticleCanvas'), { ssr: false })

/* ──────────────────── DATA ──────────────────── */

const skills = [
  { label: 'React Native', accent: true },
  { label: 'ReactJS', accent: true },
  { label: 'Kotlin', accent: true },
  { label: 'TypeScript', accent: false },
  { label: 'JavaScript', accent: false },
  { label: 'Next.js', accent: false },
  { label: 'Redux / Zustand', accent: false },
  { label: 'Axios', accent: false },
  { label: 'Realm DB', accent: false },
  { label: 'MMKV Storage', accent: false },
  { label: 'Socket.IO', accent: false },
  { label: 'Firebase', accent: false },
  { label: 'Tailwind CSS', accent: false },
  { label: 'Blazor / .NET', accent: false },
  { label: 'Android MVVM', accent: false },
  { label: 'OCR Integration', accent: false },
  { label: 'Git', accent: false },
  { label: 'Agile / Scrum', accent: false },
  { label: 'Maestro Testing', accent: false },
  { label: 'Python', accent: false },
]

const experiences = [
  {
    role: 'React Native Developer',
    period: 'Feb 2024 – Present',
    company: 'Profescipta Wahana Teknik · Jakarta Timur, Remote',
    desc: 'Maintained and enhanced Merabu (tobacco grading & shipping app) with React Native, Redux, MMKV, Realm, and offline OCR KTP scanner. Developed Localo attendance app with GPS check-in/out using Zustand and atomic design. Supported .NET & Blazor frontend improvements.',
  },
  {
    role: 'Frontend Mobile & Web Developer',
    period: 'Oct 2022 – Feb 2024',
    company: 'Beamco · Singapore, Remote',
    desc: 'Led BEAMCO admin dashboard development with ReactJS (music management, credits, live tipping). Built React Native mobile app for fan engagement: music player, merch, events. Implemented real-time WebSocket animations for live tipping stage.',
  },
  {
    role: 'Mobile Developer',
    period: 'Feb 2022 – Feb 2023',
    company: 'PT Telkom Indonesia · Bandung, Hybrid',
    desc: 'Maintained TravelAja Mitra (React Native) and led migration of TravelAja Personal from React Native to Kotlin with Android MVVM architecture. Implemented clean code separation with multi-Fragment navigation in Scrum environment.',
  },
  {
    role: 'React Native Developer – Kkuljaem',
    period: 'Project',
    company: 'Kkuljaem Korean · Tangerang, Remote',
    desc: 'Led development of Korean language learning app with course management, real-time chat (Socket.IO), Firebase auth/notifications, and payment gateway integration. Optimized for both Android & iOS.',
  },
]

const projects = [
  {
    icon: '🌿',
    name: 'Merabu',
    desc: 'Tobacco grading & shipping app with offline-first architecture, OCR KTP scanning, and Realm database.',
    tags: ['React Native', 'Redux', 'MMKV', 'Realm'],
  },
  {
    icon: '🎵',
    name: 'BEAMCO',
    desc: 'Music fan engagement platform with live tipping events, real-time animations, WebSocket, and artist interactions.',
    tags: ['ReactJS', 'React Native', 'WebSocket'],
  },
  {
    icon: '📍',
    name: 'Localo',
    desc: 'Attendance app with GPS-based check-in/out, atomic design, and Zustand state management.',
    tags: ['React Native', 'Zustand', 'GPS'],
  },
  {
    icon: '🍜',
    name: 'Osraah',
    desc: 'Multi-role food ordering ecosystem for restaurants, drivers, and consumers with live order tracking.',
    tags: ['React Native', 'Socket.IO', 'GPS'],
  },
  {
    icon: '💬',
    name: 'Tryst Date',
    desc: 'Dating app with real-time chat, user matching, push notifications, and premium subscription management.',
    tags: ['React Native', 'Zustand', 'Socket.IO'],
  },
  {
    icon: '📝',
    name: 'TOEFL Connected',
    desc: 'Web-based TOEFL testing platform with admin dashboard, test management, and result monitoring.',
    tags: ['ReactJS', 'TypeScript', 'Tailwind'],
  },
]

/* ──────────────────── COMPONENT ──────────────────── */

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0f] text-[#f0eeff] font-grotesk overflow-x-hidden">
      {/* Background layer */}
      <ParticleCanvas />

      {/* Scanline effect */}
      <div className="scanline" />

      {/* Ambient orbs */}
      <div
        className="fixed top-[-80px] right-[-80px] w-[520px] h-[520px] rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(123,92,255,0.15) 0%, transparent 70%)',
          animation: 'drift 9s ease-in-out infinite alternate',
        }}
      />
      <div
        className="fixed bottom-[-60px] left-[-60px] w-[380px] h-[380px] rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(0,217,184,0.1) 0%, transparent 70%)',
          animation: 'drift 9s ease-in-out infinite alternate',
          animationDelay: '3s',
        }}
      />

      <Navbar />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-20">

        {/* ── HERO ── */}
        <section id="about" className="pt-16 pb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-purple-950/40 border border-purple-500/30 rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-[#7b5cff] mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d9b8] animate-pulse" />
            Available for work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-syne font-black leading-[1.06] tracking-tight mb-4"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5rem)' }}
          >
            <span>M. Dzikri</span>
            <br />
            <span
              className="glitch-wrapper"
              data-text="Alfarisy"
              style={{
                background: 'linear-gradient(135deg, #7b5cff, #00d9b8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Alfarisy
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-[#9090b0] mb-2 font-medium h-7"
          >
            <TypeWriter />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="text-[#9090b0] max-w-xl leading-relaxed mb-10 mt-4"
          >
            Mobile & Web Developer crafting seamless digital experiences. Specialized in React Native, ReactJS & Android (Kotlin) — building apps that scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex gap-4 flex-wrap"
          >
            <a
              href="mailto:dikrialfaris19@gmail.com"
              className="px-7 py-3 rounded-lg font-semibold text-sm text-white relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, #7b5cff, #5b3dd4)',
                boxShadow: '0 0 32px rgba(123,92,255,0.3)',
              }}
            >
              <span className="relative z-10">Hire Me →</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#00d9b8] to-[#7b5cff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="px-7 py-3 rounded-lg font-semibold text-sm border border-white/10 text-[#f0eeff] hover:border-[#7b5cff]/60 hover:text-[#7b5cff] transition-all"
            >
              View Projects
            </a>
          </motion.div>
        </section>

        {/* ── STATS ── */}
        <AnimatedSection>
          <div className="grid grid-cols-3 gap-4 mb-20">
            {[
              { num: 4, suffix: '+', label: 'Years Experience' },
              { num: 10, suffix: '+', label: 'Projects Shipped' },
              { num: 6, suffix: '+', label: 'Companies & Clients' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -4, boxShadow: '0 0 40px rgba(123,92,255,0.25)' }}
                className="relative rounded-2xl p-6 border border-purple-900/30 overflow-hidden"
                style={{ background: 'rgba(20,20,35,0.85)', backdropFilter: 'blur(10px)' }}
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[#7b5cff]/20 to-transparent" />
                <div className="font-syne font-black text-3xl text-[#7b5cff] mb-1">
                  <CountUp end={stat.num} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-[#9090b0] tracking-widest uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* ── SKILLS ── */}
        <section id="skills" className="mb-20">
          <AnimatedSection>
            <p className="text-xs text-[#00d9b8] tracking-[0.18em] uppercase font-semibold mb-3">// Tech Stack</p>
            <h2 className="font-syne font-black text-3xl mb-8">Technical Skills</h2>
          </AnimatedSection>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: skill.accent ? '0 0 20px rgba(123,92,255,0.4)' : '0 0 15px rgba(123,92,255,0.2)',
                  y: -2,
                }}
                className={`px-4 py-2 rounded-lg text-sm cursor-default border transition-all duration-200 ${
                  skill.accent
                    ? 'border-[#7b5cff]/60 text-[#7b5cff] bg-[#7b5cff]/10'
                    : 'border-purple-900/30 text-[#f0eeff] bg-[#12121a] hover:border-[#7b5cff]/40 hover:text-[#7b5cff]'
                }`}
              >
                {skill.label}
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="experience" className="mb-20">
          <AnimatedSection>
            <p className="text-xs text-[#00d9b8] tracking-[0.18em] uppercase font-semibold mb-3">// Work History</p>
            <h2 className="font-syne font-black text-3xl mb-8">Experience</h2>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#7b5cff]/60 via-[#00d9b8]/40 to-transparent ml-[22px] hidden md:block" />

            <div className="flex flex-col gap-5">
              {experiences.map((exp, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="flex gap-6">
                    {/* Timeline dot */}
                    <div className="hidden md:flex flex-col items-center mt-5 flex-shrink-0">
                      <motion.div
                        whileInView={{ scale: [0, 1.3, 1] }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                        className="w-11 h-11 rounded-xl flex items-center justify-center border border-[#7b5cff]/40 bg-[#7b5cff]/10 text-[#7b5cff] text-sm font-bold font-syne"
                      >
                        {String(i + 1).padStart(2, '0')}
                      </motion.div>
                    </div>

                    <motion.div
                      whileHover={{ x: 6, boxShadow: '0 0 40px rgba(123,92,255,0.2)' }}
                      className="flex-1 rounded-2xl p-6 border border-purple-900/30 transition-all duration-300 group relative overflow-hidden"
                      style={{ background: 'rgba(20,20,35,0.85)', backdropFilter: 'blur(10px)' }}
                    >
                      {/* Hover gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#7b5cff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                      <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                        <span className="font-syne font-bold text-base">{exp.role}</span>
                        <span
                          className="text-xs px-3 py-1 rounded-full border"
                          style={{
                            background: 'rgba(0,217,184,0.08)',
                            borderColor: 'rgba(0,217,184,0.3)',
                            color: '#00d9b8',
                          }}
                        >
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-xs text-[#7b5cff] mb-3">{exp.company}</p>
                      <p className="text-sm text-[#9090b0] leading-relaxed">{exp.desc}</p>
                    </motion.div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" className="mb-20">
          <AnimatedSection>
            <p className="text-xs text-[#00d9b8] tracking-[0.18em] uppercase font-semibold mb-3">// Featured Work</p>
            <h2 className="font-syne font-black text-3xl mb-8">Projects</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((proj, i) => (
              <motion.div
                key={proj.name}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(123,92,255,0.25)' }}
                className="relative rounded-2xl p-6 border border-purple-900/30 cursor-default overflow-hidden group"
                style={{ background: 'rgba(20,20,35,0.85)', backdropFilter: 'blur(10px)' }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7b5cff]/8 via-transparent to-[#00d9b8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

                {/* Corner hex */}
                <div className="absolute top-3 right-3 opacity-10 group-hover:opacity-25 transition-opacity">
                  <svg width="40" height="40" viewBox="0 0 40 40">
                    <polygon points="20,2 38,11 38,29 20,38 2,29 2,11" fill="none" stroke="#7b5cff" strokeWidth="1" />
                  </svg>
                </div>

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-lg border border-[#7b5cff]/30"
                  style={{ background: 'rgba(123,92,255,0.12)' }}
                >
                  {proj.icon}
                </div>
                <h3 className="font-syne font-bold text-base mb-2">{proj.name}</h3>
                <p className="text-xs text-[#9090b0] leading-relaxed mb-4">{proj.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2.5 py-1 rounded-full border"
                      style={{
                        background: 'rgba(0,217,184,0.08)',
                        borderColor: 'rgba(0,217,184,0.2)',
                        color: '#00d9b8',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="mb-20">
          <AnimatedSection>
            <p className="text-xs text-[#00d9b8] tracking-[0.18em] uppercase font-semibold mb-3">// Get in Touch</p>
            <h2 className="font-syne font-black text-3xl mb-8">Let&apos;s Connect</h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <motion.div
              whileHover={{ boxShadow: '0 0 80px rgba(123,92,255,0.2)' }}
              className="relative rounded-3xl p-10 border border-purple-900/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 overflow-hidden"
              style={{ background: 'rgba(20,20,35,0.9)', backdropFilter: 'blur(12px)' }}
            >
              {/* Background grid pattern */}
              <div
                className="absolute inset-0 pointer-events-none opacity-5"
                style={{
                  backgroundImage: 'linear-gradient(rgba(123,92,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(123,92,255,1) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />

              <div className="relative flex flex-col gap-4">
                {[
                  { color: '#7b5cff', label: 'dikrialfaris19@gmail.com', href: 'mailto:dikrialfaris19@gmail.com' },
                  { color: '#00d9b8', label: '+62 812 3106 1028', href: 'tel:+6281231061028' },
                  { color: '#888', label: 'Bandung, Jawa Barat, Indonesia', href: null },
                  { color: '#888', label: 'S1 Universitas Pendidikan Indonesia (2019–2023)', href: null },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-sm text-[#9090b0]"
                  >
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.color, boxShadow: `0 0 6px ${item.color}` }} />
                    {item.href ? (
                      <a href={item.href} className="hover:text-[#7b5cff] transition-colors">{item.label}</a>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="mailto:dikrialfaris19@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="relative px-8 py-4 rounded-xl font-bold text-sm text-white overflow-hidden group flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #7b5cff, #5b3dd4)',
                  boxShadow: '0 0 40px rgba(123,92,255,0.35)',
                }}
              >
                <span className="relative z-10">Send Message →</span>
                <motion.span
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, #00d9b8, #7b5cff)' }}
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
          </AnimatedSection>
        </section>

        {/* ── FOOTER ── */}
        <footer className="text-center pt-8 border-t border-purple-900/20 text-xs text-[#9090b0]">
          <div className="flex items-center justify-center gap-2">
            <span>Designed & Built by</span>
            <span className="text-[#7b5cff] font-semibold">M. Dzikri Alfarisy</span>
            <span>·</span>
            <span>2025</span>
          </div>
          <div className="mt-2 flex items-center justify-center gap-1 text-[10px] tracking-widest uppercase opacity-40">
            <span>⬡</span>
            <span>Built with Next.js + Framer Motion</span>
            <span>⬡</span>
          </div>
        </footer>

      </div>
    </main>
  )
}