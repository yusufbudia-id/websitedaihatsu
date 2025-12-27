'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image' // <--- TAMBAHKAN BARIS INI
import Link from 'next/link' // <-- TAMBAHKAN BARIS INI
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Badge } from '@/components/ui/badge'
import { Star, Phone, Mail, MapPin, Facebook, Instagram, Youtube, CheckCircle, Award, Wrench, DollarSign, Lightbulb, ChevronRight, Menu, X } from 'lucide-react'
import { ClientLayout } from '@/components/client-layout'
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation'
import Header from '@/components/Header'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0) // <-- TAMBAHKAN INI
  const pathname = usePathname()


  const heroSlides = [
    {
      image: "/hero/hero-1.png", // <-- Path dari folder public
      title: "Daihatsu Rocky:\nBuilt For The Young Spirit",
      subtitle: "Tampil Keren dengan Si Keren.",
    },
    {
      image: "/hero/hero-2.png", // <-- Gambar kedua
      title: "Daihatsu Granmax:\nPartner Usaha Paling Andal",
      subtitle: "Tangguh, irit, siap angkut berat.",
    },
        {
      image: "/hero/hero-3.png", // <-- Gambar ketiga
      title: "Daihatsu Xenia:\nSahabat Keluarga Anda",
      subtitle: "Lindungi perjalanan dengan yang berharga.",
    },
    // ...tambahkan gambar lainnya jika ada
  ]

