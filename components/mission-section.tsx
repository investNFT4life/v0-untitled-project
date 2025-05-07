"use client"

import { motion } from "framer-motion"
import { Sparkles, Shield, LineChart } from "lucide-react"

export function MissionSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>

      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Our Mission</h2>
          <p className="text-lg md:text-xl">
            We are revolutionizing the NFT world by creating the first collection with a real and measurable impact on
            global health. Each myNFT4.life token you purchase directly funds innovative medical solutions.
          </p>
          <p className="text-xl md:text-2xl font-bold mt-6 text-gradient animate-pulse-slow">
            Join us. Choose health. Choose life. Act NOW!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <motion.div
            className="glass p-8 rounded-xl border-gradient"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              ...fadeIn,
              transition: { delay: 0.2, duration: 0.6 },
            }}
          >
            <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
              <Sparkles className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Transparency</h3>
            <p className="text-foreground/80">
              Track the impact of your NFT in real-time through our blockchain traceability system. 100% transparent
              from purchase to impact.
            </p>
          </motion.div>

          <motion.div
            className="glass p-8 rounded-xl border-gradient"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              ...fadeIn,
              transition: { delay: 0.4, duration: 0.6 },
            }}
          >
            <div className="w-14 h-14 rounded-lg bg-secondary/20 flex items-center justify-center mb-6">
              <Shield className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Lasting Value</h3>
            <p className="text-foreground/80">
              Your NFT gains value while contributing to saving lives, today and tomorrow. A digital asset with
              real-world impact.
            </p>
          </motion.div>

          <motion.div
            className="glass p-8 rounded-xl border-gradient"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              ...fadeIn,
              transition: { delay: 0.6, duration: 0.6 },
            }}
          >
            <div className="w-14 h-14 rounded-lg bg-accent/20 flex items-center justify-center mb-6">
              <LineChart className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Global Impact</h3>
            <p className="text-foreground/80">
              Each token is a raised voice, a broken barrier, a life protected — human or animal. Together, we change
              the rules.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">Redefining How We Fund Health</h3>
          <p className="text-lg md:text-xl mb-6">
            MyNFT4.LIFE is not a collection — it's a turning point.
            <br />
            Three powerful NFT editions. One global commitment: to end delays, bring care closer, and stop preventable
            suffering.
          </p>
          <p className="text-lg md:text-xl">
            <span className="text-gradient font-semibold">
              Together, we change the rules. With purpose. With heart. With real-world impact.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
