'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { ChevronRight, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Menu, X, Clock, MessageCircle, Send, Map as MapIcon, Navigation, CheckCircle } from 'lucide-react'
import { ClientLayout } from '@/components/client-layout'
import { usePathname } from 'next/navigation'
import { motion } from "framer-motion"
import Header from '@/components/Header'

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    carModel: 'placeholder',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const pathname = usePathname()


  useEffect(() => {
    setIsClient(true)
  }, [])

  const carModels = [
    { value: 'placeholder', label: 'Pilih Model Mobil' },
    { value: 'ayla', label: 'Daihatsu Ayla' },
    { value: 'sigra', label: 'Daihatsu Sigra' },
    { value: 'xenia', label: 'Daihatsu Xenia' },
    { value: 'terios', label: 'Daihatsu Terios' },
    { value: 'rocky', label: 'Daihatsu Rocky' },
    { value: 'granmax-pickup', label: 'Daihatsu Gran Max Pickup' },
    { value: 'granmax-minibus', label: 'Daihatsu Gran Max Minibus' },
    { value: 'sirion', label: 'Daihatsu Sirion' },
    { value: 'other', label: 'Lainnya' }
  ]

  const contactInfo = {
    phone: '+62 821-7463-5218',
    email: 'budiabdullahy@gmail.com',
    address: 'Jl. Magelang No.Km 7,2, Sendangadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55284',
    whatsapp: '+62 821-7463-5218',
    operatingHours: {
      weekdays: 'Senin - Jumat: 08:00 - 16:00',
      saturday: 'Sabtu        : 08:00 - 12:00',
      sunday: 'Minggu       : Tutup'
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  {/* PERUBAHAN DI SINI: 
    Fungsi handleSubmit sekarang 'async' untuk mengelola state loading (isSubmitting)
    dan state sukses (isSubmitted), serta mereset form.
  */}
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const phoneNumber = contactInfo.whatsapp.replace(/[^\d]/g, '')
    const text = `
  Halo, saya ingin menghubungi Daihatsu.

  Nama: ${formData.name}
  Alamat: ${formData.address}
  Nomor Telepon: ${formData.phone}
  Model Mobil: ${formData.carModel === 'placeholder' ? '-' : formData.carModel}
  Pesan: ${formData.message}
    `

    const encodedText = encodeURIComponent(text.trim())
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`

    // Beri jeda singkat agar animasi "Mengirim..." terlihat oleh user
    await new Promise(resolve => setTimeout(resolve, 800));

    window.open(waUrl, '_blank') // Buka WhatsApp

    setIsSubmitting(false) // Hentikan loading
    setIsSubmitted(true)  // Tampilkan pesan sukses

    // Reset formulir
    setFormData({
      name: '',
      address: '',
      phone: '',
      carModel: 'placeholder',
      message: ''
    })

    // Opsional: Sembunyikan pesan sukses setelah beberapa detik
    // setTimeout(() => {
    //   setIsSubmitted(false);
    // }, 4000); 
  }


  const handleWhatsAppClick = () => {
    if (!isClient) return
    const message = encodeURIComponent('Halo, saya tertarik dengan mobil Daihatsu. Mohon informasi lebih lanjut.')
    window.open(`https://wa.me/${contactInfo.whatsapp.replace(/[^\d]/g, '')}?text=${message}`, '_blank')
  }

  const handleFindDealer = () => {
    if (!isClient) return
    // Placeholder for dealer finder functionality
    alert('Fitur pencarian dealer akan segera tersedia!')
  }

  return (
    <ClientLayout>
      <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <Header />

      {/* Hero Section */}
      {/* PERUBAHAN DI SINI: Latar diubah ke 'bg-white' untuk pola "zebra" */}
      <section className="relative pt-28 pb-8 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-stretch gap-10">
          {/* Foto Profil */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="relative w-60 h-60 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <Image 
                src="/contact/profil.jpg" // 🔹 Ganti dengan file fotomu di folder public/
                alt="Budi - Sales Daihatsu"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>

          {/* Kartu Profil */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-2/3 bg-white rounded-2xl shadow-2xl p-8 text-center md:text-left"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Hai, saya Budi 👋
            </h1>
            <h2 className="text-lg font-semibold text-[#D90429] mb-4">
              Sales Resmi Daihatsu
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-6">
              Saya siap membantu Anda menemukan mobil Daihatsu terbaik sesuai kebutuhan dan anggaran Anda.
              Dapatkan pelayanan ramah, cepat, dan penawaran spesial hanya di sini.
            </p>
            <Button 
              onClick={() => window.open('https://wa.me/6282174635218?text=Halo%20Budi%2C%20saya%20tertarik%20dengan%20mobil%20Daihatsu.', '_blank')}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg"
            >
              Hubungi via WhatsApp
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="pt-6 pb-12 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Kirim Pesan kepada Kami
                  </h2>
                  
                  {isSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-green-800 mb-2">
                        Pesan Terkirim!
                      </h3>
                      <p className="text-green-600">
                        Terima kasih. Pesan Anda sedang dialihkan ke WhatsApp.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name" className="text-gray-700 font-medium">
                            Nama Lengkap *
                          </Label>
                          <Input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            required
                            className="mt-2 border-gray-300 focus:border-red-500 focus:ring-red-500"
                            placeholder="Masukkan nama lengkap Anda"
                          />
                        </div>
                        
                        {/* PERUBAHAN DI SINI: Mengurangi friksi. 'Alamat' diubah & tidak required */}
                        <div>
                          <Label htmlFor="address" className="text-gray-700 font-medium">
                            Domisili / Kota
                          </Label>
                          <Input
                            id="address"
                            type="text"
                            value={formData.address}
                            onChange={(e) => handleInputChange('address', e.target.value)}
                            // required <-- Dihilangkan
                            className="mt-2 border-gray-300 focus:border-red-500 focus:ring-red-500"
                            placeholder="Mis: Sleman, Yogyakarta"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="phone" className="text-gray-700 font-medium">
                            Nomor Telepon *
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            required
                            className="mt-2 border-gray-300 focus:border-red-500 focus:ring-red-500"
                            placeholder="08xx-xxxx-xxxx"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="carModel" className="text-gray-700 font-medium">
                            Model Mobil Tertarik
                          </Label>
                          <Select value={formData.carModel} onValueChange={(value) => handleInputChange('carModel', value)}>
                            <SelectTrigger className="mt-2 border-gray-300 focus:border-red-500 focus:ring-red-500">
                              <SelectValue placeholder="Pilih Model Mobil" />
                            </SelectTrigger>
                            <SelectContent>
                              {carModels.map((model) => (
                                <SelectItem key={model.value} value={model.value}>
                                  {model.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-gray-700 font-medium">
                          Pesan Anda *
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          required
                          rows={5}
                          className="mt-2 border-gray-300 focus:border-red-500 focus:ring-red-500"
                          placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Mengirim...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 w-5 h-5" />
                            Kirim Pesan
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              
              {/* PERUBAHAN DI SINI: Kartu "Hubungi Langsung" dipindah ke atas */}
              {/* Quick Actions */}
              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Hubungi Langsung
                  </h3>
                  
                  <div className="space-y-3">
                    <Button 
                      onClick={handleWhatsAppClick}
                      className="w-full bg-green-500 hover:bg-green-600 text-white"
                    >
                      <MessageCircle className="mr-2 w-5 h-5" />
                      WhatsApp Sales
                    </Button>
                    
                    <Button 
                      onClick={() => window.open('https://maps.app.goo.gl/fJ6kM1SiD1MMso746', '_blank')}
                      variant="outline" 
                      className="w-full border-red-600 text-[#D90429] hover:bg-red-600 hover:text-white"
                    >
                      <MapIcon className="mr-2 w-5 h-5" />
                      Kunjungi Dealer Kami
                    </Button>

                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Cards */}
              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Informasi Kontak
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-[#D90429] mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Telepon</p>
                        <p className="text-gray-600">{contactInfo.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 text-[#D90429] mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">{contactInfo.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-[#D90429] mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Alamat</p>
                        <p className="text-gray-600">{contactInfo.address}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Operating Hours */}
              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Jam Operasional
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-[#D90429] mr-3" />
                      <div>
                        <p className="text-gray-700">{contactInfo.operatingHours.weekdays}</p>
                        <p className="text-gray-700">{contactInfo.operatingHours.saturday}</p>
                        <p className="text-gray-700">{contactInfo.operatingHours.sunday}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Media Sosial
                  </h3>
                  
                  <div className="flex space-x-3">
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white hover:from-purple-700 hover:to-pink-700 transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors"
                    >
                      <Youtube className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lokasi Dealer Utama
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kunjungi dealer resmi kami untuk pengalaman terbaik
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Embedded Google Maps — Lokasi Dealer */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.825430403227!2d110.3624942!3d-7.741659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5f4eb83974cf%3A0x7fc0bd1e4b44f8f!2sAstra%20International%20Daihatsu%20Yogyakarta!5e0!3m2!1sid!2sid!4v0000000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Tombol Petunjuk Arah */}
            <div className="absolute bottom-4 right-4">
              <Button
                size="sm"
                className="bg-white text-gray-700 hover:bg-gray-100 shadow-lg"
                onClick={() => window.open('https://maps.app.goo.gl/fJ6kM1SiD1MMso746', '_blank')}
              >
                <Navigation className="w-4 h-4 mr-2" />
                Buka di Google Maps
              </Button>
            </div>
          </div>

            {/* Location Details */}
            <div className="space-y-6">
              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Daihatsu Jogja Magelang
                  </h3>
                  
                  {/* PERUBAHAN DI SINI: Konten redundan (Kontak & Jam) dihapus */}
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-[#D90429] mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Alamat Lengkap</p>
                        <p className="text-gray-600">{contactInfo.address}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Showroom</Badge>
                      <Badge variant="secondary">Service Center</Badge>
                      <Badge variant="secondary">Spare Parts</Badge>
                      <Badge variant="secondary">Test Drive</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* PERUBAHAN DI SINI: Tombol redundan "Telepon" & "Petunjuk Arah" dihapus */}
              
            </div>
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