// --- MULAI TAMBAHKAN DARI SINI ---
  const contactInfo = {
    // GANTI DENGAN NOMOR WHATSAPP ANDA (Format internasional)
    whatsapp: '+6282174635218', 
  }

  const handleWhatsAppClick = () => {
    if (!isClient) return
    // GANTI PESAN INI SESUAI KEBUTUHAN ANDA
    const message = encodeURIComponent('Halo, saya tertarik dengan produk mobil Daihatsu. Bisa minta informasi lebih lanjut?')
    window.open(`https://wa.me/${contactInfo.whatsapp.replace(/[^\d]/g, '')}?text=${message}`, '_blank')
  }
  // --- SELESAI MENAMBAHKAN ---

  // ... (setelah kode contactInfo, handleWhatsAppClick, dll)

  useEffect(() => {
    if (!isClient) return
    // Timer untuk mengganti slide hero setiap 5 detik
    const heroTimer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(heroTimer)
  }, [heroSlides.length, isClient])

  // ... (useEffect kamu yang lain untuk promo slide)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const promos = [
    {
      id: 1,
      title: "Daihatsu Terios Festival",
      description: "Diskon hingga 20% + Gratis servis 2 tahun",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=400&fit=crop",
      badge: "TERBATAS"
    },
    {
      id: 2,
      title: "Xenia Smart Cashback",
      description: "Cashback Rp 15 juta + Paket kredit 0%",
      image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&h=400&fit=crop",
      badge: "PROMO"
    },
    {
      id: 3,
      title: "Ayla Special Deal",
      description: "DP mulai Rp 15 juta + Gratis asuransi",
      image: "https://images.unsplash.com/photo-1563720224092-3d8eca8f7b28?w=800&h=400&fit=crop",
      badge: "BEST SELLER"
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: "Budi Santoso",
      role: "Pengusaha",
      content: "Pelayanan ramah dan proses pembelian yang mudah. Terima kasih Daihatsu!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Siti Nurhaliza",
      role: "Ibu Rumah Tangga",
      content: "Mobil Daihatsu sangat irit dan cocok untuk keluarga. Sangat puas dengan pilihan saya!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Ahmad Fauzi",
      role: "Driver Online",
      content: "Performa mesin handal dan biaya perawatan terjangkau. Sangat menguntungkan untuk usaha.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ]

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Kualitas Teruji",
      description: "Desain modern dan performa handal"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Layanan Purna Jual",
      description: "Jaringan bengkel resmi tersebar luas"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Harga Kompetitif",
      description: "Pilihan mobil terbaik dengan harga terjangkau"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Inovasi Tiada Henti",
      description: "Teknologi canggih untuk kenyamanan dan keamanan Anda"
    }
  ]

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promos.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [promos.length, isClient])

  return (
    <ClientLayout>
      <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <Header />      

    {/* Hero Section */}
      <section className="relative pt-16 min-h-screen flex items-center overflow-hidden">
        {/* Kontainer untuk semua slide yang akan bergeser */}
        <div 
          className="absolute inset-0 z-10 flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentHeroSlide * 100}%)` }}
        >
          {/* Loop untuk setiap gambar background */}
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
          ))}
        </div>
        
        {/* Lapisan overlay gradient merah */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-red-600 to-red-700 opacity-10"></div>
        
        {/* Konten teks (dinamis) */}
        <div className="absolute z-30 bottom-8 left-0 p-8 md:p-12">
          <div className="max-w-3xl text-white">
            {/* Teks ini akan berganti sesuai slide */}
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white whitespace-pre-line [text-shadow:0_1px_3px_rgb(0,0,0,0.6)]">
              {heroSlides[currentHeroSlide].title}
            </h1>
            <p className="text-base md:text-lg mb-6 text-white [text-shadow:0_1px_3px_rgb(0,0,0,0.6)]">
              {heroSlides[currentHeroSlide].subtitle}
            </p>

            {/* Tombol-tombol */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Button
                    size="lg"
                    className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold transform transition-all duration-300 hover:scale-105"
                  >
                    Lihat Model Kami
                    <ChevronRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </Link>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              >
                <Button
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="bg-red-600 text-white hover:bg-red-700 px-8 py-4 text-lg font-semibold transform transition-all duration-300 hover:scale-105 shadow-md"
                >
                  Pesan Test Drive
                  <ChevronRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
{/* Features Section - Enhanced */}
<section className="py-12 bg-gradient-to-br from-red-50 via-white to-gray-100 relative overflow-hidden">
  {/* Background pattern effect */}
  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.2),transparent_60%)]"></div>

  <div className="container mx-auto px-4 relative z-10">
    {/* Title Section */}
    <div className="text-center mb-16">
      <div className="flex justify-center mb-6">
        <Image src="/logo.svg" alt="Logo Daihatsu" width={100} height={40} className="opacity-90" />
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-red-700 mb-3 tracking-tight">
        Keunggulan Kami
      </h2>
      <div className="w-24 h-1 bg-red-600 mx-auto mb-6 rounded-full"></div>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Mengapa <span className="font-semibold text-red-700">Daihatsu</span> menjadi pilihan utama keluarga Indonesia
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white border-0 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300">
            <CardContent className="p-8 text-center">
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-20 h-20 mx-auto mb-5 rounded-full flex items-center justify-center bg-gradient-to-r from-red-500 to-red-700 text-white shadow-lg"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Gallery Section - Carousel Version */}
      <section className="py-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.25),transparent_60%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-red-700 mb-3 tracking-tight">
              Galeri Kami
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Momen berkesan bersama <span className="font-semibold text-red-700">Daihatsu</span> di seluruh Indonesia.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative max-w-6xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {[
                  "/gallery/galeri-1.jpg",
                  "/gallery/galeri-2.jpg",
                  "/gallery/galeri-3.jpg",

                ].slice(0, 3).map((image, index) => (
                  <CarouselItem key={index}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="relative group overflow-hidden rounded-2xl shadow-lg"
                    >
                      <img
                        src={image}
                        alt={`Galeri ${index + 1}`}
                        className="w-full h-[450px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                        <h3 className="text-white text-2xl font-bold">Daihatsu Experience</h3>
                        <p className="text-gray-200 text-sm">Kebanggaan pelanggan kami di berbagai daerah</p>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:left-6 bg-white/80 hover:bg-red-600 hover:text-white rounded-full shadow-lg" />
              <CarouselNext className="right-2 md:right-6 bg-white/80 hover:bg-red-600 hover:text-white rounded-full shadow-lg" />
            </Carousel>
          </div>

          {/* Button */}
          <div className="text-center mt-12">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-md transform hover:scale-105 transition-all">
              Lihat Semua Foto
            </Button>
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
                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="/products" className="text-gray-400 hover:text-white transition-colors">Produk</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Kontak</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Karir</a></li>
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
            <p>&copy; 2024 Daihatsu Indonesia. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
    </ClientLayout>
  )
}