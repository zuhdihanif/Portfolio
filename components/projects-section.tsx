"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import BaseImage from "@/components/baseimage"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Rupiah Banknotes Detection",
    description:
      "RupiahBankNotes is a deep learning-based image classification project for recognizing Indonesian Rupiah banknote denominations. It compares The Faster R-CNN and YOLOv5 architectures implemented with Pytocrh. The model is trained on a labeled dataset of banknote images across multiple classes (denominations) and includes preprocessing steps such as image resizing and normalization.",
    image: "/rupiahbanknotes.png",
    tags: ["Python", "OpenCV", "Pytorch", "YOLO", "Deep Learning"],
    // demoLink: "#",
    githubLink: "https://github.com/AndiDemon-Lab/RupiahBankNotes",
  },
  {
    title: "Face Detection and Recognition",
    description:
      "Developed a Face Detection CNN project capable of detecting faces and classifying gender, emotion, and age. Implemented CNN for face detection and multi-task classification, including data preprocessing, model training, and evaluation. Designed to demonstrate deep learning techniques in computer vision for real-time facial analysis",
    image: "/facial-recognition-software.jpg",
    tags: ["Python", "OpenCV", "Tensorflow", "CNN", "Deep Learning"],
    githubLink: "https://github.com/zuhdihanif/FaceDetectionCNN",
  },
  {
    title: "Garbage Classification",
    description:
      "This repository presents a Convolutional Neural Network (CNN) implementation for classifying garbage. The dataset employed in this project was created through manual scraping and comprises five common recyclable waste types. The CNN model achieves an accuracy of 92% in distinguishing between these waste categories.",
    image: "/garbage.png",
    tags: ["Python", "OpenCV", "Tensorflow", "CNN", "Deep Learning"],
    githubLink: "https://github.com/zuhdihanif/garbage-classification",
  },
  {
    title: "Monte Carlo Simulation for Financial Risk Analysis",
    description:
      "This project implements a Monte Carlo simulation to analyze financial risks. It generates random scenarios based on historical data to estimate potential future outcomes, helping in risk assessment and decision-making. The simulation is designed to model various financial instruments and market conditions.",
    image: "/graph.jpg",
    tags: ["Python", "Machine Learning", "Time Series Analysis"],
    githubLink: "https://github.com/zuhdihanif/ANN-for-Monte-Carlo-Forecasting",
  },
]

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Projects</h2>
          <p className="section-subheading">Some of my recent work</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative"
            >
              <Card className="h-full overflow-hidden bg-secondary/5 border-primary/20 hover:border-primary/50 transition-all">
                <div className="relative h-48 overflow-hidden">
                  <BaseImage
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      hoveredIndex === index ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                </div>

                <CardHeader className="pb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </CardHeader>

                <CardContent className="pb-2">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-3">
                  {/* <Button size="sm" variant="default" asChild>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button> */}
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
