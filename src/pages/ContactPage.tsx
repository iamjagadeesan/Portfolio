import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { AnimatePresence, motion } from 'motion/react';
import {
  FiArrowUpRight,
  FiCheck,
  FiCopy,
  FiGlobe,
  FiLoader,
  FiMail,
  FiMapPin,
  FiMessageSquare,
  FiPhone,
  FiSend,
  FiType,
  FiUser,
} from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { BRAND_ASSETS, PROFILE } from '../data/portfolioData';
import { ContactSubmission, RoutePath } from '../types/portfolio';
import { ResilientImage } from '../components/ui/ResilientImage';
import { LaptopIllustrationFallback } from '../components/ui/FallbackArtwork';
import {
  EASE_OUT_EXPO,
  FadeInMount,
  FadeInView,
  StaggerItem,
  StaggerMountGroup,
} from '../components/ui/MotionPrimitives';

const EMAILJS_SERVICE_ID = 'service_o5ehgwq';
const EMAILJS_TEMPLATE_ID = 'template_c77sm17';
const EMAILJS_PUBLIC_KEY = '_0LnKI3k8y1N7F0pR';

interface ContactPageProps {
  onNavigate: (path: RoutePath) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<ContactSubmission>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<ContactSubmission | null>(null);
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);

  const handleCopy = async (value: string, field: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Clipboard fallback ignored if blocked by browser permissions
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSending) return;
    setErrorMessage(null);

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
      setErrorMessage('Please complete all required fields before sending.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmedEmail)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!EMAILJS_PUBLIC_KEY.trim()) {
      setErrorMessage(
        `Email service public key (VITE_EMAILJS_PUBLIC_KEY) is not configured. Please email ${PROFILE.email} directly.`
      );
      return;
    }

    setIsSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: trimmedName,
          from_name: trimmedName,
          email: trimmedEmail,
          from_email: trimmedEmail,
          reply_to: trimmedEmail,
          subject: trimmedSubject,
          title: trimmedSubject,
          message: trimmedMessage,
          to_name: PROFILE.name,
          to_email: PROFILE.email,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY.trim(),
        }
      );

      setSubmittedData({
        name: trimmedName,
        email: trimmedEmail,
        subject: trimmedSubject,
        message: trimmedMessage,
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      const details =
        typeof err === 'object' && err !== null && 'text' in err
          ? String((err as { text?: unknown }).text || '')
          : err instanceof Error
            ? err.message
            : '';
      setErrorMessage(
        details
          ? `Unable to send your message (${details}). Please try again or email ${PROFILE.email}.`
          : `Unable to send your message right now. Please try again or email ${PROFILE.email}.`
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-white text-[#111215]">
      {/* Breadcrumb & Hero */}
      <section className="max-w-[1240px] mx-auto px-6 lg:px-10 pt-8 pb-4">
        <FadeInMount>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-6">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/');
            }}
            className="hover:text-neutral-950 transition-colors"
          >
            Home
          </a>
          <span className="text-neutral-400" aria-hidden="true">
            /
          </span>
          <span className="text-neutral-900">Contact</span>
        </nav>
        </FadeInMount>
      </section>

      {/* Quick Contact Cards */}
      <section className="max-w-[1240px] mx-auto px-6 lg:px-10 pb-8">
        <StaggerMountGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1: Email */}
          <StaggerItem>
            <div className="h-full group bg-white rounded-2xl p-6 border border-neutral-100 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_35px_-10px_rgba(0,0,0,0.10)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between min-h-[176px]">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-[#E5A93C]">
                <FiMail className="w-6 h-6" strokeWidth={1.8} />
              </div>
              <button
                type="button"
                onClick={() => handleCopy(PROFILE.email, 'email')}
                aria-label="Copy email address"
                className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-500 hover:text-amber-700 px-2 py-1 rounded-lg hover:bg-amber-50 transition-colors"
              >
                {copiedField === 'email' ? (
                  <>
                    <FiCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied</span>
                  </>
                ) : (
                  <>
                    <FiCopy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <div>
              <span className="block text-xs font-semibold text-neutral-400 mb-1">
                Email Address
              </span>
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center justify-between font-bold text-sm sm:text-[15px] text-[#111215] group-hover:text-amber-700 transition-colors"
              >
                <span className="truncate">{PROFILE.email}</span>
                <FiArrowUpRight className="w-4 h-4 shrink-0 ml-2 text-neutral-400 group-hover:text-amber-700" />
              </a>
            </div>
          </div>
          </StaggerItem>

          {/* Card 2: Phone */}
          <StaggerItem>
            <div className="h-full group bg-white rounded-2xl p-6 border border-neutral-100 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_35px_-10px_rgba(0,0,0,0.10)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between min-h-[176px]">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-[#E5A93C]">
                <FiPhone className="w-6 h-6" strokeWidth={1.8} />
              </div>
              <button
                type="button"
                onClick={() => handleCopy(PROFILE.phone, 'phone')}
                aria-label="Copy phone number"
                className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-500 hover:text-amber-700 px-2 py-1 rounded-lg hover:bg-amber-50 transition-colors"
              >
                {copiedField === 'phone' ? (
                  <>
                    <FiCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied</span>
                  </>
                ) : (
                  <>
                    <FiCopy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <div>
              <span className="block text-xs font-semibold text-neutral-400 mb-1">
                Phone Number
              </span>
              <a
                href={PROFILE.phoneHref}
                className="flex items-center justify-between font-bold text-sm sm:text-[15px] text-[#111215] group-hover:text-amber-700 transition-colors tabular-nums"
              >
                <span>{PROFILE.phone}</span>
                <FiArrowUpRight className="w-4 h-4 shrink-0 ml-2 text-neutral-400 group-hover:text-amber-700" />
              </a>
            </div>
          </div>
          </StaggerItem>

          {/* Card 3: Location */}
          <StaggerItem>
            <div className="h-full bg-white rounded-2xl p-6 border border-neutral-100 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_35px_-10px_rgba(0,0,0,0.10)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between min-h-[176px]">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-[#E5A93C]">
                <FiMapPin className="w-6 h-6" strokeWidth={1.8} />
              </div>
              <div>
                <span className="block text-xs font-semibold text-neutral-400 mb-1">Location</span>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm sm:text-[15px] text-[#111215]">
                    {PROFILE.country}
                  </span>
                  <span className="text-xs font-medium text-neutral-400">Remote Ready</span>
                </div>
              </div>
            </div>
          </StaggerItem>
        </StaggerMountGroup>
      </section>

      {/* Message Form & 3D Laptop Visual */}
      <section className="max-w-full mx-auto py-14 bg-[#FAF8F5] flex justify-center items-center" id="contact-form">
        <div className=" max-w-[1240px] px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Form */}
          <FadeInView className="lg:col-span-7 space-y-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A87920]">
              Drop a Message
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111215]">
              Send Me a Message
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              I&apos;m always open to discussing new opportunities, collaborations, or any
              interesting product ideas.
            </p>

            <AnimatePresence mode="wait">
            {submittedData ? (
              <motion.div
                key="contact-submitted"
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
                role="status"
                className="mt-6 rounded-3xl bg-white border border-emerald-200 p-8 shadow-sm space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <FiCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">
                  Message Sent — Thank You, {submittedData.name}!
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Your message regarding <strong className="text-neutral-900">&ldquo;{submittedData.subject}&rdquo;</strong> has been sent to {PROFILE.name}. I&apos;ll get back to you at <span className="font-medium text-neutral-800">{submittedData.email}</span> soon.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={`mailto:${PROFILE.email}?subject=${encodeURIComponent(
                      submittedData.subject
                    )}&body=${encodeURIComponent(submittedData.message)}`}
                    className="inline-flex items-center gap-2 bg-[#111215] hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-colors"
                  >
                    <FiMail className="w-4 h-4 text-[#DFC598]" />
                    <span>Open in Email App</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmittedData(null)}
                    className="inline-flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="contact-form-fields"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                className="space-y-4 pt-3"
                onSubmit={handleSubmit}
                noValidate
              >
                {errorMessage && (
                  <div
                    role="alert"
                    className="rounded-2xl bg-rose-50 border border-rose-200 px-4 py-3 text-xs sm:text-sm font-medium text-rose-800"
                  >
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <label htmlFor="contact-name" className="sr-only">
                      Your Name
                    </label>
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-neutral-400">
                      <FiUser className="w-5 h-5" strokeWidth={1.8} />
                    </div>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      disabled={isSending}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name *"
                      className="w-full pl-12 pr-5 py-4 rounded-full bg-white border border-neutral-200/90 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all shadow-sm disabled:opacity-60"
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="contact-email" className="sr-only">
                      Your Email
                    </label>
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-neutral-400">
                      <FiMail className="w-5 h-5" strokeWidth={1.8} />
                    </div>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      disabled={isSending}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your Email *"
                      className="w-full pl-12 pr-5 py-4 rounded-full bg-white border border-neutral-200/90 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all shadow-sm disabled:opacity-60"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="contact-subject" className="sr-only">
                    Subject
                  </label>
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-neutral-400">
                    <FiType className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    disabled={isSending}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Subject *"
                    className="w-full pl-12 pr-5 py-4 rounded-full bg-white border border-neutral-200/90 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all shadow-sm disabled:opacity-60"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="contact-message" className="sr-only">
                    Your Message
                  </label>
                  <div className="absolute top-4 left-5 pointer-events-none text-neutral-400">
                    <FiMessageSquare className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    required
                    disabled={isSending}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your Message *"
                    className="w-full pl-12 pr-5 py-4 rounded-3xl bg-white border border-neutral-200/90 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all shadow-sm resize-y disabled:opacity-60"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="inline-flex items-center gap-3 bg-[#111215] hover:bg-neutral-800 disabled:bg-neutral-400 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 rounded-full transition duration-200 shadow-md group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900"
                  >
                    {isSending ? (
                      <>
                        <FiLoader className="w-4 h-4 animate-spin" aria-hidden="true" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FiSend className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
            </AnimatePresence>
          </FadeInView>

          {/* Right: 3D Laptop Mockup & Socials */}
          <FadeInView delay={0.12} className="lg:col-span-5 flex flex-col items-center justify-center pt-6 lg:pt-8">
            <div className="relative w-full max-w-md flex flex-col items-center justify-center">
              <div
                className="absolute -top-6 w-72 h-72 rounded-full bg-[#FAEDDA]/80 blur-xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-20 self-end mr-4 mb-2 bg-white px-5 py-3 rounded-2xl rounded-bl-none shadow-[0_20px_35px_-10px_rgba(0,0,0,0.12)] border border-neutral-100">
                <span className="text-xs sm:text-sm font-bold text-neutral-800">
                  Let&apos;s build something great!
                </span>
              </div>

              <div className="relative w-full flex items-center justify-center py-2 z-10">
                <ResilientImage
                  src={BRAND_ASSETS.contactLaptop}
                  alt="3D Laptop with code brackets and indoor plant"
                  className="w-full max-w-[340px] sm:max-w-[360px] h-auto object-contain drop-shadow-xl select-none transition-transform duration-300 hover:scale-[1.03]"
                  fallback={<LaptopIllustrationFallback />}
                />
              </div>

              <div className="mt-8 text-center space-y-4">
                <h3 className="text-base font-bold text-neutral-800">Connect With Me</h3>
                <div className="flex items-center justify-center gap-3">
                  <a
                    aria-label="LinkedIn"
                    href={PROFILE.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-white border border-neutral-200 shadow-sm flex items-center justify-center text-[#0A66C2] hover:bg-neutral-50 hover:shadow-md transition-all"
                  >
                    <FaLinkedinIn className="w-5 h-5" aria-hidden="true" />
                  </a>
                  <a
                    aria-label="GitHub"
                    href={PROFILE.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-white border border-neutral-200 shadow-sm flex items-center justify-center text-neutral-800 hover:bg-neutral-50 hover:shadow-md transition-all"
                  >
                    <FaGithub className="w-5 h-5" aria-hidden="true" />
                  </a>
                  <a
                    aria-label="Portfolio Home"
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/');
                    }}
                    className="w-11 h-11 rounded-xl bg-white border border-neutral-200 shadow-sm flex items-center justify-center text-neutral-800 hover:bg-neutral-50 hover:shadow-md transition-all"
                  >
                    <FiGlobe className="w-5 h-5" strokeWidth={1.8} />
                  </a>
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
};
