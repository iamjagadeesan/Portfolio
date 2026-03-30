// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
// import { FaLinkedin, FaGithub } from "react-icons/fa";
// import { RiDraftLine } from "react-icons/ri";
// import { IoSend } from "react-icons/io5";

// export const ContactView: React.FC = () => {
  // const [formData, setFormData] = useState({
  //   email: "",
  //   subject: "",
  //   message: "",
  // });

  // const [errors, setErrors] = useState<any>({});
  // const [loading, setLoading] = useState(false);
  // const [success, setSuccess] = useState(false);

  // /* =======================
  //    Handle Input
  // ======================= */
  // const handleChange = (e: any) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // /* =======================
  //    Validation
  // ======================= */
  // const validate = () => {
  //   const newErrors: any = {};

  //   if (!formData.email) {
  //     newErrors.email = "Email is required";
  //   } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
  //     newErrors.email = "Invalid email";
  //   }

  //   if (!formData.subject) {
  //     newErrors.subject = "Subject is required";
  //   }

  //   if (!formData.message) {
  //     newErrors.message = "Message cannot be empty";
  //   }

  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  // /* =======================
  //    Submit
  // ======================= */
  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();

  //   if (!validate()) return;

  //   setLoading(true);

  //   try {
  //     await emailjs.send(
  //       "service_o5ehgwq",
  //       "template_c77sm17",
  //       formData,
  //       "_0LnKI3k8y1N7F0pR"
  //     );

  //     setSuccess(true);
  //     setFormData({ email: "", subject: "", message: "" });
  //   } catch (err) {
  //     alert("Something went wrong 😢");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

//   return (
//     <div className="flex-1 flex flex-col overflow-hidden bg-background">
//       <div className="p-10 max-w-2xl mx-auto w-full overflow-y-auto no-scrollbar">
        
//         <h1 className="text-4xl font-extrabold mb-2">New Message</h1>
//         <p className="text-on-surface-variant mb-10">
//           Compose your inquiry or collaboration request.
//         </p>

//         <form onSubmit={handleSubmit}>
//           {/* FROM */}
//           <div className="mb-4">
//             <input
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="your@email.com"
//               className="w-full p-3 rounded-lg bg-white/5 text-white outline-none"
//             />
//             {errors.email && (
//               <p className="text-red-400 text-sm mt-1">{errors.email}</p>
//             )}
//           </div>

//           {/* SUBJECT */}
//           <div className="mb-4">
//             <input
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               placeholder="Subject"
//               className="w-full p-3 rounded-lg bg-white/5 text-white outline-none"
//             />
//             {errors.subject && (
//               <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
//             )}
//           </div>

//           {/* MESSAGE */}
//           <div className="mb-6">
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Type your message..."
//               className="w-full p-3 rounded-lg bg-white/5 text-white min-h-[150px] outline-none"
//             />
//             {errors.message && (
//               <p className="text-red-400 text-sm mt-1">{errors.message}</p>
//             )}
//           </div>

//           {/* BUTTONS */}
//           <div className="grid grid-cols-2 gap-4 mb-10">
//             <button
//               type="button"
//               className="py-3 rounded-xl bg-white/10 text-white"
//             >
//               <RiDraftLine />
//               Save Draft
//             </button>

//             <button
//               type="submit"
//               disabled={loading}
//               className="py-3 rounded-xl bg-primary text-white flex items-center justify-center gap-2"
//             >
//               {loading ? (
//                 <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
//               ) : (
//                 <>
//                   <IoSend />
//                   Send
//                 </>
//               )}
//             </button>
//           </div>
//         </form>

//         {/* SUCCESS POPUP */}
//         {success && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
//             <div className="bg-slate-900 p-6 rounded-xl text-center shadow-xl">
//               <h2 className="text-xl font-bold mb-2">✅ Message Sent</h2>
//               <p className="text-sm text-gray-300 mb-4">
//                 I’ll get back to you soon!
//               </p>
//               <button
//                 onClick={() => setSuccess(false)}
//                 className="px-4 py-2 bg-primary rounded-lg"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}

