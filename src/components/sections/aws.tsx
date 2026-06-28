'use client'

import { motion } from 'framer-motion'
import { awsArchitecture } from '@/data/portfolio'
import { Card } from '@/components/ui/card'
import { Cloud, Server, Database, HardDrive, Activity, Zap } from 'lucide-react'

const awsIcons: Record<string, React.ElementType> = {
  'CloudFront': Cloud,
  'Application Load Balancer': Server,
  'EKS': Server,
  'EC2': Server,
  'RDS': Database,
  'Redis': Zap,
  'S3': HardDrive,
  'CloudWatch': Activity,
}

export default function AWS() {
  return (
    <section id="aws" className="py-20 px-4 sm:px-6 lg:px-8">
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
              {awsArchitecture.title}
            </span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            {awsArchitecture.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awsArchitecture.components.map((component, index) => {
            const Icon = awsIcons[component.name] || Cloud
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
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" />
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
          className="mt-16"
        >
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
            <h3 className="text-2xl font-bold text-text mb-6 text-center">
              Architecture Flow
            </h3>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center gap-4">
                <div className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-lg text-text font-medium">
                  Users
                </div>
                <div className="text-muted">↓</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="px-4 py-2 bg-secondary/20 border border-secondary/30 rounded-lg text-text font-medium">
                  CloudFront CDN
                </div>
                <div className="text-muted">↓</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="px-4 py-2 bg-accent/20 border border-accent/30 rounded-lg text-text font-medium">
                  Application Load Balancer
                </div>
                <div className="text-muted">↓</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-lg text-text font-medium">
                  EKS Cluster
                </div>
                <div className="text-muted">↓</div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="px-4 py-2 bg-secondary/20 border border-secondary/30 rounded-lg text-text font-medium text-center">
                  EC2
                </div>
                <div className="px-4 py-2 bg-accent/20 border border-accent/30 rounded-lg text-text font-medium text-center">
                  RDS
                </div>
                <div className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-lg text-text font-medium text-center">
                  Redis
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="px-4 py-2 bg-secondary/20 border border-secondary/30 rounded-lg text-text font-medium">
                  S3 Storage
                </div>
                <div className="text-muted">↓</div>
              </div>
              <div className="px-4 py-2 bg-accent/20 border border-accent/30 rounded-lg text-text font-medium">
                CloudWatch Monitoring
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}