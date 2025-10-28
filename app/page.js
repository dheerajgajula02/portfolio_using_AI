'use client';

import { Mail, MapPin, Github, Linkedin, ExternalLink, Award, Briefcase, GraduationCap, Code, Database, Cloud, Terminal, Send } from "lucide-react";

export default function Home() {
  const personalInfo = {
    name: "Dheeraj Gajula",
    title: "Software & Network Engineer",
    email: "dheeraj.gajula@colorado.edu",
    location: "Boulder, CO",
    portfolio: "portfolio",
    linkedin: "www.linkedin.com/in/dheeraj-gajula-8776381ba",
    github: "github.com/dheerajgajula02"
  };

  const experience = [
    {
      title: "Software Engineer – 1",
      company: "Versa Networks",
      location: "Bangalore, India",
      period: "June 2024 – Aug 2025",
      highlights: [
        "Developed REST APIs in GoLang and Cassandra serving 3000+ reqs/s with metrics through Prometheus and Grafana dashboards",
        "Performed Quantitative and Qualitative analysis of virus total malicious feed data building data pipelines using Python and BigQuery with Mathematical Reinforcement model",
        "Containerized multiple services using Docker and Kubernetes and deployed them in GCP"
      ]
    },
    {
      title: "Software Engineer – Intern",
      company: "Versa Networks",
      location: "Bangalore, India",
      period: "Feb 2024 – June 2024",
      highlights: [
        "Automated device usage tracking, reduced billing time from 7 days to under an hour",
        "Analyzed inconsistent logs, built anomaly detection systems and StateMachines to track device states",
        "Used MongoDB and Python Data modelling to process hierarchical data with insights on Prometheus and Grafana",
        "Used Flask and FastAPI for services, Docker and Docker compose for deployment"
      ]
    }
  ];

  const education = [
    {
      degree: "Master's in Computer Science",
      school: "University of Colorado – Boulder",
      location: "Boulder, CO",
      period: "Aug 2025 – May 2027",
      coursework: ["Enterprise Networks", "Network Systems", "Machine Learning"]
    },
    {
      degree: "Bachelor's in Computer Science and Engineering",
      school: "Dayanada Sagar College of Engineering",
      location: "Bangalore, India",
      period: "Nov 2020 – May 2024",
      gpa: "3.76/4.0",
      coursework: ["Data Structures & Algorithms", "Database Systems", "Operating Systems", "Computer Networks", "Cloud Computing", "Machine Learning", "Deep Learning", "NLP", "Computer Vision"]
    }
  ];

  const projects = [
    {
      name: "Network Applications",
      tech: "C++, Network Programming",
      period: "Sept 2025 – Present",
      description: [
        "Developed multi-threaded TCP/UDP-based HTTP Web Server in C++ with GET/HEAD/POST request parsing and UDP client/server file transfer system with FTP-like commands",
        "Implemented persistent connections with pipelining and timeout handling, serving multiple file types with correct Content-Type headers",
        "Built concurrent request processing using threading/forking for HTTP with reliable transfer mechanisms (Stop-and-Wait, Go-Back-N) for UDP"
      ]
    },
    {
      name: "Enterprise Network Lab",
      tech: "STP, DHCP Server, EIGRP, RIP, Wireshark, Wireless, VLANs",
      period: "Sept 2025 – Present",
      description: [
        "Configured Cisco enterprise networks with VLANs, trunking (802.1Q/ISL), VTP, STP/RSTP, and HSRP-based gateway redundancy",
        "Deployed wireless LANs with DHCP, multi-SSID VLAN segmentation; implemented NAT/PAT for Internet, DMZ, and VLAN address translation",
        "Implemented routing protocols (RIP v1/v2, EIGRP, OSPF multi-area) with redistribution, VRF isolation, DR/BDR elections, and summarization"
      ]
    },
    {
      name: "Schizo AI",
      tech: "Python, TensorFlow, Explainable AI",
      period: "2024",
      description: [
        "Presented undergrad thesis at International Conference for Advanced Data Driven Intelligence",
        "Explored explainable AI models like Lime, SHAP, CAM in the context of Schizophrenia diagnosis"
      ]
    }
  ];

  const skills = {
    "Languages": ["GoLang", "Python", "C/C++", "SQL", "Bash"],
    "Frameworks & Database": ["Flask", "FastAPI", "Postgres", "BigQuery", "Cassandra", "MongoDB", "Prometheus", "FireBase"],
    "Developer Tools": ["Git", "Docker", "Kubernetes", "GCP", "Grafana", "AWS", "NGINX", "Hugging Face", "wireshark"],
    "Libraries": ["pandas", "NumPy", "Matplotlib", "TensorFlow", "OpenCV", "scikit-learn", "Seaborn", "NLTK"],
    "Networking": ["TCP/IP", "UDP", "HTTP/HTTPS", "DNS", "DHCP", "BGP", "OSPF", "EIGRP", "RIP", "VLANs", "NAT/PAT", "Sockets", "protocol design"]
  };

  const achievements = [
    {
      title: "Explainable AI in the context of Schizophrenia",
      year: "2024",
      description: "Presented undergrad thesis at International Conference for Advanced Data Driven Intelligence. Built Schizo AI project exploring explainable AI models."
    },
    {
      title: "Smart India Hackathon Winner",
      year: "2022",
      description: "Innovative solutions to save Court's time during hearings. Built project Tenali as backend engineer."
    },
    {
      title: "UNESCO India Africa Hackathon Finalist",
      year: "2023",
      description: "Energy flow optimization. Selected from 200 students from India. Received Best Contributors award."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative bg-[#4B0082] border-b-[4px] border-[#7B3FF2] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-[#7B3FF2] rotate-12"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#7B3FF2] -rotate-6"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="transform -rotate-1">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight drop-shadow-[8px_8px_0px_rgba(123,63,242,1)]">
              {personalInfo.name}
            </h1>
            <div className="inline-block bg-black border-4 border-[#7B3FF2] px-6 py-3 transform rotate-1 shadow-[8px_8px_0px_rgba(123,63,242,0.3)]">
              <p className="text-xl md:text-2xl font-bold text-white">
                {personalInfo.title}
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Mail, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: Github, text: personalInfo.github, href: `https://${personalInfo.github}` },
              { icon: Linkedin, text: "LinkedIn", href: `https://${personalInfo.linkedin}` }
            ].map((contact, idx) => (
              <a
                key={idx}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-black border-4 border-[#7B3FF2] p-4 transform hover:-translate-y-2 hover:shadow-[8px_8px_0px_rgba(123,63,242,1)] transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <contact.icon className="w-6 h-6 text-[#4B0082] group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-sm text-white truncate">{contact.text}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex items-center gap-4 mb-12">
          <Briefcase className="w-10 h-10 text-[#7B3FF2]" />
          <h2 className="text-4xl md:text-5xl font-black text-white transform -rotate-1 drop-shadow-[4px_4px_0px_rgba(123,63,242,0.3)]">
            EXPERIENCE
          </h2>
        </div>

        <div className="space-y-6">
          {experience.map((job, idx) => (
            <div
              key={idx}
              className="bg-black border-4 border-[#7B3FF2] p-6 md:p-8 transform hover:translate-x-2 hover:shadow-[12px_12px_0px_rgba(123,63,242,1)] transition-all duration-200"
              style={{ transform: idx % 2 === 0 ? 'rotate(-0.5deg)' : 'rotate(0.5deg)' }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-2">{job.title}</h3>
                  <p className="text-xl font-bold text-[#7B3FF2]">{job.company}</p>
                  <p className="text-sm font-bold text-gray-400">{job.location}</p>
                </div>
                <div className="inline-block bg-[#4B0082] border-4 border-[#7B3FF2] px-4 py-2 self-start">
                  <span className="font-black text-white text-sm">{job.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mt-6">
                {job.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex gap-3">
                    <span className="text-[#7B3FF2] font-black text-xl flex-shrink-0">▸</span>
                    <span className="text-base font-semibold text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-[#4B0082] border-y-4 border-[#7B3FF2] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <Code className="w-10 h-10 text-white" />
            <h2 className="text-4xl md:text-5xl font-black text-white transform rotate-1 drop-shadow-[4px_4px_0px_rgba(123,63,242,1)]">
              PROJECTS
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-black border-4 border-[#7B3FF2] p-6 transform hover:-translate-y-2 hover:shadow-[12px_12px_0px_rgba(123,63,242,1)] transition-all duration-200"
                style={{ transform: `rotate(${(idx % 3 - 1) * 0.8}deg)` }}
              >
                <div className="bg-[#4B0082] border-4 border-[#7B3FF2] px-3 py-1 inline-block mb-4 transform -rotate-1">
                  <span className="text-xs font-black text-white">{project.period}</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">{project.name}</h3>
                <p className="text-sm font-bold text-[#7B3FF2] mb-4">{project.tech}</p>
                <ul className="space-y-2">
                  {project.description.map((desc, dIdx) => (
                    <li key={dIdx} className="flex gap-2">
                      <span className="text-[#7B3FF2] font-black flex-shrink-0">•</span>
                      <span className="text-sm font-semibold text-gray-300">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex items-center gap-4 mb-12">
          <Terminal className="w-10 h-10 text-[#7B3FF2]" />
          <h2 className="text-4xl md:text-5xl font-black text-white transform -rotate-1 drop-shadow-[4px_4px_0px_rgba(123,63,242,0.3)]">
            TECHNICAL SKILLS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items], idx) => (
            <div
              key={idx}
              className="bg-black border-4 border-[#7B3FF2] p-6 transform hover:translate-x-2 hover:shadow-[8px_8px_0px_rgba(123,63,242,1)] transition-all duration-200"
              style={{ transform: `rotate(${(idx % 2 === 0 ? -0.5 : 0.5)}deg)` }}
            >
              <div className="bg-[#4B0082] border-4 border-[#7B3FF2] px-4 py-2 inline-block mb-4 transform rotate-1">
                <h3 className="text-xl font-black text-white">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="bg-black border-3 border-[#7B3FF2] px-3 py-1 font-bold text-sm text-white hover:bg-[#4B0082] hover:text-white transition-colors duration-200 cursor-default"
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
      <section className="bg-[#1a0033] border-y-4 border-[#7B3FF2] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <GraduationCap className="w-10 h-10 text-white" />
            <h2 className="text-4xl md:text-5xl font-black text-white transform rotate-1 drop-shadow-[4px_4px_0px_rgba(123,63,242,1)]">
              EDUCATION
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="bg-black border-4 border-[#7B3FF2] p-6 md:p-8 transform hover:-translate-y-2 hover:shadow-[12px_12px_0px_rgba(123,63,242,1)] transition-all duration-200"
                style={{ transform: `rotate(${(idx % 2 === 0 ? -0.8 : 0.8)}deg)` }}
              >
                <div className="bg-[#4B0082] border-4 border-[#7B3FF2] px-3 py-1 inline-block mb-4">
                  <span className="text-sm font-black text-white">{edu.period}</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">{edu.degree}</h3>
                {edu.gpa && (
                  <div className="inline-block bg-[#4B0082] border-3 border-[#7B3FF2] px-3 py-1 mb-2">
                    <span className="text-sm font-black text-white">GPA: {edu.gpa}</span>
                  </div>
                )}
                <p className="text-lg font-bold text-[#7B3FF2] mb-1">{edu.school}</p>
                <p className="text-sm font-bold text-gray-400 mb-4">{edu.location}</p>
                <div className="mt-4">
                  <p className="text-xs font-black text-gray-500 mb-2">KEY COURSEWORK:</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.slice(0, 6).map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="bg-black border-2 border-[#7B3FF2] px-2 py-1 text-xs font-bold text-white"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex items-center gap-4 mb-12">
          <Award className="w-10 h-10 text-[#7B3FF2]" />
          <h2 className="text-4xl md:text-5xl font-black text-white transform -rotate-1 drop-shadow-[4px_4px_0px_rgba(123,63,242,0.3)]">
            ACHIEVEMENTS
          </h2>
        </div>

        <div className="space-y-6">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className="bg-black border-4 border-[#7B3FF2] p-6 md:p-8 transform hover:translate-x-2 hover:shadow-[12px_12px_0px_rgba(123,63,242,1)] transition-all duration-200"
              style={{ transform: `rotate(${((idx % 3) - 1) * 0.5}deg)` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-2">{achievement.title}</h3>
                  <p className="text-base font-semibold text-gray-300">{achievement.description}</p>
                </div>
                <div className="bg-[#4B0082] border-4 border-[#7B3FF2] px-4 py-2 self-start">
                  <span className="font-black text-white text-xl">{achievement.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex items-center gap-4 mb-12">
          <Send className="w-10 h-10 text-[#7B3FF2]" />
          <h2 className="text-4xl md:text-5xl font-black text-white transform -rotate-1 drop-shadow-[4px_4px_0px_rgba(123,63,242,0.3)]">
            CONTACT ME
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-black border-4 border-[#7B3FF2] p-6 transform -rotate-1 hover:shadow-[8px_8px_0px_rgba(123,63,242,1)] transition-all duration-200">
              <h3 className="text-2xl font-black text-white mb-4">GET IN TOUCH</h3>
              <p className="text-base font-semibold text-gray-300 mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-4">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 group">
                  <div className="bg-[#4B0082] border-3 border-[#7B3FF2] p-3 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-bold text-white">{personalInfo.email}</span>
                </a>
                
                <div className="flex items-center gap-3">
                  <div className="bg-[#4B0082] border-3 border-[#7B3FF2] p-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-bold text-white">{personalInfo.location}</span>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href={`https://${personalInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#4B0082] border-3 border-[#7B3FF2] p-3 hover:bg-[#7B3FF2] hover:border-[#4B0082] transition-colors"
                >
                  <Github className="w-6 h-6 text-white" />
                </a>
                <a
                  href={`https://${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#4B0082] border-3 border-[#7B3FF2] p-3 hover:bg-[#7B3FF2] hover:border-[#4B0082] transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black border-4 border-[#7B3FF2] p-6 md:p-8 transform rotate-1 hover:shadow-[8px_8px_0px_rgba(123,63,242,1)] transition-all duration-200">
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const subject = formData.get('subject');
              const message = formData.get('message');
              window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
            }}>
              <div>
                <label className="block text-sm font-black text-white mb-2">YOUR NAME</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border-4 border-[#7B3FF2] bg-black text-white p-3 font-bold focus:outline-none focus:border-[#4B0082] transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-black text-white mb-2">YOUR EMAIL</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border-4 border-[#7B3FF2] bg-black text-white p-3 font-bold focus:outline-none focus:border-[#4B0082] transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-black text-white mb-2">SUBJECT</label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full border-4 border-[#7B3FF2] bg-black text-white p-3 font-bold focus:outline-none focus:border-[#4B0082] transition-colors"
                  placeholder="Let's work together!"
                />
              </div>

              <div>
                <label className="block text-sm font-black text-white mb-2">MESSAGE</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  className="w-full border-4 border-[#7B3FF2] bg-black text-white p-3 font-bold focus:outline-none focus:border-[#4B0082] transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#4B0082] border-4 border-[#7B3FF2] px-6 py-4 font-black text-white text-lg hover:bg-[#7B3FF2] hover:border-[#4B0082] transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_rgba(123,63,242,1)] transition-all duration-200"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a0033] border-t-4 border-[#7B3FF2] py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block bg-black border-4 border-[#7B3FF2] px-8 py-4 transform -rotate-1 shadow-[8px_8px_0px_rgba(123,63,242,1)]">
            <p className="text-2xl font-black text-white">LET'S BUILD SOMETHING AMAZING</p>
          </div>
          <p className="mt-8 text-white font-bold">
            © 2025 {personalInfo.name}. Frontend built with AI 🤠.
          </p>
        </div>
      </footer>
    </div>
  );
}