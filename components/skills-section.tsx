"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "SQL", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Technologies / Tools",
    skills: ["Git", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Power BI"],
  },
  {
    title: "Core Skills",
    skills: [
      "Data Analysis",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Data Visualization",
      "Risk Assessment",
      "Problem Solving",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Time Management",
      "Adaptability",
      "Collaboration",
      "Critical Thinking",
      "Communication",
      "Leadership",
      "Teamwork",
      "Presentation",
    ],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Skills</h2>
          <p className="section-subheading">Technologies and expertise I've mastered</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-secondary/10 border-primary/20 hover:border-primary/50 transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4 text-primary">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="bg-secondary/20 text-sm px-3 py-1 rounded-full"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
