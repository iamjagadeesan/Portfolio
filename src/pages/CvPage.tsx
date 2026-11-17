import React from 'react';
import {
  FiArrowRight,
  FiDownload,
  FiGlobe,
  FiMail,
  FiPhone,
  FiPrinter,
} from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { BRAND_ASSETS, CV_DATA } from '../data/portfolioData';
import { RoutePath } from '../types/portfolio';
import { FadeInMount } from '../components/ui/MotionPrimitives';

interface CvPageProps {
  onNavigate: (path: RoutePath) => void;
}

export const CvPage: React.FC<CvPageProps> = ({ onNavigate }) => {
  return (
    <main className="max-w-[1000px] mx-auto px-6 lg:px-10 py-10 md:py-16">
      {/* Header */}
      <FadeInMount delay={0.02}>
      <div className="flex flex-wrap items-start justify-between gap-6 pb-8 border-b border-neutral-200">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A87920] mb-2">
            Curriculum Vitae
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111215]">
            {CV_DATA.name} — {CV_DATA.role}
          </h1>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-neutral-600 mt-3">
            <a
              href={`mailto:${CV_DATA.email}`}
              className="inline-flex items-center gap-1.5 hover:text-neutral-950 transition-colors"
            >
              <FiMail className="w-4 h-4 text-[#A87920]" aria-hidden="true" />
              <span>{CV_DATA.email}</span>
            </a>

            <a
              href={CV_DATA.phoneHref}
              className="inline-flex items-center gap-1.5 hover:text-neutral-950 transition-colors tabular-nums"
            >
              <FiPhone className="w-4 h-4 text-[#A87920]" aria-hidden="true" />
              <span>{CV_DATA.phone}</span>
            </a>

            <a
              href={CV_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-neutral-950 transition-colors"
            >
              <FaGithub className="w-4 h-4 text-[#A87920]" aria-hidden="true" />
              <span>{CV_DATA.githubLabel}</span>
            </a>

            <a
              href={CV_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-neutral-950 transition-colors"
            >
              <FaLinkedinIn className="w-4 h-4 text-[#A87920]" aria-hidden="true" />
              <span>{CV_DATA.linkedinLabel}</span>
            </a>

            <a
              href={CV_DATA.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-neutral-950 transition-colors"
            >
              <FiGlobe className="w-4 h-4 text-[#A87920]" aria-hidden="true" />
              <span>{CV_DATA.portfolioLabel}</span>
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 no-print">
          <a
            href={BRAND_ASSETS.resumePdf}
            download="Jagadeesan_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-300 hover:border-neutral-900 text-xs font-semibold text-neutral-900 transition-colors whitespace-nowrap"
          >
            <FiDownload className="w-4 h-4 text-[#A87920]" />
            <span>Download Resume</span>
          </a>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-300 hover:border-neutral-900 text-xs font-semibold text-neutral-900 transition-colors whitespace-nowrap"
          >
            <FiPrinter className="w-4 h-4" />
            <span>Print / Save PDF</span>
          </button>
          <button
            type="button"
            onClick={() => onNavigate('/contact')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111215] hover:bg-neutral-800 text-white text-xs font-semibold transition-colors whitespace-nowrap"
          >
            <span>Get in Touch</span>
            <FiArrowRight className="w-4 h-4 text-[#DFC598]" />
          </button>
        </div>
      </div>
      </FadeInMount>

      {/* Professional Summary */}
      <FadeInMount delay={0.06}>
      <section className="py-7 border-b border-neutral-200">
        <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#A87920] mb-3">
          Professional Summary
        </h2>
        <p className="text-sm sm:text-[15px] text-neutral-700 leading-relaxed">
          {CV_DATA.summary}
        </p>
      </section>
      </FadeInMount>

      {/* Technical Skills */}
      <FadeInMount delay={0.1}>
      <section className="py-7 border-b border-neutral-200">
        <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#A87920] mb-4">
          Technical Skills
        </h2>
        <dl className="space-y-2.5 text-sm">
          {CV_DATA.technicalSkills.map((group) => (
            <div
              key={group.category}
              className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 items-baseline"
            >
              <dt className="sm:col-span-3 text-xs font-bold uppercase tracking-wider text-neutral-900">
                {group.category}
              </dt>
              <dd className="sm:col-span-9 text-neutral-700 leading-relaxed">{group.items}</dd>
            </div>
          ))}
        </dl>
      </section>
      </FadeInMount>

      {/* Experience */}
      <FadeInMount delay={0.14}>
      <section className="py-7 border-b border-neutral-200 space-y-6">
        <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#A87920]">
          Experience
        </h2>
        {CV_DATA.experiences.map((exp) => (
          <article
            key={exp.id}
            className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start"
          >
            <div className="md:col-span-3">
              <span className="text-xs font-mono font-semibold text-[#8F6612] uppercase tracking-wider tabular-nums">
                {exp.period}
              </span>
            </div>

            <div className="md:col-span-9 space-y-3">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#111215]">{exp.role}</h3>
                <p className="text-sm font-semibold text-neutral-700">{exp.company}</p>
              </div>

              <ul className="list-disc pl-5 space-y-1.5 text-sm text-neutral-700 leading-relaxed">
                {exp.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              {exp.keyAchievements && exp.keyAchievements.length > 0 && (
                <div className="pt-1 space-y-1.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                    Key Achievements &amp; Solutions
                  </h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm text-neutral-700 leading-relaxed">
                    {exp.keyAchievements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </article>
        ))}
      </section>
      </FadeInMount>

      {/* Projects */}
      <FadeInMount delay={0.18}>
      <section className="py-7 border-b border-neutral-200 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#A87920]">
            Projects
          </h2>
          <button
            type="button"
            onClick={() => onNavigate('/work')}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#A87920] hover:text-[#111215] transition-colors no-print"
          >
            <span>Explore Case Studies</span>
            <FiArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="space-y-6">
          {CV_DATA.projects.map((project) => (
            <article key={project.id} className="space-y-2">
              <div className="flex items-center gap-2.5">
                <h3 className="text-sm sm:text-base font-extrabold tracking-tight text-[#111215] uppercase">
                  {project.name}
                </h3>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full">
                  {project.status}
                </span>
              </div>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-neutral-700 leading-relaxed">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      </FadeInMount>

      {/* Internship Experience */}
      <FadeInMount delay={0.22}>
      <section className="py-7 border-b border-neutral-200 space-y-5">
        <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#A87920]">
          Internship Experience
        </h2>
        {CV_DATA.internships.map((intern) => (
          <article
            key={intern.id}
            className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start"
          >
            <div className="md:col-span-3">
              <span className="text-xs font-mono font-semibold text-[#8F6612] uppercase tracking-wider tabular-nums">
                {intern.period}
              </span>
            </div>
            <div className="md:col-span-9 space-y-2.5">
              <div>
                <h3 className="text-base font-bold text-[#111215]">
                  {intern.role}{' '}
                  <span className="font-normal text-neutral-400" aria-hidden="true">
                    |
                  </span>{' '}
                  <span className="font-semibold text-neutral-700">
                    {intern.company} ({intern.location})
                  </span>
                </h3>
              </div>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-neutral-700 leading-relaxed">
                {intern.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
      </FadeInMount>

      {/* Education */}
      <FadeInMount delay={0.26}>
      <section className="py-7 border-b border-neutral-200 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#A87920]">
          Education
        </h2>
        {CV_DATA.education.map((edu) => (
          <div
            key={edu.degree}
            className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-baseline"
          >
            <div className="md:col-span-3">
              <span className="text-xs font-mono font-semibold text-[#8F6612] tabular-nums">
                {edu.period}
              </span>
            </div>
            <div className="md:col-span-9 text-sm text-neutral-800">
              <span className="font-bold text-[#111215]">{edu.degree}</span>
              <span className="text-neutral-400 mx-2" aria-hidden="true">
                |
              </span>
              <span>{edu.institution}</span>
              <span className="text-neutral-400 mx-2" aria-hidden="true">
                |
              </span>
              <span className="font-semibold text-neutral-900 tabular-nums">{edu.grade}</span>
            </div>
          </div>
        ))}
      </section>
      </FadeInMount>

      {/* Strengths & Achievements */}
      <FadeInMount delay={0.3}>
      <section className="py-7 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#A87920] mb-3">
            Strengths
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 list-disc pl-5 text-sm text-neutral-700">
            {CV_DATA.strengths.map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#A87920] mb-3">
            Achievements
          </h2>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-neutral-700 leading-relaxed">
            {CV_DATA.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </div>
      </section>
      </FadeInMount>
    </main>
  );
};
