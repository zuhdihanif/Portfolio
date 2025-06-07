"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

export default function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Education</h2>
          <p className="section-subheading">My academic background</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-secondary/5 border-primary/20 hover:border-primary/50 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-md text-primary">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Bachelor of Informatics Engineering</h3>
                    <div className="flex items-center mt-1 text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>2020 - 2024</span>
                    </div>
                    <p className="mt-3">Telkom University</p>
                    <p className="mt-2 text-muted-foreground">
                      Studied computer science fundamentals, software engineering, data structures, algorithms, and
                      specialized in data science and machine learning.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
