"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Building } from "lucide-react"

const experiences = [
  {
    role: "Data Intelligence Intern",
    company: "PT Astra International Tbk.",
    duration: "Mar 2025 - May 2025",
    description:
      "Contributed to data engineering and visualization projects using Power BI. Supported AI integration for lead generation via LLMs and worked as a Data Engineer on a chatbot project by building data pipelines and preparing data from Google BigQuery.",
    skills: ["Python", "SQL", "Power BI", "Data Engineering", "Machine Learning", "LLMs", "Project Management"],
  },
  {
    role: "Risk Management Intern",
    company: "Bank Indonesia",
    duration: "Jul 2024 - Sep 2024",
    description:
      "Conducted risk analysis for national payment and data center projects. Identified operational, governance, and financial risks, and developed a time series forecasting model with high accuracy to support strategic decision-making.",
    skills: ["Risk Analysis & Assessment", "Root Cause Analysis", "Strategic Risk Mitigation", "Regulatory & Governance Insight", "Communication & Reporting"],
  },
  {
    role: "Labroratory Assistant",
    company: "Telkom University",
    duration: "Feb 2024 - Jun 2024",
    description:
      "Assisted in teaching the Computer Vision course, developed practical learning modules, and supported curriculum improvements through collaboration with lecturers.",
    skills: ["Python (OpenCV, Pytorch, YOLO)","Educational Support & Instruction"],
  },
  {
    role: "Mentee – Artificial Intelligence Bootcamp",
    company: "Startup Campus - MSIB",
    duration: "Feb 2023 - Jun 2023",
    description:
      "Completed intensive training in AI and Computer Vision, covering Python, Data Science, Machine Learning, and Deep Learning. Final project received a high evaluation score.",
    skills: ["Python", "Data Science", "Machine Learning", "Deep Learning", "Computer Vision", "Project Management"],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Experience</h2>
          <p className="section-subheading">My professional journey</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary/30"></div>

            {/* Experience cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 md:gap-0`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-primary top-6 z-10"></div>

                  {/* Date for mobile */}
                  <div className="md:hidden flex items-center mb-3 pl-10">
                    <CalendarDays className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm text-muted-foreground">{exp.duration}</span>
                  </div>

                  {/* Card */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <Card className="bg-secondary/5 border-primary/20 hover:border-primary/50 transition-all hover:shadow-md">
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-lg">{exp.role}</h3>

                          {/* Date for desktop */}
                          <div className="hidden md:flex items-center">
                            <CalendarDays className="h-4 w-4 text-primary mr-2" />
                            <span className="text-sm text-muted-foreground">{exp.duration}</span>
                          </div>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Building className="h-4 w-4 mr-2" />
                          <span>{exp.company}</span>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <p className="text-sm mb-3">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="bg-primary/10 text-primary hover:bg-primary/20"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
