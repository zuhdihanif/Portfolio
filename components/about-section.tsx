"use client"

import { motion } from "framer-motion"
import BaseImage from "@/components/baseimage"
import { Card, CardContent } from "@/components/ui/card"
import { ChartBarBigIcon, CircleAlert, LineChart} from "lucide-react"

const roleCards = [
  {
    title: "ML Engineer",
    icon: <LineChart className="h-5 w-5" />,
    description: "Building ML models and pipelines",
  },
  {
    title: "Data Scientist",
    icon: <ChartBarBigIcon className="h-5 w-5" />,
    description: "Data analysis and visualization",
  },
  {
    title: "Risk Management",
    icon: <CircleAlert className="h-5 w-5" />,
    description: "Identifying and mitigating risks",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">About Me</h2>
          <p className="section-subheading">Get to know me better</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-2xl border-2 border-primary/20 glow-border">
              <BaseImage
                src="FotoPutih_MuhammadZuhdiHanif.jpg"
                alt="Muhammad Zuhdi Hanif"
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-lg mb-6 text-justify">
            A fresh graduate of Informatics Engineering from Telkom University Purwokerto with a strong interest in Artificial Intelligence, Machine Learning, Computer Vision, Risk Management, and Data Science. Experienced as Data Intelligence Intern at PT Astra International and Risk Management Intern at Bank Indonesia
            </p>
            <p className="text-lg mb-8 text-justify">
              I am passionate about leveraging data and technology to create meaningful solutions and make an impact in the fields of AI, data science, and risk management.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {roleCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-secondary/10 border-primary/20 hover:border-primary/50 transition-colors">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-md text-primary">{card.icon}</div>
                      <div>
                        <h3 className="font-bold text-sm">{card.title}</h3>
                        <p className="text-xs text-muted-foreground">{card.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
