'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image' // <--- TAMBAHKAN BARIS INI
import Link from 'next/link' // <-- TAMBAHKAN BARIS INI
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronRight, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Menu, X, Star, Fuel, Users, Settings, Calendar, Wrench, CreditCard, ShoppingBag, MapPin as MapIcon, Search, Filter } from 'lucide-react'
import { ClientLayout } from '@/components/client-layout'
import { usePathname } from 'next/navigation'
import { motion } from "framer-motion"
import Header from '@/components/Header'

export default function ProductsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isClient, setIsClient] = useState(false)
  const pathname = usePathname()

// --- SALIN DAN LETAKKAN SELURUH BLOK KODE DI BAWAH INI ---
  
  const contactInfo = {
    // ❗ GANTI DENGAN NOMOR WHATSAPP ANDA (Format +62)
    whatsapp: '+6282174635218', 
  }

  const handleWhatsAppClick = () => {
    if (!isClient) return
    // Anda bisa mengubah pesan default ini
    const message = encodeURIComponent('Halo, saya tertarik dengan produk mobil Daihatsu. Mohon info lebih lanjut.')
    window.open(`https://wa.me/${contactInfo.whatsapp.replace(/[^\d]/g, '')}?text=${message}`, '_blank')
  }

  useEffect(() => {
    setIsClient(true)
  }, [])

  // --- BATAS AKHIR KODE YANG DISALIN ---
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    setIsClient(true)
  }, [])



  const carModels = [
    {
      id: 'ayla',
      name: 'Daihatsu Ayla',
      category: 'hatchback',
      price: 'Rp 130 jutaan',
      description: 'Mobil kompak yang irit dan stylish, sempurna untuk mobilitas urban.',
      image: '/product/product-ayla.png',
      features: ['Irit BBM', 'City Car', '5 Kursi', 'Modern Design'],
      badge: 'PROMO'
    },
    {
      id: 'sigra',
      name: 'Daihatsu Sigra',
      category: 'mpv',
      price: 'Rp 140 jutaan',
      description: 'MPV 7-seater yang luas dan nyaman untuk keluarga Indonesia.',
      image: '/product/product-sigra.png',
      features: ['7 Kursi', 'Luas', 'Nyaman', 'Harga Terjangkau'],
      badge: 'PROMO'
    },
    {
      id: 'xenia',
      name: 'Daihatsu Xenia',
      category: 'mpv',
      price: 'Rp 210 jutaan',
      description: 'MPV premium dengan fitur lengkap dan kenyamanan maksimal.',
      image: '/product/product-xenia.png',
      features: ['Premium', '7 Kursi', 'Fitur Lengkap', 'Safety'],
      badge: 'PROMO'
    },
    {
      id: 'terios',
      name: 'Daihatsu Terios',
      category: 'suv',
      price: 'Rp 240 jutaan',
      description: 'SUV stylish dan tangguh untuk petualangan keluarga Anda.',
      image: '/product/product-terios.png',
      features: ['SUV', '7 Kursi', 'Tangguh', 'Off-road'],
      badge: 'PROMO'
    },
    {
      id: 'rocky',
      name: 'Daihatsu Rocky',
      category: 'suv',
      price: 'Rp 210 jutaan',
      description: 'Compact SUV modern dengan teknologi canggih dan desain stylish.',
      image: '/product/product-rocky.png',
      features: ['Compact SUV', 'Modern', 'Teknologi', 'Stylish'],
      badge: 'PROMO'
    },
    {
      id: 'granmax-pickup',
      name: 'Daihatsu Gran Max Pickup',
      category: 'commercial',
      price: 'Rp 140 jutaan',
      description: 'Kendaraan komersial yang handal untuk bisnis Anda.',
      image: '/product/product-granmaxpu.png',
      features: ['Pickup', 'Besar', 'Handal', 'Bisnis'],
      badge: 'PROMO'
    },
    {
      id: 'granmax-minibus',
      name: 'Daihatsu Gran Max Minibus',
      category: 'commercial',
      price: 'Rp 180 jutaan',
      description: 'Minibus luas untuk transportasi penumpang atau barang.',
      image: '/product/product-granmaxmb.png',
      features: ['Minibus', 'Luas', 'Praktis', 'Ekonomis'],
      badge: 'PROMO'
    },
    {
      id: 'sirion',
      name: 'Daihatsu Sirion',
      category: 'hatchback',
      price: 'Rp 220 jutaan',
      description: 'Kendaraan kota yang gesit dan lincah.',
      image: '/product/product-sirion.png',
      features: ['City Car', 'Gesit', 'Lincah', 'Stylish'],
      badge: 'PROMO'
    }
  ]

  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Servis Resmi',
      description: 'Layanan bengkel resmi dengan teknologi terkini dan suku cadang asli.',
      features: ['Teknisi Bersertifikat', 'Suku Cadang Asli', 'Garansi Resmi', 'Booking Online']
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: 'Servis Keuangan',
      description: 'Solusi pembiayaan mudah dengan bunga kompetitif dan proses cepat.',
      features: ['Simulasi Kredit', 'Bunga Ringan', 'Proses Cepat', 'Pilihan Leasing']
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: 'Aksesoris Asli',
      description: 'Koleksi aksesoris resmi untuk meningkatkan tampilan dan fungsi mobil.',
      features: ['Aksesoris Resmi', 'Kualitas Terjamin', 'Pilihan Lengkap', 'Pasang di Tempat']
    },
    {
      icon: <MapIcon className="w-8 h-8" />,
      title: 'Temukan Dealer',
      description: 'Jaringan dealer resmi tersebar di seluruh Indonesia untuk kemudahan Anda.',
      features: ['150+ Dealer', 'Layanan Lengkap', 'Lokasi Strategis', 'Support 24/7']
    }
  ]

  const categories = [
    { id: 'all', name: 'Semua Model' },
    { id: 'hatchback', name: 'Hatchback' },
    { id: 'mpv', name: 'MPV' },
    { id: 'suv', name: 'SUV' },
    { id: 'commercial', name: 'Komersial' }
  ]

  const filteredCars = selectedCategory === 'all' 
    ? carModels 
    : carModels.filter(car => car.category === selectedCategory)

  return (
    <ClientLayout>
      <div className="min-h-screen bg-white">
      <Header />

      {/* Car Catalog Section */}
      <motion.section
        className="pt-32 pb-20 bg-gray-50"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Katalog Mobil
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilih dari berbagai model Daihatsu yang dirancang untuk memenuhi kebutuhan Anda
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                whileHover={{ scale: 1.1 }}          // efek sedikit membesar saat hover
                whileTap={{ scale: 0.95 }}           // efek mengecil sebentar saat diklik
                transition={{ type: "spring", stiffness: 400 }} // bikin animasi halus
              >
                <Button
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={
                    selectedCategory === category.id
                      ? "bg-red-600 hover:bg-red-700 text-white shadow-md"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  }
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Car Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-0 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      whileHover={{ scale: 1.05 }}
                    />
                    <Badge className="absolute top-3 left-3 bg-red-600 text-white">
                      {car.badge}
                    </Badge>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                      {car.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {car.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {car.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-sm text-gray-500">Mulai Dari</p>
                        <p className="text-lg font-bold text-red-600">{car.price}</p>
                      </div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex items-center"
                      >
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">4.8</span>
                      </motion.div>
                    </div>

                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Button 
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold"
                        onClick={() => {
                          if (isClient) window.location.href = `/products/${car.id}`
                        }}
                      >
                        Lihat Detail
                        <ChevronRight className="ml-2 w-4 h-4" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>   {/* <-- tambahkan penutup ini */}
      </motion.section>   {/* ✅ Tambahkan penutup ini */}

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Jasa Unggulan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Layanan lengkap untuk memenuhi semua kebutuhan otomotif Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 {services.map((service, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    viewport={{ once: true }}
  >
    <Card className="bg-white border-0 rounded-2xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
      <CardContent className="p-6 text-center">
        <motion.div
          whileHover={{ rotate: 10, scale: 1.1 }}
          className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600"
        >
          {service.icon}
        </motion.div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <ul className="space-y-2 text-sm text-gray-600">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></div>
              {feature}
            </li>
          ))}
        </ul>
        <Button variant="outline" className="mt-4 border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
          Pelajari Lebih Lanjut
        </Button>
      </CardContent>
    </Card>
  </motion.div>
))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center">
                <Image
                  src="/logo.svg" // <-- Ganti dengan nama file logo Anda
                  alt="Daihatsu Logo"
                  width={385}
                  height={131}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Sahabat keluarga Indonesia yang menyediakan mobil berkualitas dengan harga terjangkau dan layanan terbaik.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Link Cepat</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="/products" className="text-gray-400 hover:text-white transition-colors">Produk</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Kontak</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Kontak Kami</h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>0821-7463-5218</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>budiabdullahy@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Yogyakarta, Indonesia</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Daihatsu Indonesia. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
    </ClientLayout>
  )
}
