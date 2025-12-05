import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Mail, Github, Download } from "lucide-react"; // removed Linkedin (unused)

const DATA = {
  name: "Nouman Akram",
  title: "I animate & edit standout content.",
  blurb:
    "Motion designer & video editor delivering high-impact promos, ads, and social content.",
  email: "realnoumanakram@gmail.com",
  socials: {
    upwork: "https://www.upwork.com/freelancers/noumana98",
    linkedin: "https://www.linkedin.com/in/realnoumanakram",
    youtube: "https://www.youtube.com/@realnoumanakram",
  },
  cvUrl: "/Nouman_Akram_Resume.pdf",
  metrics: [
    { label: "projects delivered", value: "120+" },
    { label: "on-time rate", value: "99%" },
    { label: "avg turnaround", value: "48h" },
  ],
  skills: [
    "After Effects",
    "Premiere Pro",
    "Photoshop",
    "Illustrator",
    "Figma",
    "Notion",
    "Google Drive",
  ],
  projects: [
    {
      id: "p1",
      name: "Product Launch Teaser",
      tagline:
        "30-sec kinetic type spot that increased sign-ups week-over-week.",
      cover:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop",
      hoverVideo:
        "https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-1422/1080p.mp4",
      tags: ["After Effects", "Kinetic Type", "Sound Design"],
      role: "Motion Designer & Editor",
      problem:
        "Client needed a hype teaser with minimal assets and a 48h deadline.",
      approach:
        "Storyboarded 6 beats, animated type with graph-editor easing, added SFX hits and whooshes.",
      result: "+41% landing CTR in first 72h; used across paid + organic.",
      links: {
        live: "#",
        repo: "",
        caseStudyAssets: [
          "https://images.unsplash.com/photo-1551281044-8b89a8b0f630?q=80&w=1600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1600&auto=format&fit=crop",
        ],
      },
    },
    {
      id: "p2",
      name: "YouTube Shorts Pack",
      tagline: "20 snackable edits with bold captions and auto-cut beats.",
      cover:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600&auto=format&fit=crop",
      hoverVideo:
        "https://cdn.coverr.co/videos/coverr-keyboard-7049/1080p.mp4",
      tags: ["Premiere Pro", "Auto Captions", "Reframing"],
      role: "Editor",
      problem:
        "Creator needed a scalable template to turn podcasts into Shorts.",
      approach:
        "Built motion template (MOGRT), beat-synced cuts, added dynamic subtitles and brand colors.",
      result: "Watch time +2.3×; 3 clips crossed 1M views.",
      links: { live: "#", repo: "", caseStudyAssets: [] },
    },
    {
      id: "p3",
      name: "Logo Animation Reel",
      tagline: "Clean idents with logo reveals and particle accents.",
      cover:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1400&auto=format&fit=crop",
      hoverVideo:
        "https://cdn.coverr.co/videos/coverr-hacker-typing-on-computer-4011/1080p.mp4",
      tags: ["After Effects", "Trapcode", "Brand"],
      role: "Motion Designer",
      problem:
        "Multiple brands needed quick but distinctive animated idents.",
      approach:
        "Crafted 6 reveal styles (wipe, particles, liquid), exported alpha-channeled MOVs.",
      result:
        "Used in intros/outros across 5 channels; bounce rate down on hero pages.",
      links: { live: "#", repo: "", caseStudyAssets: [] },
    },
  ],
};

