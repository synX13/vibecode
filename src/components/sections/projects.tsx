'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/portfolio'
import { Card } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
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
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            A selection of projects that showcase my expertise in building scalable systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border h-full flex flex-col hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold text-text mb-3">
                  {project.title}
                </h3>
                <p className="text-muted mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-1">Challenge</h4>
                    <p className="text-sm text-muted">{project.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-secondary mb-1">Solution</h4>
                    <p className="text-sm text-muted">{project.solution}</p>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-border">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-accent/10 text-accent border border-accent/20 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{project.result}</span>
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