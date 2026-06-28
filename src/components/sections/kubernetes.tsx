'use client'

import { motion } from 'framer-motion'
import { kubernetesArchitecture } from '@/data/portfolio'
import { Card } from '@/components/ui/card'
import { Network, Settings2, Container, Database, Activity } from 'lucide-react'

const k8sIcons: Record<string, React.ElementType> = {
  'Ingress': Network,
  'Service': Settings2,
  'Deployment': Container,
  'Pods': Container,
  'Redis': Database,
  'MySQL': Database,
  'Monitoring': Activity,
}

export default function Kubernetes() {
  return (
    <section id="kubernetes" className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
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
              {kubernetesArchitecture.title}
            </span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            {kubernetesArchitecture.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {kubernetesArchitecture.components.map((component, index) => {
            const Icon = k8sIcons[component.name] || Container
            return (
              <motion.div
                key={component.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border h-full hover:border-primary/50 transition-all hover:scale-105">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-text mb-2">
                      {component.name}
                    </h3>
                    <p className="text-sm text-muted">
                      {component.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
            <h3 className="text-2xl font-bold text-text mb-6 text-center">
              Architecture Flow
            </h3>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center gap-4">
                <div className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-lg text-text font-medium">
                  Internet
                </div>
                <div className="text-muted">↓</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="px-4 py-2 bg-secondary/20 border border-secondary/30 rounded-lg text-text font-medium">
                  Ingress
                </div>
                <div className="text-muted">↓</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="px-4 py-2 bg-accent/20 border border-accent/30 rounded-lg text-text font-medium">
                  Service
                </div>
                <div className="text-muted">↓</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-lg text-text font-medium">
                  Deployment
                </div>
                <div className="text-muted">↓</div>
              </div>
              <div className="px-4 py-2 bg-secondary/20 border border-secondary/30 rounded-lg text-text font-medium">
                Pods
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="px-4 py-2 bg-accent/20 border border-accent/30 rounded-lg text-text font-medium text-center">
                  Redis
                </div>
                <div className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-lg text-text font-medium text-center">
                  MySQL
                </div>
              </div>
              <div className="px-4 py-2 bg-secondary/20 border border-secondary/30 rounded-lg text-text font-medium">
                Monitoring Stack
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-text mb-6 text-center">
            Key Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {kubernetesArchitecture.badges.map((badge, index) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="p-4 bg-card/50 backdrop-blur-sm border-border text-center hover:border-secondary/50 transition-colors">
                  <div className="text-lg font-semibold text-secondary">
                    {badge}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}