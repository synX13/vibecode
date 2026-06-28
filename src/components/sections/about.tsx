'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/data/portfolio'
import { Card } from '@/components/ui/card'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
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
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            {personalInfo.bio}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
              <h3 className="text-2xl font-semibold mb-6 text-text">
                {personalInfo.name}
              </h3>
              <p className="text-lg text-muted mb-4">
                {personalInfo.title}
              </p>
              <p className="text-muted mb-6">
                With over a decade of experience in the tech industry, I specialize in building 
                scalable, production-grade systems that power modern applications. My expertise spans 
                across DevOps, Platform Engineering, and Backend Development.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted">10+ Years of Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span className="text-muted">Backend Engineering Expert</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-muted">DevOps & Infrastructure Specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted">High Availability Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span className="text-muted">Performance Optimization</span>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
              <h4 className="text-xl font-semibold mb-3 text-text">Focus Areas</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span className="text-muted">Cloud Infrastructure & Architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span className="text-muted">Kubernetes & Container Orchestration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span className="text-muted">CI/CD & GitOps Implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span className="text-muted">Scalable Backend Systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span className="text-muted">Monitoring & Observability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span className="text-muted">Linux & Automation</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
              <h4 className="text-xl font-semibold mb-3 text-text">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-muted text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">50+</div>
                  <div className="text-muted text-sm">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">99.9%</div>
                  <div className="text-muted text-sm">Uptime Achieved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">1M+</div>
                  <div className="text-muted text-sm">Requests/Day</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}