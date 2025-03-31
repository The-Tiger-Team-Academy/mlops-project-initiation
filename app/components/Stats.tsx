'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { id: 1, name: 'Events', value: '50+' },
  { id: 2, name: 'Projects', value: '100+' },
  { id: 3, name: 'Partners', value: '25+' },
  { id: 4, name: 'Community Members', value: '1000+' },
];

export default function Stats() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-400">{stat.name}</dt>
              <dd className="order-first text-5xl font-semibold tracking-tight text-[#ff6b35]">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
} 