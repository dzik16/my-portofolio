'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import AnimatedSection from '@/components/AnimatedSection'
import CountUp from '@/components/CountUp'
import TypeWriter from '@/components/TypeWriter'

const ParticleCanvas = dynamic(() => import('@/components/ParticleCanvas'), { ssr: false })

/* ──────────────────── DATA ──────────────────── */

const skillGroups = [
  {
    name: 'Mobile',
    skills: [
      { label: 'React Native', accent: true },
      { label: 'Kotlin', accent: true },
      { label: 'Android MVVM', accent: false },
      { label: 'Realm', accent: false },
      { label: 'MMKV', accent: false },
      { label: 'Room Database', accent: false },
      { label: 'Firebase', accent: false },
      { label: 'GPS Services', accent: false },
    ],
  },
  {
    name: 'Frontend',
    skills: [
      { label: 'React', accent: true },
      { label: 'Next.js', accent: true },
      { label: 'TypeScript', accent: true },
      { label: 'Tailwind CSS', accent: false },
      { label: 'Redux Toolkit', accent: false },
      { label: 'Zustand', accent: false },
      { label: 'Axios', accent: false },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { label: 'Go (Echo)', accent: true },
      { label: 'PHP', accent: false },
      { label: 'REST API', accent: false },
      { label: 'MongoDB', accent: false },
      { label: 'PostgreSQL', accent: false },
      { label: 'Redis', accent: false },
      { label: 'JWT Auth', accent: false },
    ],
  },
  {
    name: 'Real-time',
    skills: [
      { label: 'WebSocket', accent: false },
      { label: 'Socket.IO', accent: false },
      { label: 'SSE', accent: false },
    ],
  },
  {
    name: 'DevOps',
    skills: [
      { label: 'Docker', accent: false },
      { label: 'Docker Compose', accent: false },
      { label: 'PM2', accent: false },
      { label: 'GitLab Runner', accent: false },
      { label: 'Jenkins', accent: false },
      { label: 'Application Monitoring', accent: false },
    ],
  },
  {
    name: 'Testing',
    skills: [
      { label: 'Vitest', accent: false },
      { label: 'Playwright (E2E)', accent: false },
      { label: 'Maestro', accent: false },
      { label: 'Manual Testing', accent: false },
    ],
  },
  {
    name: 'Additional',
    skills: [
      { label: 'Python', accent: false },
      { label: 'SAS', accent: false },
      { label: '.NET', accent: false },
      { label: 'Blazor', accent: false },
      { label: 'RAGFlow', accent: false },
      { label: 'Ollama', accent: false },
      { label: 'OCR', accent: false },
      { label: 'Document Parsing', accent: false },
      { label: 'Git', accent: false },
      { label: 'Agile / Scrum', accent: false },
    ],
  },
]

const experiences = [
  {
    role: 'Senior Mobile & Full-stack Engineer',
    period: 'Feb 2024 – Present',
    company: 'Profescipta Wahana Teknik · Jakarta Timur, Remote',
    desc: [
      'Owned end-to-end development and maintenance of Merabu, a tobacco grading & shipping app built with React Native, Redux, MMKV, Realm, and Axios — including an offline OCR KTP scanner for ID verification without internet connectivity.',
      'Owned development of Localo, a GPS-based mobile attendance app using React Native and Zustand, following atomic design principles.',
      'Contributed UI styling and frontend improvements for .NET and Blazor web projects.',
      'Implemented OCR document scanning and a document parsing pipeline using RAGFlow and Ollama (local LLM) for automated data extraction.',
      'Converted and migrated legacy SAS statistical code to Python, improving maintainability and integration with modern data workflows.',
      'Designed and built an end-to-end Hotel Service Platform (Front Office + Guest Room Service) with Next.js, TypeScript, Tailwind CSS, Golang, and MongoDB — QR-based guest ordering, facility booking, complaints, reviews, JWT auth, RBAC, and local Wi-Fi verification.',
      'Owned the full production lifecycle — 20 backend modules, 190 REST API endpoints, 93% average test coverage across 130+ automated tests, running 4 production services with Docker Compose and PM2.',
    ],
  },
  {
    role: 'Frontend Mobile & Web Developer',
    period: 'Oct 2022 – Feb 2024',
    company: 'Beamco · Singapore, Remote',
    desc: [
      'Led development of BEAMCO\'s admin dashboard using ReactJS — music management, user management, content moderation, and live tipping events for a platform serving around 2,000 musicians.',
      'Built fan engagement features in the React Native mobile app: music player, merchandise purchasing, event ticketing, and live tipping events.',
      'Built the live stage screen and controller page using WebSocket for real-time animations and interactivity.',
      'Optimized performance across web and mobile via code splitting, lazy loading, and API response caching.',
    ],
  },
  {
    role: 'Mobile Developer',
    period: 'Oct 2021 – Oct 2022',
    company: 'PT Telkom Indonesia (Persero) Tbk · Bandung, Hybrid',
    desc: [
      'Led the migration of TravelAja Personal from React Native to native Android (Kotlin) with MVVM architecture.',
      'Maintained TravelAja Mitra for partner users using React Native, Redux, and Axios.',
      'Combined multiple Fragments within a single Activity for seamless navigation within a Scrum environment.',
    ],
  },
]

