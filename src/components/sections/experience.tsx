'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/data/portfolio'
import { Card } from '@/components/ui/card'
import { Briefcase, CheckCircle2 } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
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
              Experience
            </span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            A timeline of my professional journey and key achievements.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-text mb-2">
                      {experience.position}
                    </h3>
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-semibold">{experience.company}</span>
                    </div>
                    <p className="text-muted">{experience.period}</p>
                  </div>
                </div>

                <p className="text-muted mb-6">{experience.description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-text mb-3">Responsibilities</h4>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-text mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="text-sm font-semibold text-muted mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-accent/10 text-accent border border-accent/20 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}