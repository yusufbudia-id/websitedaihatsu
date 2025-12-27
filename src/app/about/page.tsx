'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ClientLayout } from '@/components/client-layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function AboutPage() {
  const historyTimeline = [
    {
    year: '1907',
    title: 'Berdirinya Daihatsu',
    description:
        'Daihatsu bermula pada tahun 1907 dengan nama Hatsudoki Seizo Co., Ltd., perusahaan yang berfokus pada produksi mesin diesel kecil untuk keperluan industri di Osaka. Ini menjadi fondasi awal bagi perkembangan Daihatsu di dunia otomotif.',
    image: '/history/history-1.jpg',
  },
  {
    year: '1951',
    title: 'Lahirnya Nama “Daihatsu”',
    description:
        'Pada tahun 1951, Hatsudoki Seizo Co., Ltd. resmi berganti nama menjadi Daihatsu Motor Co., Ltd. Nama ini berasal dari gabungan kata “Ōsaka” dan “Hatsudoki”, yang berarti mesin dari Osaka, menandai transformasi menjadi produsen kendaraan bermotor.',
    image: '/history/history-2.jpg',
  },
  {
    year: '1957',
    title: 'Peluncuran Daihatsu Midget',
    description:
        'Tahun 1957 menjadi momen penting saat Daihatsu meluncurkan Daihatsu Midget, kendaraan roda tiga kecil yang populer karena efisiensi dan harganya yang terjangkau. Mobil ini memperkuat reputasi Daihatsu sebagai pembuat kendaraan kompak.',
    image: '/history/history-3.jpg',
  },
  {
    year: '1960–1970-an',
    title: 'Ekspansi ke Pasar Internasional',
    description:
        'Pada era 1960–1970-an, Daihatsu mulai mengekspor kendaraannya ke berbagai negara termasuk Asia Tenggara dan Eropa. Model seperti Daihatsu Compagno dan Charade menjadi simbol keberhasilan ekspansi global ini.',
    image: '/history/history-4.jpg',
  },
  {
    year: '1967',
    title: 'Kerjasama dengan Toyota',
    description:
        'Daihatsu menjalin kemitraan strategis dengan Toyota Motor Corporation pada tahun 1967. Kolaborasi ini memungkinkan Daihatsu meningkatkan kualitas produksi dan memperluas distribusi secara global.',
    image: '/history/history-5.jpg',
  },
  {
    year: '2016',
    title: 'Menjadi Anak Perusahaan Toyota',
    description:
        'Pada 2016, Toyota mengakuisisi seluruh saham Daihatsu, menjadikannya anak perusahaan penuh. Tujuannya untuk memperkuat segmen kendaraan kecil global dan memanfaatkan keahlian Daihatsu di bidang efisiensi.',
    image: '/history/history-6.jpg',
  },
  {
    year: '2010–Sekarang',
    title: 'Fokus pada Pasar Asia',
    description:
        'Daihatsu kini berfokus pada pengembangan kendaraan kompak modern yang sesuai kebutuhan pasar Asia, terutama melalui Astra Daihatsu Motor di Indonesia dengan model seperti Xenia, Terios, dan Ayla.',
    image: '/history/history-7.jpg',
  },
  ]

  return (
    <ClientLayout>
      <div className="min-h-screen bg-white">
        <Header />
<motion.section 
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative flex items-center justify-center bg-gradient-to-r from-red-700 to-red-600 text-white overflow-hidden pt-28 pb-12"
>
  {/* Background subtle texture */}
  <div className="absolute inset-0 bg-[url('/images/daihatsu-bg.jpg')] bg-cover bg-center opacity-20"></div>
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Content */}
  <div className="relative z-10 text-center px-6">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-bold mb-3 tracking-tight"
    >
      Sejarah Singkat Daihatsu
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="text-base md:text-lg text-red-100 max-w-2xl mx-auto leading-relaxed"
    >
      Dari awal berdirinya di Osaka pada tahun 1907 hingga kini menjadi pelopor kendaraan kompak dunia,
      Daihatsu terus berinovasi menghadirkan mobilitas yang efisien dan terpercaya.
    </motion.p>
  </div>
</motion.section>


        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="space-y-12">
              {historyTimeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                >
                  <div className="flex-1">
                    <div className="bg-red-600 text-white px-4 py-2 rounded-full inline-block mb-4">
                      {item.year}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="flex-1 relative h-64 rounded-lg overflow-hidden shadow-lg"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ClientLayout>
  )
}
