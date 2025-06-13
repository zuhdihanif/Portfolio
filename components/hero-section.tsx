"use client"

import { motion } from "framer-motion"
import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-16 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 glow-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Muhammad Zuhdi Hanif
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Data Scientist · Risk Management
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button size="lg" className="rounded-full" asChild>
              <a href="#projects">View Projects</a>
            </Button>

            <Button variant="outline" size="lg" className="rounded-full" asChild>
              <a href="Resume_Muhammad Zuhdi Hanif.pdf" download>
                <FileText className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <a href="#about" className="flex flex-col items-center text-center">
            <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
            <div className="w-5 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
              <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-bounce"></div>
            </div>
          </a>
        </motion.div> */}
        <motion.div
          className="absolute bottom-10 left-0 right-0 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <a href="#about" className="flex flex-col items-center text-center">
            <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
            <div className="w-5 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
              <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-bounce"></div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
