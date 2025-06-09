"use client"

"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { MapPin, GraduationCap, Mail, Github, Instagram, Linkedin } from "lucide-react"

export default function ContactSection() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setIsSubmitting(false)
    }, 1500)

    // In a real application, you would use a service like EmailJS or a server action
    // Example with EmailJS:
    // await emailjs.send(
    //   "service_id",
    //   "template_id",
    //   formData,
    //   "user_id"
    // )
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      label: "Location",
      value: "Brebes, 52265",
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      label: "Email",
      value: "muhammadzuhdihanif@gmail.com",
      link: "mailto:muhammadzuhdihanif@gmail.com",
    },
    /*{
      icon: <Phone className="h-5 w-5 text-primary" />,
      //label: "Phone",
      //value: "+1 (234) 567-8901",
      //link: "tel:+12345678901",
    },*/
    {
      icon: <Github className="h-5 w-5 text-primary" />,
      label: "GitHub",
      value: "github.com/zuhdihanif",
      link: "https://github.com/zuhdihanif",
    },
    {
      icon: <GraduationCap className="h-5 w-5 text-primary" />,
      label: "Google Scholar",
      value: "scholar.google.com",
      link: "https://scholar.google.com/citations?user=GjLGWeMAAAAJ&hl=id",
    },
    {
      icon: <Instagram className="h-5 w-5 text-primary" />,
      label: "Instagram",
      value: "instagram.com/emzieich",
      link: "https://instagram.com/emzieich",
    },
    {
      icon: <Linkedin className="h-5 w-5 text-primary" />,
      label: "LinkedIn",
      value: "linkedin.com/in/mzuhdihanif",
      link: "https://linkedin.com/in/zuhdihanif",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Contact Me</h2>
          <p className="section-subheading">Let's get in touch</p>
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full max-w-2xl"
          >
            <Card className="bg-secondary/10 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-center">Contact Information</h3>

                <div className="space-y-6 max-w-md mx-auto">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <div className="bg-primary/10 p-2 rounded-md mr-4">{item.icon}</div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="font-medium hover:text-primary transition-colors"
                            target={item.link.startsWith("http") ? "_blank" : undefined}
                            rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">Follow me</h4>
                  <div className="flex justify-center space-x-4">
                    <a
                      href="https://github.com/zuhdihanif"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-secondary/20 p-2 rounded-full hover:bg-primary/20 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </a>
                    <a
                      href="https://instagram.com/emzieich"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-secondary/20 p-2 rounded-full hover:bg-primary/20 transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/zuhdihanif"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-secondary/20 p-2 rounded-full hover:bg-primary/20 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
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



// export default function ContactSection() {
//   const { toast } = useToast()
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate form submission
//     setTimeout(() => {
//       toast({
//         title: "Message sent!",
//         description: "Thank you for your message. I'll get back to you soon.",
//       })
//       setFormData({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//       })
//       setIsSubmitting(false)
//     }, 1500)

//     // In a real application, you would use a service like EmailJS or a server action
//     // Example with EmailJS:
//     // await emailjs.send(
//     //   "service_id",
//     //   "template_id",
//     //   formData,
//     //   "user_id"
//     // )
//   }

//   const contactInfo = [
//     {
//       icon: <MapPin className="h-5 w-5 text-primary" />,
//       label: "Location",
//       value: "Brebes, 52265",
//     },
//     {
//       icon: <Mail className="h-5 w-5 text-primary" />,
//       label: "Email",
//       value: "muhammadzuhdihanif@gmail.com",
//       link: "mailto:muhammadzuhdihanif@gmail.com",
//     },
//     /*{
//       icon: <Phone className="h-5 w-5 text-primary" />,
//       //label: "Phone",
//       //value: "+1 (234) 567-8901",
//       //link: "tel:+12345678901",
//     },*/
//     {
//       icon: <Github className="h-5 w-5 text-primary" />,
//       label: "GitHub",
//       value: "github.com/zuhdihanif",
//       link: "https://github.com/zuhdihanif",
//     },
//     {
//       icon: <GraduationCap className="h-5 w-5 text-primary" />,
//       label: "Google Scholar",
//       value: "scholar.google.com",
//       link: "https://scholar.google.com/citations?user=GjLGWeMAAAAJ&hl=id",
//     },
//     {
//       icon: <Instagram className="h-5 w-5 text-primary" />,
//       label: "Instagram",
//       value: "instagram.com/emzieich",
//       link: "https://instagram.com/emzieich",
//     },
//     {
//       icon: <Linkedin className="h-5 w-5 text-primary" />,
//       label: "LinkedIn",
//       value: "linkedin.com/in/mzuhdihanif",
//       link: "https://linkedin.com/in/zuhdihanif",
//     },
//   ]

//   return (
//     <section id="contact" className="py-20 bg-secondary/5">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="section-heading">Contact Me</h2>
//           <p className="section-subheading">Let's get in touch</p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-10">
//           {/* Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <Card className="h-full bg-secondary/10 border-primary/20">
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-bold mb-6">Contact Information</h3>

//                 <div className="space-y-6">
//                   {contactInfo.map((item, index) => (
//                     <motion.div
//                       key={item.label}
//                       initial={{ opacity: 0, y: 10 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.3, delay: index * 0.1 }}
//                       viewport={{ once: true }}
//                       className="flex items-start"
//                     >
//                       <div className="bg-primary/10 p-2 rounded-md mr-4">{item.icon}</div>
//                       <div>
//                         <p className="text-sm text-muted-foreground">{item.label}</p>
//                         {item.link ? (
//                           <a
//                             href={item.link}
//                             className="font-medium hover:text-primary transition-colors"
//                             target={item.link.startsWith("http") ? "_blank" : undefined}
//                             rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
//                           >
//                             {item.value}
//                           </a>
//                         ) : (
//                           <p className="font-medium">{item.value}</p>
//                         )}
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>

//                 <div className="mt-8">
//                   <h4 className="text-sm font-medium text-muted-foreground mb-3">Follow me</h4>
//                   <div className="flex space-x-4">
//                     <a
//                       href="https://github.com/zuhdihanif"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-secondary/20 p-2 rounded-full hover:bg-primary/20 transition-colors"
//                     >
//                       <Github className="h-5 w-5" />
//                       <span className="sr-only">GitHub</span>
//                     </a>
//                      <a
//                       href="https://instagram.com/emzieich"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-secondary/20 p-2 rounded-full hover:bg-primary/20 transition-colors"
//                     >
//                       <Instagram className="h-5 w-5" />
//                       <span className="sr-only">Instagram</span>
//                     </a>
//                     <a
//                       href="https://linkedin.com/in/zuhdihanif"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-secondary/20 p-2 rounded-full hover:bg-primary/20 transition-colors"
//                     >
//                       <Linkedin className="h-5 w-5" />
//                       <span className="sr-only">LinkedIn</span>
//                     </a>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             {/* <Card className="bg-secondary/10 border-primary/20">
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div className="grid sm:grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <label htmlFor="name" className="text-sm font-medium">
//                         Name
//                       </label>
//                       <Input
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Your name"
//                         required
//                         className="bg-secondary/5"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <label htmlFor="email" className="text-sm font-medium">
//                         Email
//                       </label>
//                       <Input
//                         id="email"
//                         name="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Your email"
//                         required
//                         className="bg-secondary/5"
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <label htmlFor="subject" className="text-sm font-medium">
//                       Subject
//                     </label>
//                     <Input
//                       id="subject"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       placeholder="Subject"
//                       required
//                       className="bg-secondary/5"
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <label htmlFor="message" className="text-sm font-medium">
//                       Message
//                     </label>
//                     <Textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       placeholder="Your message"
//                       required
//                       className="min-h-[150px] bg-secondary/5"
//                     />
//                   </div>

//                   <Button type="submit" className="w-full" disabled={isSubmitting}>
//                     {isSubmitting ? (
//                       <>
//                         <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         <Send className="h-4 w-4 mr-2" />
//                         Send Message
//                       </>
//                     )}
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card> */}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }
