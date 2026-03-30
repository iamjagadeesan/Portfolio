import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FolderOpen,
  User,
  Zap,
  Mail,
  Calendar,
} from "lucide-react";
import { IoIosPerson } from "react-icons/io";
import { PiHardDrivesFill } from "react-icons/pi";
import { MdAutoDelete } from "react-icons/md";

import { TopBar } from "./components/Shared/TopBar";
import { Dock } from "./components/Shared/Dock";
import { Window } from "./components/Shared/Window";
import { DesktopIcon } from "./components/Desktop/DesktopIcon";
import { ProjectsView } from "./components/Desktop/ProjectsView";
import { SkillsView } from "./components/Desktop/SkillsView";
import { AboutView } from "./components/Desktop/AboutView";
import { ExperienceView } from "./components/Desktop/ExperienceView";
import { ContactView } from "./components/Desktop/ContactView";

import { MobileTopBar } from "./components/Mobile/MobileTopBar";
import { MobileDock } from "./components/Mobile/MobileDock";
import { MobileHome } from "./components/Mobile/MobileHome";
import { MobileAbout } from "./components/Mobile/MobileAbout";
import { MobileExperience } from "./components/Mobile/MobileExperience";
import { MobileSkills } from "./components/Mobile/MobileSkills";
import { MobileProjects } from "./components/Mobile/MobileProjects";
import { MobileContact } from "./components/Mobile/MobileContact";

import { LoadingScreen } from "./components/LoadingScreen";
import { ActiveWindow } from "./types";

export default function App() {
  const [activeApp, setActiveApp] = useState<ActiveWindow>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [minimizedApps, setMinimizedApps] = useState<ActiveWindow[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  /* =======================
     Minimize/Restore Handlers
  ======================= */
  const handleMinimize = (app: ActiveWindow) => {
    setMinimizedApps((prev) => [...prev, app]);
  };

  const handleRestore = (app: ActiveWindow) => {
    setMinimizedApps((prev) => prev.filter((a) => a !== app));
    setActiveApp(app); // Show the restored window
  };

  /* =======================
     Responsive Detection
  ======================= */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* =======================
     Desktop Windows
  ======================= */
  const renderDesktopWindow = () => {
    switch (activeApp) {
      case "projects":
        return (
          <Window
            title="Projects — Portfolio"
            isOpen={true}
            onClose={() => setActiveApp(null)}
            onMinimize={() => handleMinimize("projects")}
            isMinimized={minimizedApps.includes("projects")}
            icon={<FolderOpen className="w-4 h-4" />}
          >
            <ProjectsView />
          </Window>
        );

      case "skills":
        return (
          <Window
            title="Skills — Portfolio"
            isOpen={true}
            onClose={() => setActiveApp(null)}
            onMinimize={() => handleMinimize("skills")}
            isMinimized={minimizedApps.includes("skills")}
            icon={<Zap className="w-4 h-4" />}
            width="90%"
            height="90%"
            className="max-w-6xl"
          >
            <SkillsView />
          </Window>
        );

      case "about":
        return (
          <Window
            title="About Me — System Settings"
            isOpen={true}
            onClose={() => setActiveApp(null)}
            onMinimize={() => handleMinimize("about")}
            isMinimized={minimizedApps.includes("about")}
            icon={<User className="w-4 h-4" />}
            width="900px"
            height="650px"
          >
            <AboutView />
          </Window>
        );

      case "experience":
        return (
          <Window
            title="Experience — Timeline"
            isOpen={true}
            onClose={() => setActiveApp(null)}
            onMinimize={() => handleMinimize("experience")}
            isMinimized={minimizedApps.includes("experience")}
            icon={<Calendar className="w-4 h-4" />}
            width="600px"
            height="600px"
          >
            <ExperienceView />
          </Window>
        );

      case "contact":
        return (
          <Window
            title="Contact — New Message"
            isOpen={true}
            onClose={() => setActiveApp(null)}
            onMinimize={() => handleMinimize("contact")}
            isMinimized={minimizedApps.includes("contact")}
            icon={<Mail className="w-4 h-4" />}
            width="700px"
            height="90%"
          >
            <ContactView />
          </Window>
        );

      default:
        return null;
    }
  };

  /* =======================
     Mobile Views
  ======================= */
  const renderMobileContent = () => {
    if (activeApp === null)
      return <MobileHome onAppClick={setActiveApp} />;

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={activeApp}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="flex-1 flex flex-col overflow-hidden"
        >
          {activeApp === "about" && <MobileAbout />}
          {activeApp === "experience" && <MobileExperience />}
          {activeApp === "skills" && <MobileSkills />}
          {activeApp === "projects" && <MobileProjects />}
          {activeApp === "contact" && <MobileContact />}
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="relative w-full h-dvh overflow-hidden font-body">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          {!isMobile ? (
            /* =======================
               Desktop Mode
            ======================= */
            <div className="relative w-full h-full bg-background">
          
          {/* Wallpaper */}
          <div className="fixed inset-0 z-0 bg-gradient-to-br from-indigo-950 to-blue-900"></div>

          <TopBar />

          <main className="relative z-10 pt-12 pb-24 h-full px-6 flex flex-col items-end">
            
            {/* Desktop Icons */}
            <div className="flex flex-col gap-8 items-center w-24 py-4">
              <DesktopIcon
                icon={<IoIosPerson className={`text-4xl`} />}
                label="User Profile"
                gradient="from-primary-container to-secondary-container"
                onClick={() => setActiveApp("about")}
                fill
              />
              <DesktopIcon
                icon={<PiHardDrivesFill className={`text-4xl`} />}
                label="Macintosh HD"
                gradient="from-slate-400 to-slate-600"
                onClick={() => setActiveApp("projects")}
                fill
              />
              <DesktopIcon
                icon={<MdAutoDelete className={`text-4xl`} />}
                label="Trash"
                gradient="bg-white/10 backdrop-blur-xl border border-white/10"
                onClick={() => setActiveApp("contact")}
              />
            </div>

            {/* Windows */}
            {renderDesktopWindow()}
          </main>

          <Dock 
            activeApp={activeApp} 
            onAppClick={setActiveApp}
            minimizedApps={minimizedApps}
            onRestore={handleRestore}
          />
        </div>
      ) : (
        /* =======================
           Mobile Mode
        ======================= */
        <div className="relative w-full h-full flex items-center justify-center bg-[#0a0a0a]">
          
          {/* Background Glow */}
          <div className="absolute top-[20%] right-[10%] w-100 h-100 bg-primary/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[20%] left-[10%] w-75 h-75 bg-tertiary-container/10 blur-[100px] rounded-full" />

          {/* Phone Frame */}
          <div className="relative w-screen h-full bg-background overflow-hidden shadow-2xl flex flex-col">
            
            {/* Wallpaper */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-linear-to-tr from-[#001a41] via-[#131315] to-on-tertiary opacity-80" />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmkHzDSTuLHd8RqBb6Qiomd5F_AiOiaNfaQ8obIxu5DDbLtdDlySBjdlZgiStzP3gPCqFcgd6ur1tkZUl7i2298yfPCNX5ppuiBsv1fYn7avruDx2T_u0ugzpV_wTtwQreLHbnSYtYgH9bYJsaQMWzNlqobwj1TUmwtNUdRPOlwFPmlBT7-VtnnZrFTXiYx2gKjeTDosvIN0-incu63AzzPTWFb1CXyfEx66ZetRXJh1WcqvxtrhbGqC9PgDrKAvO31C5RHSTdE2A"
                alt="Mobile Wallpaper"
                className="w-full h-full object-cover mix-blend-overlay"
                referrerPolicy="no-referrer"
              />
            </div>

            <MobileTopBar />

            <main className="relative z-10 flex-1 flex flex-col overflow-hidden">
              {renderMobileContent()}
            </main>

            <MobileDock activeApp={activeApp} onAppClick={setActiveApp} />

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-33.5 h-1.25 bg-white rounded-full opacity-50" />
          </div>
        </div>
      )}
        </>
      )}
    </div>
  );
}