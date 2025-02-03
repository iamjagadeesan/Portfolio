import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdOutlineDownload } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

function Contact({toggle}) {
  const socialLinks = [
        {
      Icon: IoMdMail,
      url: "mailto",
      name: "Mail",
      color: "text-green-600",
    },
    {

      Icon: FaLinkedin,
      url: "https://linkedin.com/in/iamjagadeesan",
      name: "LinkedIn",
      color: "text-blue-600",
    },
    {
      Icon: FaGithub,
      url: "https://github.com/iamjagadeesan",
      name: "GitHub",
      color: "text-gray-600",
    },
    {
      Icon: FaInstagram,
      url: "https://instagram.com/jaga_the_jd",
      name: "Instagram",
      color: "text-pink-500",
    },
    {
      Icon: MdOutlineDownload,
      url: "https://iamjagadeesan.github.io/Resume/",
      name: "Resume",
      color: "text-green-600",
    },
  ];

  return (
    <section
      id="contact"
      className="w-full min-h-screen flex flex-col items-center justify-center text-center py-12 px-4"
    >

        <div className="lg:mt-8 w-full flex flex-row justify-start items-center mx-2 lg:px-6">
    <div className="text-nowrap relative sm:text-xl md:text-2xl lg:text-4xl font-thin font-audiowide bg-clip-text text-transparent bg-gradient-to-r from-violet-300 via-violet-600 to-violet-800 sm:px-0 lg:px-2 rounded-lg">Let's Connect</div>
    <div className="relative w-full h-[2px] lg:h-[3px] bg-gradient-to-r from-violet-700 to-transparent sm:ml-0 lg:ml-2 overflow-hidden rounded-lg"></div>
    </div>
      {/* Contact Section Header */}
      <div className="mt-4 text-center">
        <p className={`text-md lg:text-lg ${toggle?'text-white/75':'text-gray-800'}`}>
          Whether you want to collaborate, connect, or just say hi, I’m always
          open for a chat. Drop a message below or find me on social platforms.
        </p>
      </div>

      {/* Content Container */}
      <div className={`mx-4 lg:mx-0 w-full lg:w-3/4 drop-shadow-[0_0_10px_rgba(139,92,246,0.3)] lg:drop-shadow-[0_0_30px_rgba(139,92,246,0.3)] relative my-12 bg-[conic-gradient(transparent,transparent,#5B21B6,transparent,transparent,#5B21B6,#5B21B6)] rounded-3xl p-[1px] lg:p-[2px]`}>
        <div className={`flex flex-col lg:flex-row items-center gap-16 w-full ${toggle?'bg-gray-950':'bg-gray-200'} backdrop-blur-lg p-8 rounded-3xl shadow-2xl`}>
          {/* Contact Form */}
          <div className="w-full">
            <h2 className="lg:text-[2rem] text-[1.7rem] font-thin text-violet-700 mb-6 font-audiowide">Get in Touch</h2>
            <form className="space-y-6 text-start">
              <div>
                <label htmlFor="name" className={`block ${toggle?'text-white/75':'text-gray-800'} font-medium`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className={`mt-1 lg:mt-2 w-full px-2 py-2 ${toggle?'bg-gray-900 text-white placeholder:text-gray-400':'bg-gray-300 text-gray-800 placeholder:text-gray-700'} rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-700`}
                />
              </div>
              <div>
                <label htmlFor="email" className={`block ${toggle?'text-white/75':'text-gray-800'} font-medium`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className={`mt-1 lg:mt-2 w-full px-2 py-2 ${toggle?'bg-gray-900 text-white placeholder:text-gray-400':'bg-gray-300 text-gray-800 placeholder:text-gray-700'} rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-700`}
                />
              </div>
              <div>
                <label htmlFor="message" className={`block ${toggle?'text-white/75':'text-gray-800'} font-medium`}>
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Write your message..."
                  rows="4"
                  className={`sm:mt-1 lg:mt-2 w-full px-2 py-2 ${toggle?'bg-gray-900 text-white placeholder:text-gray-400':'bg-gray-300 text-gray-800 placeholder:text-gray-700'} rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-700`}
                ></textarea>
              </div>
              <button
                className="active:space-110 w-full py-3 bg-violet-700 cursor-pointer text-white font-semibold rounded-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
            <h2 className="lg:text-[2rem] sm:text-[1.7rem] font-thin text-violet-700 mb-6 font-audiowide">Find Me Online</h2>
            <div className="grid grid-cols-3 gap-8 justify-items-center">
              {socialLinks.map(({ Icon, url, name, color }, idx) => (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center"
                >
                  <div className={`rounded-full text-gray-200 p-3 bg-gradient-to-r from-violet-400 via-violet-600 to-violet-800`}>
                    <Icon className="text-3xl lg:text-4xl" />
                  </div>
                  <p className={`mt-3 font-semibold ${toggle?'text-white/50':'text-gray-800'} text-sm tracking-wider`}>{name}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className={`text-sm ${toggle?'text-gray-400':'text-gray-800'} mt-2`}>
        &copy; {new Date().getFullYear()} Jagadeesan. All rights reserved.
      </p>
    </section>
  );
}

export default Contact;
