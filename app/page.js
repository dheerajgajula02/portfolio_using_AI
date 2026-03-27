"use client";

import { Mail, MapPin, Github, Linkedin, ExternalLink, Award, Briefcase, GraduationCap, Code, Terminal, Send, Activity, User } from "lucide-react";
import portfolioData from "./data.json";

export default function Home() {
  const { personalInfo, intro, experience, projects, skills, education, achievements } = portfolioData;

  return (
    <div className="min-h-screen bg-[#121212] font-sans pb-20">
      
      {/* Navbar/Header Spacing if needed */}
      <div className="h-12 w-full"></div>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-16 md:pt-24 pb-12">
        <div className="flex flex-col gap-6">
          <div className="w-16 h-16 rounded-material-lg bg-[#004A77] flex items-center justify-center mb-4">
            <Activity className="w-8 h-8 text-[#C2E7FF]" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[#E3E3E3] tracking-tight leading-tight max-w-4xl">
            {intro.headline}
          </h1>
          <div className="flex flex-col md:flex-row gap-4 mt-6 items-start md:items-center">
            <p className="text-xl md:text-2xl font-medium text-[#A8C7FA]">
              {personalInfo.title}
            </p>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#333333]"></span>
            <div className="flex items-center gap-2 text-[#C4C7C5]">
              <MapPin className="w-5 h-5" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>

        {/* Contact Links Array */}
        <div className="flex flex-wrap gap-4 mt-12">
          {[
            { icon: Mail, text: "Email", href: `mailto:${personalInfo.email}` },
            { icon: Github, text: "GitHub", href: `https://${personalInfo.github}` },
            { icon: Linkedin, text: "LinkedIn", href: `https://${personalInfo.linkedin}` }
          ].map((contact, idx) => (
            <a
              key={idx}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-material-lg bg-[#1E1E1E] text-[#E3E3E3] border border-[#333333] hover:bg-[#282828] hover:border-[#4A4458] transition-all"
            >
              <contact.icon className="w-5 h-5 text-[#A8C7FA]" />
              <span className="font-medium">{contact.text}</span>
            </a>
          ))}
          <a
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center gap-2 px-6 py-3 rounded-material-lg bg-[#A8C7FA] text-[#004A77] font-semibold hover:bg-[#C2E7FF] transition-all"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Resume</span>
          </a>
        </div>
      </section>

      {/* About Me Section */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-[#1E1E1E] rounded-material-lg p-8 md:p-12 border border-[#333333] hover:border-[#4A4458] transition-colors material-elevation-1 hover:material-elevation-2">
          <div className="flex items-center gap-4 mb-6">
            <User className="w-8 h-8 text-[#D0BCFF]" />
            <h2 className="text-3xl font-bold text-[#E3E3E3]">About Me</h2>
          </div>
          <p className="text-lg text-[#C4C7C5] leading-relaxed">
            {intro.aboutMe}
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 rounded-2xl bg-[#4A4458]">
            <Briefcase className="w-6 h-6 text-[#E8DEF8]" />
          </div>
          <h2 className="text-3xl font-bold text-[#E3E3E3]">Experience</h2>
        </div>

        <div className="space-y-6">
          {experience.map((job, idx) => (
            <div
              key={idx}
              className="bg-[#1E1E1E] rounded-material-lg p-8 border border-[#333333] hover:border-[#4A4458] hover:bg-[#282828] transition-all material-elevation-1 hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#E3E3E3] mb-1">{job.title}</h3>
                  <p className="text-lg font-medium text-[#A8C7FA] mb-1">{job.company}</p>
                  <p className="text-sm font-medium text-[#C4C7C5]">{job.location}</p>
                </div>
                <div className="px-4 py-1.5 rounded-full bg-[#004A77] border border-[#004A77] self-start">
                  <span className="font-semibold text-[#C2E7FF] text-sm">{job.period}</span>
                </div>
              </div>
              <ul className="space-y-4">
                {job.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex gap-4">
                     <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D0BCFF] flex-shrink-0"></span>
                    <span className="text-base text-[#C4C7C5] leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 rounded-2xl bg-[#004A77]">
            <Code className="w-6 h-6 text-[#C2E7FF]" />
          </div>
          <h2 className="text-3xl font-bold text-[#E3E3E3]">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-[#1E1E1E] rounded-material-lg p-8 border border-[#333333] hover:border-[#A8C7FA] transition-all hover:-translate-y-1 material-elevation-1 hover:material-elevation-2"
            >
              <div className="mb-4">
                <span className="text-xs font-bold text-[#D0BCFF] tracking-wider uppercase">{project.period}</span>
              </div>
              <h3 className="text-2xl font-bold text-[#E3E3E3] mb-3">{project.name}</h3>
              <p className="text-sm font-medium text-[#82C896] mb-6">{project.tech}</p>
              
              <ul className="space-y-3 mt-auto">
                {project.description.map((desc, dIdx) => (
                  <li key={dIdx} className="flex gap-3 text-sm text-[#C4C7C5]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#333333] flex-shrink-0"></span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 rounded-2xl bg-[#282828] border border-[#333333]">
            <Terminal className="w-6 h-6 text-[#82C896]" />
          </div>
          <h2 className="text-3xl font-bold text-[#E3E3E3]">Technical Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items], idx) => (
            <div
              key={idx}
              className="bg-[#1E1E1E] rounded-material-lg p-6 md:p-8 border border-[#333333] hover:border-[#82C896] transition-all"
            >
              <h3 className="text-xl font-bold text-[#E3E3E3] mb-6">{category}</h3>
              <div className="flex flex-wrap gap-2.5">
                {items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-2 rounded-xl bg-[#282828] border border-[#333333] font-medium text-sm text-[#E3E3E3] hover:bg-[#333333] hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 rounded-2xl bg-[#4A4458]">
            <GraduationCap className="w-6 h-6 text-[#E8DEF8]" />
          </div>
          <h2 className="text-3xl font-bold text-[#E3E3E3]">Education</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-[#1E1E1E] rounded-material-lg p-8 border border-[#333333] hover:border-[#D0BCFF] transition-all"
            >
              <span className="text-sm font-bold text-[#D0BCFF] block mb-3 uppercase tracking-wider">{edu.period}</span>
              <h3 className="text-xl font-bold text-[#E3E3E3] mb-3 leading-snug">{edu.degree}</h3>
              
              <p className="text-base font-medium text-[#A8C7FA] mb-1">{edu.school}</p>
              <p className="text-sm font-medium text-[#C4C7C5] mb-4">{edu.location}</p>
              
              {edu.gpa && (
                <div className="inline-block px-3 py-1 rounded-lg bg-[#282828] border border-[#333333] mb-6">
                  <span className="text-sm font-semibold text-[#E3E3E3]">GPA: {edu.gpa}</span>
                </div>
              )}
              
              <div>
                <p className="text-xs font-bold text-[#C4C7C5] mb-3 uppercase tracking-wider">Key Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.slice(0, 5).map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-3 py-1.5 rounded-lg bg-[#282828] border border-[#333333] text-xs font-medium text-[#C4C7C5]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 rounded-2xl bg-[#004A77]">
            <Award className="w-6 h-6 text-[#C2E7FF]" />
          </div>
          <h2 className="text-3xl font-bold text-[#E3E3E3]">Achievements</h2>
        </div>

        <div className="space-y-4">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className="bg-[#1E1E1E] rounded-material-lg p-6 md:p-8 border border-[#333333] hover:border-[#A8C7FA] transition-all hover:bg-[#282828]"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#E3E3E3] mb-3">{achievement.title}</h3>
                  <p className="text-base text-[#C4C7C5] leading-relaxed">{achievement.description}</p>
                </div>
                <div className="px-4 py-2 rounded-xl bg-[#282828] border border-[#333333] self-start md:self-center shrink-0">
                  <span className="font-bold text-[#A8C7FA]">{achievement.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 mb-12">
        <div className="bg-[#A8C7FA] rounded-material-lg p-8 md:p-12 border border-[#C2E7FF] text-[#004A77] material-elevation-2">
          <div className="flex items-center gap-4 mb-6">
            <Send className="w-8 h-8 text-[#004A77]" />
            <h2 className="text-3xl md:text-4xl font-bold">Let's build something amazing</h2>
          </div>
          <p className="text-lg font-medium mb-10 max-w-2xl text-[#004A77]/80">
            I'm always open to discussing robust infrastructure solutions or scalable software developments. Feel free to reach out.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6">
             <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#004A77] text-white font-bold hover:bg-[#003B61] hover:-translate-y-1 transition-all"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-8 border-t border-[#333333]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#C4C7C5] font-medium text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. Elegant & Robust.
          </p>
          <div className="flex items-center gap-4">
            <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="text-[#C4C7C5] hover:text-[#A8C7FA] transition-colors">
              <Github className="w-5 h-5"/>
            </a>
            <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-[#C4C7C5] hover:text-[#A8C7FA] transition-colors">
              <Linkedin className="w-5 h-5"/>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}