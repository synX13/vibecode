'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/data/portfolio'
import { Card } from '@/components/ui/card'
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border h-full">
              <h3 className="text-2xl font-bold text-text mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-1">Email</h4>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-muted hover:text-primary transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-1">Phone</h4>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-muted hover:text-secondary transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-1">Location</h4>
                    <p className="text-muted">{personalInfo.location}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <h4 className="font-semibold text-text mb-4">Social Links</h4>
                  <div className="flex gap-4">
                    <motion.a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-6 h-6 text-primary" />
                    </motion.a>
                    <motion.a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center hover:bg-secondary/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin className="w-6 h-6 text-secondary" />
                    </motion.a>
                    <motion.a
                      href={`mailto:${personalInfo.email}`}
                      className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Send className="w-6 h-6 text-accent" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border h-full">
              <h3 className="text-2xl font-bold text-text mb-6">
                Let's Connect
              </h3>
              <p className="text-muted mb-8">
                I'm always interested in hearing about new opportunities, 
                especially ambitious projects. Whether you have a question or 
                just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                  <h4 className="font-semibold text-text mb-2">Open to Opportunities</h4>
                  <p className="text-sm text-muted">
                    Available for freelance projects, consulting, and full-time positions.
                  </p>
                </div>
                <div className="p-4 bg-secondary/10 border border-secondary/20 rounded-lg">
                  <h4 className="font-semibold text-text mb-2">Expertise Areas</h4>
                  <p className="text-sm text-muted">
                    DevOps, Platform Engineering, Cloud Architecture, Backend Development
                  </p>
                </div>
                <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
                  <h4 className="font-semibold text-text mb-2">Response Time</h4>
                  <p className="text-sm text-muted">
                    Typically respond within 24 hours
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}