const projects = [
  {
    icon: '🌿',
    name: 'Merabu',
    desc: 'Tobacco grading & shipping app with offline-first architecture, offline OCR KTP scanning, and Realm database.',
    tags: ['React Native', 'Redux', 'MMKV', 'Realm'],
  },
  {
    icon: '🏨',
    name: 'Hotel Service Platform',
    desc: 'End-to-end hotel platform — Front Office & Guest Room Service — with QR guest ordering, facility booking, complaints, reviews, JWT auth, RBAC, and local Wi-Fi verification.',
    tags: ['Next.js', 'Golang', 'MongoDB'],
  },
  {
    icon: '📍',
    name: 'Localo',
    desc: 'Attendance app with GPS-based check-in/out, atomic design, and Zustand state management.',
    tags: ['React Native', 'Zustand', 'GPS'],
  },
  {
    icon: '🇰🇷',
    name: 'Kkuljaem Korean',
    desc: 'Korean language learning app with course management, real-time chat (Socket.IO), Firebase auth/push, and payment gateway integration.',
    tags: ['React Native', 'Redux Toolkit', 'Socket.IO'],
  },
  {
    icon: '💬',
    name: 'Tryst Date',
    desc: 'Dating platform with real-time chat, user matching, premium subscriptions, and payment gateway integration.',
    tags: ['React Native', 'Socket.IO'],
  },
  {
    icon: '🍜',
    name: 'Osraah',
    desc: 'Multi-role food ordering ecosystem for restaurants, drivers, and consumers with live order tracking, GPS, and WebSocket.',
    tags: ['React Native', 'Redux', 'WebSocket'],
  },
  {
    icon: '🧾',
    name: 'Humaira POS',
    desc: 'Point of Sale mobile app built with Kotlin featuring API integration, Room Database, and receipt printer hardware support.',
    tags: ['Kotlin', 'Room Database'],
  },
  {
    icon: '🎵',
    name: 'BEAMCO',
    desc: 'Music fan engagement platform with live tipping events, real-time stage animations, and artist interactions.',
    tags: ['ReactJS', 'React Native', 'WebSocket'],
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
            Senior Mobile & Full-stack Engineer with 5+ years owning end-to-end development — from system
            design and API integration to deployment and production monitoring across React Native, Kotlin,
            React/Next.js, and Go.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex gap-4 flex-wrap"
          >
            <a
              href="mailto:dikrialfarisi9@gmail.com"
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
              { num: 5, suffix: '+', label: 'Years Experience' },
              { num: 190, suffix: '+', label: 'REST Endpoints Shipped' },
              { num: 93, suffix: '%', label: 'Average Test Coverage' },
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
            <p className="text-xs text-[#00d9b8] tracking-[0.18em] uppercase font-semibold mb-3">{'// Tech Stack'}</p>
            <h2 className="font-syne font-black text-3xl mb-8">Technical Skills</h2>
          </AnimatedSection>
          <div className="flex flex-col gap-8">
            {skillGroups.map((group) => (
              <AnimatedSection key={group.name}>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
                  <span className="text-xs text-[#7b5cff] tracking-[0.18em] uppercase font-semibold w-24 flex-shrink-0">
                    {group.name}
                  </span>
                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill, i) => (
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
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="experience" className="mb-20">
          <AnimatedSection>
            <p className="text-xs text-[#00d9b8] tracking-[0.18em] uppercase font-semibold mb-3">{'// Work History'}</p>
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
                      <ul className="text-sm text-[#9090b0] leading-relaxed space-y-2">
                        {exp.desc.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-[#00d9b8] flex-shrink-0 mt-0.5">▸</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
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
            <p className="text-xs text-[#00d9b8] tracking-[0.18em] uppercase font-semibold mb-3">{'// Featured Work'}</p>
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
            <p className="text-xs text-[#00d9b8] tracking-[0.18em] uppercase font-semibold mb-3">{'// Get in Touch'}</p>
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
                  { color: '#7b5cff', label: 'dikrialfarisi9@gmail.com', href: 'mailto:dikrialfarisi9@gmail.com' },
                  { color: '#00d9b8', label: '+62 812 3106 1028', href: 'tel:+6281231061028' },
                  { color: '#7b5cff', label: 'linkedin.com/in/dzik16', href: 'https://linkedin.com/in/dzik16' },
                  { color: '#00d9b8', label: 'dzik.my.id', href: 'https://dzik.my.id' },
                  { color: '#888', label: 'Bandung, Jawa Barat, Indonesia', href: null },
                  { color: '#888', label: 'S1 Universitas Pendidikan Indonesia (2019–2023) · GPA 3.84', href: null },
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
                href="mailto:dikrialfarisi9@gmail.com"
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