//         {/* SOCIAL */}
//         <div className="grid grid-cols-2 gap-4 mt-10">
//           <div className="p-4 bg-white/5 rounded-xl flex gap-3 items-center">
//             <FaLinkedin />
//             <span>/in/creative-dev</span>
//           </div>
//           <div className="p-4 bg-white/5 rounded-xl flex gap-3 items-center">
//             <FaGithub />
//             <span>@m4-specialist</span>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiDraftLine } from "react-icons/ri";
import { IoSend } from "react-icons/io5";

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailjs.init('bide0t4C7a09Rqyd1');
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: any = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        'service_bo5zdp6',
        'template_a1c442f',
        e.target,
        "bide0t4C7a09Rqyd1"
      );

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err: any) {
      console.error('EmailJS Error:', err);
      setErrors({ submit: "Failed to send message. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-surface/75 glass-effect">
      <div className="p-10 max-w-3xl mx-auto w-full overflow-y-auto no-scrollbar">
        
        <h1 className="text-4xl font-extrabold mb-2 text-on-surface">New Message</h1>
        <p className="text-on-surface-variant mb-10">
          Compose your inquiry or collaboration request. I'll get back to you soon!
        </p>

        {success && (
          <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 mb-6 text-green-400 flex items-start gap-3 animate-in fade-in">
            <span className="text-xl flex-shrink-0">✅</span>
            <div>
              <p className="font-semibold">Message Sent Successfully!</p>
              <p className="text-sm mt-1">Thank you for reaching out. I'll be in touch soon.</p>
            </div>
          </div>
        )}

        {errors.submit && (
          <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 mb-6 text-red-400 flex items-start gap-3">
            <span className="text-xl flex-shrink-0">❌</span>
            <p>{errors.submit}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* NAME */}
          <div>
            <label className="block text-sm font-semibold text-on-surface mb-2">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full p-3 rounded-lg bg-surface-container-high/50 text-on-surface border border-white/10 focus:border-primary focus:outline-none transition-colors placeholder:text-on-surface-variant/50"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1.5 flex items-center gap-1">
                <span>•</span> {errors.name}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-semibold text-on-surface mb-2">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full p-3 rounded-lg bg-surface-container-high/50 text-on-surface border border-white/10 focus:border-primary focus:outline-none transition-colors placeholder:text-on-surface-variant/50"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1.5 flex items-center gap-1">
                <span>•</span> {errors.email}
              </p>
            )}
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block text-sm font-semibold text-on-surface mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message..."
              className="w-full p-3 rounded-lg bg-surface-container-high/50 text-on-surface border border-white/10 focus:border-primary focus:outline-none transition-colors placeholder:text-on-surface-variant/50 resize-none h-40"
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1.5 flex items-center gap-1">
                <span>•</span> {errors.message}
              </p>
            )}
          </div>

          {/* BUTTONS */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <button
              type="button"
              className="py-3 rounded-lg bg-surface-container-highest text-on-surface font-semibold hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2 border border-white/5"
            >
              <RiDraftLine className="text-lg" />
              Save Draft
            </button>

            <button
              type="submit"
              disabled={loading}
              className="py-3 rounded-lg bg-primary text-on-primary font-bold hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
            >
              {loading ? (
                <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
              ) : (
                <>
                  <IoSend className="text-lg" />
                  Send Message
                </>
              )}
            </button>
          </div>
        </form>

        {/* SOCIAL */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Other Ways to Connect</p>
          <div className="grid grid-cols-2 gap-4 pb-10">
            <a 
              href="https://linkedin.com/in/iamjagadeesan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-surface-container-high rounded-lg flex gap-3 items-center hover:bg-surface-container-highest transition-colors border border-white/5"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                <FaLinkedin className="text-lg" />
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface">LinkedIn</p>
                <p className="text-xs text-on-surface-variant">/in/iamjagadeesan</p>
              </div>
            </a>
            <a 
              href="https://github.com/iamjagadeesan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-surface-container-high rounded-lg flex gap-3 items-center hover:bg-surface-container-highest transition-colors border border-white/5"
            >
              <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 flex-shrink-0">
                <FaGithub className="text-lg" />
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface">GitHub</p>
                <p className="text-xs text-on-surface-variant">iamjagadeesan</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
