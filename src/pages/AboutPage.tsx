import React from 'react';
import {
  FiArrowRight,
  FiBriefcase,
  FiCalendar,
  FiCloud,
  FiDatabase,
  FiDownload,
  FiGlobe,
  FiMonitor,
  FiServer,
  FiTool,
} from 'react-icons/fi';
import { FaCss3Alt, FaGithub, FaGraduationCap, FaLinkedinIn } from 'react-icons/fa6';
import {
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiSocketdotio,
  SiTailwindcss,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { BRAND_ASSETS, CV_DATA, PROFILE } from '../data/portfolioData';
import { RoutePath } from '../types/portfolio';
import { ResilientImage } from '../components/ui/ResilientImage';
import { PortraitFallback } from '../components/ui/FallbackArtwork';
import {
  FadeInMount,
  FadeInView,
  StaggerItem,
  StaggerViewGroup,
} from '../components/ui/MotionPrimitives';

interface AboutPageProps {
  onNavigate: (path: RoutePath) => void;
}

const LEFT_DOT_COUNT = 12;
const RIGHT_DOT_COUNT = 12;

interface SkillTile {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategoryGroup {
  title: string;
  categoryIcon: React.ReactNode;
  skills: SkillTile[];
}

const SKILL_CATEGORIES: SkillCategoryGroup[] = [
  {
    title: 'Frontend',
    categoryIcon: <FiMonitor className="w-4 h-4" aria-hidden="true" />,
    skills: [
      { name: 'React.js', icon: <SiReact className="w-6 h-6 text-[#087EA4]" aria-hidden="true" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="w-6 h-6 text-[#111215]" aria-hidden="true" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-6 h-6 text-[#06B6D4]" aria-hidden="true" /> },
      { name: 'HTML5', icon: <SiHtml5 className="w-6 h-6 text-[#E34F26]" aria-hidden="true" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="w-6 h-6 text-[#1572B6]" aria-hidden="true" /> },
      {
        name: 'JavaScript',
        icon: (
          <SiJavascript
            className="w-6 h-6 text-[#F7DF1E] bg-[#111215] rounded-xs"
            aria-hidden="true"
          />
        ),
      },
    ],
  },
  {
    title: 'Backend',
    categoryIcon: <FiServer className="w-4 h-4" aria-hidden="true" />,
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs className="w-6 h-6 text-[#339933]" aria-hidden="true" /> },
      { name: 'Express.js', icon: <SiExpress className="w-6 h-6 text-[#111215]" aria-hidden="true" /> },
      { name: 'REST APIs', icon: <FiCloud className="w-6 h-6 text-[#0284C7]" aria-hidden="true" /> },
      { name: 'JWT', icon: <SiJsonwebtokens className="w-6 h-6 text-[#D63AFF]" aria-hidden="true" /> },
      { name: 'Socket.io', icon: <SiSocketdotio className="w-6 h-6 text-[#111215]" aria-hidden="true" /> },
    ],
  },
  {
    title: 'Database',
    categoryIcon: <FiDatabase className="w-4 h-4" aria-hidden="true" />,
    skills: [
      { name: 'MySQL', icon: <SiMysql className="w-6 h-6 text-[#4479A1]" aria-hidden="true" /> },
      { name: 'MongoDB', icon: <SiMongodb className="w-6 h-6 text-[#47A248]" aria-hidden="true" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="w-6 h-6 text-[#336791]" aria-hidden="true" /> },
    ],
  },
  {
    title: 'Tools',
    categoryIcon: <FiTool className="w-4 h-4" aria-hidden="true" />,
    skills: [
      { name: 'Git', icon: <SiGit className="w-6 h-6 text-[#F05032]" aria-hidden="true" /> },
      { name: 'GitHub', icon: <SiGithub className="w-6 h-6 text-[#181717]" aria-hidden="true" /> },
      { name: 'VS Code', icon: <VscVscode className="w-6 h-6 text-[#007ACC]" aria-hidden="true" /> },
      { name: 'Docker', icon: <SiDocker className="w-6 h-6 text-[#2496ED]" aria-hidden="true" /> },
      { name: 'Figma', icon: <SiFigma className="w-6 h-6 text-[#F24E1E]" aria-hidden="true" /> },
      { name: 'Postman', icon: <SiPostman className="w-6 h-6 text-[#FF6C37]" aria-hidden="true" /> },
    ],
  },
];

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const professionalJourney = [
    ...CV_DATA.experiences.map((item) => ({ ...item, engagementType: 'Full-Time' })),
    ...CV_DATA.internships.map((item) => ({ ...item, engagementType: 'Internship' })),
  ];

  return (
    <div className="bg-white text-[#111215]">
      {/* About Hero Section */}
      <section className="relative bg-white text-[#111215] overflow-hidden py-12 lg:py-20">
        {/* Ambient Golden Glow Background Graphics */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-gradient-to-br from-[#FAEDDA]/70 via-[#FDF6E2]/45 to-transparent rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute left-1/4 -top-24 w-96 h-96 bg-[#FDF6E2]/60 rounded-full blur-2xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div
              className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-6"
              data-purpose="hero-text-content"
            >
              {/* Main Bold Headline */}
              <FadeInMount delay={0.04}>
                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#111215] tracking-tight leading-[1.15] mb-6">
                  Hi, I&rsquo;m {PROFILE.name} &mdash; <br className="hidden sm:inline" />
                  <span className="gold-gradient-text inline-block">Full Stack</span>{' '}
                  <span className="text-[#111215] inline-block">Developer</span>
                </h1>
              </FadeInMount>

              {/* Descriptive Paragraphs */}
              <FadeInMount delay={0.1}>
                <div className="space-y-4 text-neutral-600 text-base sm:text-lg leading-relaxed max-w-xl mb-10">
                  <p>
                    I&rsquo;m a passionate Full Stack Developer with a strong interest in building
                    modern web applications. I enjoy turning creative ideas into scalable and
                    user-friendly digital products.
                  </p>
                  <p>
                    I&rsquo;m always eager to learn new technologies, collaborate with great teams,
                    and contribute to meaningful projects.
                  </p>
                </div>
              </FadeInMount>

              {/* Interactive Action Row: Socials & Resume CTA */}
              <FadeInMount delay={0.16}>
                <div
                  className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto"
                  data-purpose="cta-social-group"
                >
                  <a
                    aria-label="Jagadeesan LinkedIn Profile"
                    className="w-12 h-12 rounded-full bg-white border border-[#EAE6DF] flex items-center justify-center text-[#0A66C2] hover:border-[#DFB13E] hover:scale-105 active:scale-95 transition-all shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
                    href={PROFILE.linkedinUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaLinkedinIn className="w-5 h-5" aria-hidden="true" />
                  </a>

                  <a
                    aria-label="Jagadeesan GitHub Profile"
                    className="w-12 h-12 rounded-full bg-white border border-[#EAE6DF] flex items-center justify-center text-[#111215] hover:border-[#DFB13E] hover:scale-105 active:scale-95 transition-all shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
                    href={PROFILE.githubUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaGithub className="w-5 h-5" aria-hidden="true" />
                  </a>

                  <a
                    aria-label="Jagadeesan Portfolio Home"
                    className="w-12 h-12 rounded-full bg-white border border-[#EAE6DF] flex items-center justify-center text-[#111215] hover:border-[#DFB13E] hover:scale-105 active:scale-95 transition-all shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/');
                    }}
                  >
                    <FiGlobe className="w-5 h-5" aria-hidden="true" />
                  </a>

                  <a
                    className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-[#111215] text-white hover:bg-neutral-800 transition-all shadow-[0_8px_20px_rgba(0,0,0,0.12)] active:scale-95 group font-semibold text-sm sm:text-base ml-1"
                    href={BRAND_ASSETS.resumePdf}
                    download="Jagadeesan_Resume.pdf"
                  >
                    <FiDownload
                      className="w-5 h-5 text-[#DFC598] group-hover:text-white transition-colors"
                      aria-hidden="true"
                    />
                    <span>Download Resume</span>
                  </a>
                </div>
              </FadeInMount>

              {/* Accent Dot Matrix Grid (Left side subtle decor) */}
              <FadeInMount delay={0.22}>
                <div aria-hidden="true" className="hidden sm:grid grid-cols-6 gap-2.5 mt-12 opacity-45">
                  {Array.from({ length: LEFT_DOT_COUNT }).map((_, index) => (
                    <span key={index} className="w-1.5 h-1.5 rounded-full bg-[#C59A4E]" />
                  ))}
                </div>
              </FadeInMount>
            </div>

            {/* Right Visual Column */}
            <FadeInMount
              delay={0.14}
              className="lg:col-span-5 relative flex items-center justify-center"
            >
              <div
                className="relative w-full flex items-center justify-center"
                data-purpose="hero-visual-composition"
              >
              {/* Background Orbital Concentric Rings */}
              <div
                className="absolute w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] rounded-full border border-[#DFC598]/55 pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute w-[280px] h-[280px] sm:w-[390px] sm:h-[390px] rounded-full bg-[#FDF6E2]/80 pointer-events-none"
                aria-hidden="true"
              />

              {/* Floating 3D Code Tag Badge (</>) */}
              <div className="floating-code-badge absolute -top-4 sm:top-6 left-2 sm:-left-4 z-20 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-b from-[#FDF6E2] to-[#F3E2BA] border border-[#E8CE8E] flex items-center justify-center text-[#111215] font-extrabold text-xl sm:text-2xl shadow-lg transition-transform hover:scale-110">
                <span className="tracking-tighter font-mono font-black">&lt;/&gt;</span>
              </div>

              {/* Top-Right Accent Dot Matrix */}
              <div
                aria-hidden="true"
                className="absolute -top-6 right-2 sm:right-6 grid grid-cols-4 gap-2 opacity-50 z-0"
              >
                {Array.from({ length: RIGHT_DOT_COUNT }).map((_, index) => (
                  <span key={index} className="w-1.5 h-1.5 rounded-full bg-[#C59A4E]" />
                ))}
              </div>

              {/* Cursive Handwriting Accent Annotation */}
              <div
                className="absolute right-0 sm:-right-4 top-24 sm:top-20 z-20 select-none text-right"
                data-purpose="handwritten-accent"
              >
                <div className="handwriting-note text-neutral-700 text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
                  Building
                  <br />
                  Better Web
                  <br />
                  Experiences
                </div>
                <div className="w-20 h-3 ml-auto mt-1 border-b-2 border-[#DFB13E] rounded-full transform rotate-6" />
              </div>

              {/* Developer Portrait Image Container */}
              <div
                className="relative w-full max-w-[340px] sm:max-w-[400px] pt-4 fade-bottom-mask flex justify-center z-10"
                data-purpose="developer-photo"
              >
                <ResilientImage
                  src={BRAND_ASSETS.heroPortrait}
                  alt="Jagadeesan — Full Stack Developer"
                  className="w-full h-auto max-h-[460px] object-contain scale-[1.02] mix-blend-multiply drop-shadow-xl"
                  fallback={<PortraitFallback />}
                />
              </div>
              </div>
            </FadeInMount>
          </div>
        </div>
      </section>

      {/* Professional Journey Section */}
      <section className="bg-white py-16 md:py-24 border-t border-[#EAE6DF]/70">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Intro */}
            <FadeInView className="lg:col-span-4 lg:sticky lg:top-28">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111215]">
                Professional <span className="gold-gradient-text">Journey</span>
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed">
                Hands-on experience building scalable e-commerce and corporate web applications
                across the full stack, from frontend architecture to backend APIs and deployment.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-5">
                <button
                  type="button"
                  onClick={() => onNavigate('/work')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#111215] hover:text-[#A87920] transition-colors cursor-pointer"
                >
                  <span>Explore Shipped Work</span>
                  <FiArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('/cv')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-[#111215] transition-colors cursor-pointer"
                >
                  <span>View Full CV</span>
                  <FiArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </FadeInView>

            {/* Right Experience & Internship Timeline */}
            <div className="lg:col-span-8">
              <StaggerViewGroup className="relative pl-7 sm:pl-9 border-l border-[#DFC598] space-y-6 py-1">
                {professionalJourney.map((item) => (
                  <StaggerItem key={item.id}>
                    <article className="relative">
                      <span
                        className="w-3 h-3 rounded-full border-2 border-[#DFB13E] bg-white absolute -left-[34px] sm:-left-[42px] top-8"
                        aria-hidden="true"
                      />
                      <div className="rounded-2xl bg-white border border-[#EAE6DF] hover:border-[#DFB13E]/70 transition-colors p-6 sm:p-7 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
                      {/* Header Row */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="w-11 h-11 rounded-xl bg-[#FDF6E2] border border-[#F0DFB1] flex items-center justify-center text-[#A87920] shrink-0">
                            <FiBriefcase className="w-5 h-5" aria-hidden="true" />
                          </div>
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold text-[#111215]">
                              {item.role}
                            </h3>
                            <p className="text-sm text-neutral-600 mt-0.5">
                              <span className="font-semibold text-[#111215]">{item.company}</span>
                              <span aria-hidden="true"> · </span>
                              <span>{item.location}</span>
                              <span aria-hidden="true"> · </span>
                              <span className="text-[#A87920] font-medium">
                                {item.engagementType}
                              </span>
                            </p>
                          </div>
                        </div>

                        <div className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 tabular-nums shrink-0 sm:pt-1">
                          <FiCalendar className="w-3.5 h-3.5 text-[#A87920]" aria-hidden="true" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <ul className="mt-5 space-y-2 text-sm text-neutral-600 leading-relaxed">
                        {item.highlights.map((point) => (
                          <li key={point} className="flex items-start gap-2.5">
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-[#DFB13E] mt-2 shrink-0"
                              aria-hidden="true"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Key Achievements & Solutions */}
                      {item.keyAchievements && item.keyAchievements.length > 0 && (
                        <div className="mt-5 pt-4 border-t border-[#EAE6DF]">
                          <h4 className="text-xs font-bold tracking-wide text-[#111215] mb-2.5">
                            Key Achievements &amp; Solutions
                          </h4>
                          <ul className="space-y-2 text-sm text-neutral-600 leading-relaxed">
                            {item.keyAchievements.map((achievement) => (
                              <li key={achievement} className="flex items-start gap-2.5">
                                <span
                                  className="w-1.5 h-1.5 rounded-full bg-[#A87920] mt-2 shrink-0"
                                  aria-hidden="true"
                                />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Stack Footer */}
                      <div className="mt-5 pt-4 border-t border-[#EAE6DF] text-xs text-neutral-600 leading-relaxed">
                        <span className="font-semibold text-[#111215]">Technologies: </span>
                        <span>{item.stack.join(' · ')}</span>
                      </div>
                    </div>
                    </article>
                  </StaggerItem>
                ))}
              </StaggerViewGroup>
            </div>
          </div>
        </div>
      </section>

      {/* My Skills: Technologies I Work With */}
      <section className="bg-white py-16 md:py-24 border-t border-[#EAE6DF]/70">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <FadeInView className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111215]">
              Technologies I <span className="gold-gradient-text">Work With</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2 max-w-2xl">
              I use modern technologies to build scalable, efficient and user-friendly web
              applications.
            </p>
          </FadeInView>

          <div className="space-y-8">
            {SKILL_CATEGORIES.map((category, categoryIdx) => (
              <FadeInView
                key={category.title}
                delay={categoryIdx * 0.05}
                className="pb-8 border-b border-[#EAE6DF] last:border-b-0 last:pb-0"
              >
                {/* Simple Category Heading */}
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-[#FDF6E2] border border-[#F0DFB1] flex items-center justify-center text-[#A87920]">
                    {category.categoryIcon}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold tracking-tight text-[#111215]">
                    {category.title}
                  </h3>
                </div>

                {/* Simple Skill Cards */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="w-[calc(50%-6px)] sm:w-[138px] rounded-xl bg-white border border-[#EAE6DF] hover:border-[#DFB13E] hover:-translate-y-0.5 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-200 p-3.5 flex flex-col items-center justify-center gap-2.5 min-h-[92px]"
                    >
                      <div className="flex items-center justify-center">{skill.icon}</div>
                      <span className="text-xs font-semibold text-neutral-800 text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* My Education: Academic Journey */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Intro */}
            <FadeInView className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111215]">
                Academic <span className="gold-gradient-text">Journey</span>
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed max-w-md">
                My education has been a strong foundation in shaping my skills, knowledge and career
                goals.
              </p>
            </FadeInView>

            {/* Right Timeline */}
            <div className="lg:col-span-7">
              <StaggerViewGroup className="relative pl-7 sm:pl-9 border-l border-[#DFC598] space-y-5 py-2">
                {CV_DATA.education.map((edu) => (
                  <StaggerItem key={edu.degree}>
                    <div className="relative">
                      <span
                        className="w-3 h-3 rounded-full border-2 border-[#DFB13E] bg-white absolute -left-[34px] sm:-left-[42px] top-8"
                        aria-hidden="true"
                      />
                      <div className="rounded-2xl bg-white border border-[#EAE6DF] hover:border-[#DFB13E]/70 transition-colors p-5 sm:p-6 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl bg-[#FDF6E2] border border-[#F0DFB1] flex items-center justify-center text-[#A87920] shrink-0">
                          <FaGraduationCap className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-base sm:text-lg font-bold text-[#111215]">
                            {edu.degree}
                          </h3>
                          <p className="text-sm text-neutral-600">
                            {edu.institution} ·{' '}
                            <span className="font-semibold text-[#111215]">{edu.grade}</span>
                          </p>
                          <div className="inline-flex items-center gap-1.5 text-xs text-neutral-500 pt-1 tabular-nums">
                            <FiCalendar className="w-3.5 h-3.5 text-[#A87920]" aria-hidden="true" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerViewGroup>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