function Portfolio() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({ offset: ["start start", "end end"] });
  const heroShift = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const heroSkew = useTransform(scrollYProgress, [0, 1], ["0deg", "-2deg"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.98, 0.95]);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Top gradient / noise overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 [background-image:radial-gradient(50%_50%_at_50%_0%,rgba(124,92,255,.18),rgba(0,0,0,0)_60%)]"
      />
      <ScrollProgress />
      <ParallaxBG />
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <motion.div
          style={
            !prefersReducedMotion
              ? { y: heroShift, skewY: heroSkew, opacity: heroOpacity }
              : {}
          }
          className="mx-auto max-w-6xl px-6 pt-24 pb-12"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
                {DATA.title}
              </h1>
              <p className="mt-4 max-w-xl text-neutral-300">{DATA.blurb}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {DATA.metrics.map((m) => (
                  <span
                    key={m.label}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-neutral-300"
                  >
                    <strong className="mr-1 font-semibold text-neutral-100">
                      {m.value}
                    </strong>
                    {m.label}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${DATA.email}`}
                  className="group inline-flex items-center gap-2 rounded-xl bg-violet-500 px-4 py-2 font-semibold text-white transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-violet-400"
                >
                  <Mail className="h-4 w-4 transition group-hover:translate-x-0.5" />{" "}
                  Email
                </a>
                <a
                  href={DATA.cvUrl}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 font-semibold text-neutral-100 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-violet-400"
                >
                  <Download className="h-4 w-4" /> CV
                </a>
                {DATA.socials.upwork && (
                  <a
                    href={DATA.socials.upwork}
                    className="inline-flex items-center gap-2 rounded-xl border border-violet-400/40 bg-violet-400/10 px-4 py-2 font-semibold text-violet-200 hover:bg-violet-400/20 focus:outline-none focus:ring-2 focus:ring-violet-400"
                  >
                    <ArrowUpRight className="h-4 w-4" /> Hire on Upwork
                  </a>
                )}
              </div>
            </div>
            <Headshot prefersReducedMotion={prefersReducedMotion} />
          </div>

          {/* Skill pills */}
          <ul className="mt-10 flex flex-wrap gap-2">
            {DATA.skills.map((s) => (
              <li
                key={s}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-neutral-300"
              >
                {s}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Selected work</h2>
          <span className="text-sm text-neutral-400">
            press <kbd className="rounded bg-white/10 px-1">/</kbd> to search
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {DATA.projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={
                prefersReducedMotion ? {} : { opacity: 0, y: 24, rotate: 0.2 }
              }
              whileInView={
                prefersReducedMotion ? {} : { opacity: 1, y: 0, rotate: 0 }
              }
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
                delay: i * 0.06,
              }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold">About</h2>
            <p className="mt-3 text-neutral-300">
              I’m {DATA.name}, a motion designer and editor focused on fast-turn,
              high-impact videos. I combine strong typography, rhythm, and sound
              design to make brands feel alive.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h3 className="font-semibold">Services</h3>
              <ul className="mt-2 grid grid-cols-1 gap-2 text-neutral-300 sm:grid-cols-2">
                <li>• Product teasers & launch videos</li>
                <li>• UGC ads & social edits (Reels/Shorts)</li>
                <li>• Logo idents & title animations</li>
                <li>• Podcast to Shorts pipeline (templates)</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={`mailto:${DATA.email}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-violet-500 px-4 py-2 font-semibold text-white hover:brightness-110"
                >
                  <Mail className="h-4 w-4" /> Get in touch
                </a>
                {DATA.socials.upwork && (
                  <a
                    href={DATA.socials.upwork}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 font-semibold text-neutral-100 hover:bg-white/5"
                  >
                    <ArrowUpRight className="h-4 w-4" /> Hire on Upwork
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Optional Showreel embed */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
          <video
            className="h-full w-full"
            src="/showreel.mp4"
            poster="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop"
            controls
            preload="metadata"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto max-w-6xl px-6 pb-20 pt-8 text-neutral-400">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {DATA.name}. Motion design & video
            editing.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {Object.entries(DATA.socials).map(([key, url]) =>
              url ? (
                <a
                  key={key}
                  href={url}
                  className="capitalize hover:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-violet-400"
                >
                  {key}
                </a>
              ) : null
            )}
            <a
              href={`mailto:${DATA.email}`}
              className="hover:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-violet-400"
            >
              Email
            </a>
          </div>
        </div>
      </footer>

      <CommandK projects={DATA.projects} />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`sticky top-0 z-50 w-full backdrop-blur ${
        scrolled ? "bg-neutral-950/70 border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="font-semibold tracking-tight">
          {DATA.name}
        </a>
        <nav className="flex items-center gap-2">
          <a
            className="rounded-lg px-3 py-2 text-sm text-neutral-300 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-violet-400"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="rounded-lg px-3 py-2 text-sm text-neutral-300 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-violet-400"
            href="#about"
          >
            About
          </a>
          <a
            className="group inline-flex items-center gap-1 rounded-lg bg-white/5 px-3 py-2 text-sm font-medium text-neutral-100 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-violet-400"
            href={`mailto:${DATA.email}`}
          >
            <Mail className="h-4 w-4" /> Hire me{" "}
            <ArrowUpRight className="h-4 w-4 opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </nav>
      </div>
    </div>
  );
}

function Headshot({ prefersReducedMotion }) {
  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent shadow-2xl"
    >
      <img
        alt="Headshot"
        src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop"
        className="h-full w-full object-cover"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(60%_60%_at_50%_30%,#000_30%,transparent_70%)]"
      >
        <div className="absolute -inset-12 animate-[spin_12s_linear_infinite] bg-[conic-gradient(from_0deg,transparent,rgba(124,92,255,0.35),transparent_30%)]" />
      </div>
    </motion.div>
  );
}

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  const videoRef = useRef(null);
  const onEnter = () => videoRef.current?.play().catch(() => {});
  const onLeave = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <button
        onClick={() => setOpen(true)}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className="block w-full text-left focus:outline-none"
        aria-label={`Open case study for ${project.name}`}
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <img
            src={project.cover}
            alt="cover"
            className="h-full w-full object-cover transition group-hover:scale-[1.03]"
          />
          {project.hoverVideo && (
            <video
              ref={videoRef}
              muted
              playsInline
              preload="metadata"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              src={project.hoverVideo}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-white drop-shadow">
                {project.name}
              </h3>
              <p className="text-sm text-neutral-200/90 drop-shadow">
                {project.tagline}
              </p>
            </div>
            <span className="rounded-full bg-white/10 px-2 py-1 text-[11px] text-white">
              Case study
            </span>
          </div>
        </div>
      </button>

      <div className="flex flex-wrap gap-2 px-4 py-3">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 px-2 py-1 text-xs text-neutral-300"
          >
            {t}
          </span>
        ))}
      </div>

      {open && <CaseStudy project={project} onClose={() => setOpen(false)} />}
    </article>
  );
}

function CaseStudy({ project, onClose }) {
  useLockBodyScroll();
  return (
    <div role="dialog" aria-modal className="fixed inset-0 z-[60] grid place-items-center p-4">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-[61] max-h[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-neutral-950 p-6 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold">{project.name}</h3>
            <p className="text-neutral-300">{project.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg border border-white/15 px-3 py-1.5 text-sm text-neutral-300 hover:bg-white/5"
          >
            Close
          </button>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <Info label="Role" value={project.role} />
          <Info label="Tech" value={project.tags.join(" · ")} />
          <Info label="Result" value={project.result} />
        </div>

        <Section title="Problem">{project.problem}</Section>
        <Section title="Approach">{project.approach}</Section>
        <Section title="Outcome">{project.result}</Section>

        {project.links.caseStudyAssets?.length ? (
          <div className="mt-6 grid grid-cols-2 gap-3">
            {project.links.caseStudyAssets.map((src) => (
              <img
                key={src}
                src={src}
                alt="artifact"
                className="rounded-xl border border-white/10"
              />
            ))}
          </div>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.live && (
            <a
              href={project.links.live}
              className="inline-flex items-center gap-2 rounded-xl bg-violet-500 px-4 py-2 font-semibold text-white hover:brightness-110"
            >
              Live demo <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {project.links.repo && (
            <a
              href={project.links.repo}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 font-semibold text-neutral-100 hover:bg-white/5"
            >
              <Github className="h-4 w-4" /> Repo
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-neutral-300">
      <span className="block text-neutral-400">{label}</span>
      <span className="font-medium text-neutral-100">{value}</span>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mt-6">
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="mt-2 leading-relaxed text-neutral-300">{children}</p>
    </section>
  );
}

function CommandK({ projects }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const matches = useMemo(
    () =>
      projects.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      ),
    [projects, query]
  );
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "/") {
        e.preventDefault();
        setOpen(true);
      } else if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[70] grid place-items-start p-6">
      <div
        className="absolute inset-0 bg-black/60"
        onClick={() => setOpen(false)}
      />
      <div className="relative z-[71] w-full max-w-xl rounded-2xl border border-white/10 bg-neutral-950 p-4 shadow-2xl">
        <input
          autoFocus
          placeholder="Search projects…"
          className="w-full rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 outline-none placeholder:text-neutral-500"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul className="mt-2 divide-y divide-white/5">
          {matches.map((m) => (
            <li key={m.id} className="flex items-center justify-between py-2">
              <span>{m.name}</span>
              <a
                href="#projects"
                className="rounded-md px-2 py-1 text-sm text-violet-300 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                focus
              </a>
            </li>
          ))}
          {!matches.length && <li className="py-3 text-neutral-500">No results</li>}
        </ul>
      </div>
    </div>
  );
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, set] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    set(media.matches);
    const onChange = () => set(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);
  return prefersReducedMotion;
}

function useLockBodyScroll() {
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);
}

/* ============ Added Components for Dynamic Scroll ============ */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.div
      aria-hidden
      className="fixed left-0 right-0 top-0 z-[70] h-[3px] origin-left bg-violet-500"
      style={{ scaleX }}
    />
  );
}

function ParallaxBG() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, -40]);
  const y2 = useTransform(scrollY, [0, 800], [0, -80]);
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <motion.div
        style={{ y: y1 }}
        className="absolute left-[-10%] top-[-10%] h-[40vh] w-[40vw] rounded-full bg-violet-500/10 blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute right-[-10%] top-[10%] h-[50vh] w-[35vw] rounded-full bg-blue-500/10 blur-3xl"
      />
    </div>
  );
}

/* Single default export */
export default function App() {
  return <Portfolio />;
}
