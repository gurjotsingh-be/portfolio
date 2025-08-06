'use client'

import { ArrowRight, Github, Linkedin, Mail, Download, Code, Database, Shield, Cpu, MessageSquare } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from 'react'

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleResumeDownload = () => {
    // Create a blob with the resume content and trigger download
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'resume.pdf'
    link.click()
  }

  const projects = [
  {
    title: "Distributed Library Management System",
    description: "Multi-user library management system using Java OOP principles with MySQL database backend, implementing user authentication, book inventory tracking, and automated fine calculation with complete CRUD operations. Integrated network security protocols and multi-threading for concurrent user access.",
    technologies: ["Java", "MySQL", "RESTful API", "Multi-threading", "OOP", "Network Security"],
    icon: Database,
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "Smart Campus Network Security Monitor",
    description: "Network traffic analysis tool using Python and packet capture libraries to detect suspicious activities, implementing custom data structures (hash tables, priority queues) for efficient traffic pattern recognition and anomaly detection with real-time dashboard.",
    technologies: ["Python", "Packet Capture", "Hash Tables", "Priority Queues", "Flask", "Network Security"],
    icon: Shield,
    gradient: "from-emerald-500 to-green-600",
  },
  {
    title: "Optimized E-Commerce Database with Recommendation Engine",
    description: "Scalable e-commerce database system with advanced SQL optimization techniques, implementing complex joins, indexing strategies, and stored procedures to handle 10,000+ concurrent transactions. Developed intelligent product recommendation algorithm using graph data structures.",
    technologies: ["SQL", "Graph Algorithms", "Dynamic Programming", "Database Optimization", "Caching"],
    icon: Code,
    gradient: "from-green-600 to-teal-600",
  },
  {
    title: "Multi-Process Task Scheduler Simulation",
    description: "Operating system process scheduler simulator in C++ implementing multiple scheduling algorithms (FCFS, SJF, Round Robin) with memory management simulation and process synchronization mechanisms. Features comprehensive performance analysis dashboard.",
    technologies: ["C++", "OS Concepts", "Scheduling Algorithms", "Memory Management", "Performance Analysis"],
    icon: Cpu,
    gradient: "from-teal-500 to-green-500",
  },
  {
    title: "Secure Social Media Platform with Real-time Messaging",
    description: "Full-stack social media application using object-oriented design patterns, implementing secure user authentication, post management, and real-time chat functionality with encrypted message transmission. Integrated advanced data structures for efficient content delivery.",
    technologies: ["Full-Stack", "OOP", "Real-time Messaging", "Encryption", "Database Design", "Version Control"],
    icon: MessageSquare,
    gradient: "from-emerald-600 to-green-700",
  }
]

  const skills = [
    "JavaScript", "Python", "Java", "C", "C++", "MATLAB", "HTML5", "CSS3",
    "React", "Next.js", "Django", "Flask", "Spring Boot", "Tailwind CSS",
    "MySQL", "Oracle Database", "MongoDB", "Redis", "Node.js", "AWS", "Docker",
    "Git", "GitHub", "Linux", "TensorFlow", "PyTorch", "scikit-learn", "pandas", "NumPy"
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease-out'
          }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-600/10 to-teal-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        {/* Matrix-like grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
            {Array.from({ length: 400 }).map((_, i) => (
              <div key={i} className="border border-green-500/20"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-green-500/20 bg-black/80 backdrop-blur-xl supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-green-500/25">
                <span className="text-black font-bold text-sm">GS</span>
              </div>
              <span className="font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Portfolio</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-8">
              <Link href="#about" className="text-sm font-medium transition-all hover:text-green-400 hover:scale-105 relative group text-gray-300">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="#projects" className="text-sm font-medium transition-all hover:text-green-400 hover:scale-105 relative group text-gray-300">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="#contact" className="text-sm font-medium transition-all hover:text-green-400 hover:scale-105 relative group text-gray-300">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container px-4 py-24 md:py-32 relative">
        <div className={`flex flex-col items-center text-center space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-6">
            <div className="relative">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in text-white">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent animate-gradient bg-300% bg-gradient-to-r">
                  Gurjot Singh
                </span>
              </h1>
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-lg -z-10 animate-pulse"></div>
            </div>
            <p className="mx-auto max-w-[700px] text-lg text-gray-300 md:text-xl leading-relaxed animate-fade-in-up delay-300">
              Computer Science and Engineering student with expertise in{" "}
              <span className="text-green-400 font-semibold">full-stack development</span>,{" "}
              <span className="text-emerald-400 font-semibold">machine learning</span>, and{" "}
              <span className="text-teal-400 font-semibold">cybersecurity</span>. 
              Passionate about solving complex technical challenges and contributing to innovative software development.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500">
            <Button size="lg" asChild className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl shadow-green-500/25 text-black font-semibold">
              <Link href="#projects">
                View My Work 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleResumeDownload}
              className="group border-2 border-green-500 hover:border-emerald-400 hover:text-emerald-400 transform hover:scale-105 transition-all duration-300 text-green-400 hover:bg-green-500/10"
            >
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </div>
          <div className="flex items-center space-x-6 animate-fade-in-up delay-700">
            <Button variant="ghost" size="icon" asChild className="group hover:bg-green-500/10 transform hover:scale-110 transition-all duration-300 text-gray-400">
              <Link href="https://github.com/gurjotsingh-be" target="_blank">
                <Github className="h-5 w-5 group-hover:text-green-400" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="group hover:bg-green-500/10 transform hover:scale-110 transition-all duration-300 text-gray-400">
              <Link href="https://linkedin.com/in/gurjotsingh-be" target="_blank">
                <Linkedin className="h-5 w-5 group-hover:text-green-400" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="group hover:bg-emerald-500/10 transform hover:scale-110 transition-all duration-300 text-gray-400">
              <Link href="mailto:gurjotsingh.2026@proton.me">
                <Mail className="h-5 w-5 group-hover:text-emerald-400" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container px-4 py-24 relative">
        <div className="mx-auto max-w-4xl text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-left">
              <p className="text-lg text-gray-300 leading-relaxed">
                I am a Computer Science and Engineering student at{" "}
                <span className="text-green-400 font-semibold">Chandigarh College of Engineering and Technology</span>{" "}
                with expertise in full-stack development, machine learning, and cybersecurity. My experience includes 
                internships at <span className="text-emerald-400 font-semibold">DRDO</span> where I developed secure communication systems and network monitoring tools.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My skills span modern programming languages, frameworks, and databases, with hands-on experience in 
                secure communication systems, AI-based solutions, and complex software architecture. I'm passionate 
                about solving technical challenges and contributing to innovative software development.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20 shadow-lg shadow-green-500/10">
                <h3 className="text-xl font-semibold mb-4 text-center text-white">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skills.slice(0, 12).map((skill, index) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-sm hover:scale-105 transition-transform cursor-default animate-fade-in-up bg-green-500/10 text-green-400 hover:bg-green-500/20 border border-green-500/30"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="text-center mt-4">
                  <span className="text-sm text-gray-400">+ {skills.length - 12} more technologies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container px-4 py-24 relative">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
            <p className="mx-auto max-w-[700px] text-gray-300 text-lg">
              Here are some of my recent projects that showcase my skills and experience.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
              {projects.slice(0, 3).map((project, index) => {
                const IconComponent = project.icon
                return (
                  <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-500/20 bg-gray-900/50 backdrop-blur-sm animate-fade-in-up hover:border-green-400/40 hover:shadow-green-500/20" style={{ animationDelay: `${index * 200}ms` }}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    <CardHeader className="relative">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} text-black group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <CardTitle className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-green-400 group-hover:to-emerald-400 transition-all duration-300 text-white">
                          {project.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-gray-300">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 relative">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={tech} 
                            variant="outline" 
                            className="text-xs hover:scale-105 transition-transform cursor-default group-hover:border-green-400/60 border-green-500/30 text-green-400 hover:bg-green-500/10"
                            style={{ animationDelay: `${techIndex * 50}ms` }}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
            <div className="grid gap-8 md:grid-cols-2 justify-center max-w-5xl">
              {projects.slice(3).map((project, index) => {
                const IconComponent = project.icon
                return (
                  <Card key={index + 3} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-500/20 bg-gray-900/50 backdrop-blur-sm animate-fade-in-up hover:border-green-400/40 hover:shadow-green-500/20" style={{ animationDelay: `${(index + 3) * 200}ms` }}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    <CardHeader className="relative">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} text-black group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <CardTitle className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-green-400 group-hover:to-emerald-400 transition-all duration-300 text-white">
                          {project.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-gray-300">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 relative">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={tech} 
                            variant="outline" 
                            className="text-xs hover:scale-105 transition-transform cursor-default group-hover:border-green-400/60 border-green-500/30 text-green-400 hover:bg-green-500/10"
                            style={{ animationDelay: `${techIndex * 50}ms` }}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container px-4 py-24 relative">
        <div className="mx-auto max-w-2xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm always interested in new opportunities and collaborations.
            Feel free to reach out if you'd like to work together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl shadow-green-500/25 text-black font-semibold">
              <Link href="mailto:gurjotsingh.2026@proton.me">
                <Mail className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Send Email
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="group border-2 border-green-500 hover:border-emerald-400 hover:text-emerald-400 transform hover:scale-105 transition-all duration-300 text-green-400 hover:bg-green-500/10">
              <Link href="https://linkedin.com/in/gurjotsingh-be" target="_blank">
                <Linkedin className="mr-2 h-4 w-4 group-hover:text-emerald-400" />
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-500/20 bg-black/80 backdrop-blur-sm">
        <div className="container px-4 py-8">
          <div className="text-center text-sm text-gray-400">
            <p>&copy; 2025 Gurjot Singh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
