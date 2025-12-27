'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ChevronRight, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Menu, X, Star, Fuel, Users, Settings, Calendar, Wrench, CreditCard, Download, Car, Shield, Gauge, Palette, CheckCircle, ArrowLeft } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CarDetailPage() {
  const params = useParams()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState('red')

  const carId = params.id as string

  // Car data based on ID
  const carData: Record<string, any> = {
    'ayla': {
      name: 'Daihatsu Ayla',
      category: 'Hatchback',
      price: 'Rp 150.000.000',
      description: 'Mobil kompak yang irit dan stylish, sempurna untuk mobilitas urban dengan desain modern dan fitur lengkap.',
      images: [
        '/cars/ayla/ayla-red.png',
        '/cars/ayla/ayla-white.png',
        '/cars/ayla/ayla-black.png',
        '/cars/ayla/ayla-silver.png',
        '/cars/ayla/ayla-yellow.png',
        '/cars/ayla/ayla-orange.png',
        '/cars/ayla/ayla-grey.png'   
      ],
      imagesByColor: {
        red: '/cars/ayla/ayla-red.png',
        white: '/cars/ayla/ayla-white.png',
        black: '/cars/ayla/ayla-black.png',
        silver: '/cars/ayla/ayla-silver.png',
        yellow: '/cars/ayla/ayla-yellow.png',
        orange: '/cars/ayla/ayla-orange.png',
        grey: '/cars/ayla/ayla-grey.png'       
      },

      colors: [
        { name: 'Red', value: 'red', hex: '#DC2626' },
        { name: 'White', value: 'white', hex: '#FFFFFF' },
        { name: 'Black', value: 'black', hex: '#000000' },
        { name: 'Silver', value: 'silver', hex: '#C0C0C0' },
        { name: 'Yellow', value: 'yellow', hex: '#ffea00ff' },
        { name: 'Orange', value: 'orange', hex: '#ff7b00ff' },
        { name: 'Grey', value: 'grey', hex: '#373737ff' }
      ],

      specifications: {
        engine: '1.0L 3-Cylinder DOHC',
        power: '67 PS @ 6,000 rpm',
        torque: '89 Nm @ 4,400 rpm',
        transmission: '5-Speed Manual / CVT',
        fuel: 'Bensin',
        dimensions: '3,660 x 1,600 x 1,520 mm',
        wheelbase: '2,455 mm',
        seating: '5 Kursi',
        fuelTank: '35 Liter'
      },
      features: [
        'Dual SRS Airbags',
        'ABS dengan EBD',
        'ISOFIX Child Seat',
        'Audio 2DIN dengan Bluetooth',
        'AC Digital',
        'Power Windows',
        'Central Lock',
        'Parking Sensor'
      ],
      variants: [
        { name: '1.0 D MT', price: 'Rp 150.000.000' },
        { name: '1.0 M MT', price: 'Rp 160.000.000' },
        { name: '1.2 R MT', price: 'Rp 175.000.000' },
        { name: '1.2 R CVT', price: 'Rp 190.000.000' }
      ]
    },
    'terios': {
      name: 'Daihatsu Terios',
      category: 'SUV',
      price: 'Rp 280.000.000',
      description: 'SUV stylish dan tangguh untuk petualangan keluarga Anda dengan ground clearance tinggi dan fitur keselamatan lengkap.',
      images: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1563720224092-3d8eca8f7b28?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1554224154-260325c05993?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop'
      ],
      colors: [
        { name: 'Red', value: 'red', hex: '#DC2626' },
        { name: 'White', value: 'white', hex: '#FFFFFF' },
        { name: 'Black', value: 'black', hex: '#000000' },
        { name: 'Silver', value: 'silver', hex: '#C0C0C0' },
        { name: 'Bronze', value: 'bronze', hex: '#CD7F32' }
      ],
      specifications: {
        engine: '1.5L 2NR-VE DOHC Dual VVT-i',
        power: '104 PS @ 6,000 rpm',
        torque: '136 Nm @ 4,200 rpm',
        transmission: '5-Speed Manual / 4-Speed Automatic',
        fuel: 'Bensin',
        dimensions: '4,435 x 1,695 x 1,700 mm',
        wheelbase: '2,685 mm',
        seating: '7 Kursi',
        fuelTank: '45 Liter'
      },
      features: [
        'Dual SRS Airbags',
        'ABS dengan EBD',
        'Hill Start Assist',
        'Vehicle Stability Control',
        'Audio 2DIN dengan USB & Bluetooth',
        'AC Digital dengan Rear AC',
        'Power Windows',
        'Keyless Entry',
        'Parking Camera',
        'Traction Control'
      ],
      variants: [
        { name: 'R MT', price: 'Rp 280.000.000' },
        { name: 'R A/T', price: 'Rp 295.000.000' },
        { name: 'R Deluxe MT', price: 'Rp 310.000.000' },
        { name: 'R Deluxe A/T', price: 'Rp 325.000.000' }
      ]
    },
    'xenia': {
      name: 'Daihatsu Xenia',
      category: 'MPV',
      price: 'Rp 220.000.000',
      description: 'MPV premium dengan fitur lengkap dan kenyamanan maksimal untuk seluruh keluarga.',
      images: [
        'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1563720224092-3d8eca8f7b28?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1554224154-260325c05993?w=800&h=600&fit=crop'
      ],
      colors: [
        { name: 'Red', value: 'red', hex: '#DC2626' },
        { name: 'White', value: 'white', hex: '#FFFFFF' },
        { name: 'Black', value: 'black', hex: '#000000' },
        { name: 'Silver', value: 'silver', hex: '#C0C0C0' },
        { name: 'Gray', value: 'gray', hex: '#6B7280' }
      ],
      specifications: {
        engine: '1.5L 2NR-VE DOHC Dual VVT-i',
        power: '104 PS @ 6,000 rpm',
        torque: '136 Nm @ 4,200 rpm',
        transmission: '5-Speed Manual / 4-Speed Automatic',
        fuel: 'Bensin',
        dimensions: '4,395 x 1,730 x 1,690 mm',
        wheelbase: '2,730 mm',
        seating: '7 Kursi',
        fuelTank: '45 Liter'
      },
      features: [
        'Dual SRS Airbags',
        'ABS dengan EBD',
        'ISOFIX Child Seat',
        'Audio 2DIN dengan USB & Bluetooth',
        'AC Digital dengan Rear AC',
        'Power Windows',
        'Keyless Entry',
        'Parking Sensor',
        'Cruise Control'
      ],
      variants: [
        { name: '1.3 M MT', price: 'Rp 220.000.000' },
        { name: '1.3 X MT', price: 'Rp 235.000.000' },
        { name: '1.5 R MT', price: 'Rp 255.000.000' },
        { name: '1.5 R A/T', price: 'Rp 270.000.000' }
      ]
    }
  }

  const car = carData[carId] || carData['ayla'] // Default to Ayla if not found

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <section className="pt-16 bg-gray-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <a href="/" className="hover:text-red-600 transition-colors">Home</a>
            <ChevronRight className="w-4 h-4 mx-2" />
            <a href="/products" className="hover:text-red-600 transition-colors">Produk</a>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">{car.name}</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              <div className="relative">
              <img
                key={`${selectedColor}-${selectedImage}`}
                src={car.imagesByColor[selectedColor] || car.images[selectedImage]}
                alt={`${car.name} ${selectedColor}`}
                className="w-full h-96 object-cover rounded-lg shadow-lg transition-all duration-500 ease-in-out"
              />

                <Badge className="absolute top-4 left-4 bg-red-600 text-white">
                  {car.category}
                </Badge>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-2 mt-4">
                {car.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative overflow-hidden rounded-lg border-2 transition-all ${
                      selectedImage === index ? 'border-red-600' : 'border-gray-200'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${car.name} ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Car Info */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {car.name}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {car.description}
              </p>

              <div className="flex items-center mb-6">
                <div className="flex items-center mr-6">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-gray-600">4.8 (245 reviews)</span>
                </div>
                <div className="text-2xl font-bold text-red-600">
                  {car.price}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pilih Warna</h3>
                <div className="flex flex-wrap gap-3">
                  {car.colors.map((color: any) => (
                    <button
                      key={color.value}
                      onClick={() => setSelectedColor(color.value)}
                      className={`relative w-12 h-12 rounded-full border-2 transition-all ${
                        selectedColor === color.value ? 'border-red-600 scale-110' : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {selectedColor === color.value && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-white drop-shadow-lg" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Fitur Utama</h3>
                <div className="grid grid-cols-2 gap-3">
                  {car.features.slice(0, 4).map((feature: string, index: number) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold">
                  <Car className="mr-2 w-5 h-5" />
                  Pesan Test Drive
                </Button>
                <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 text-lg font-semibold">
                  <Download className="mr-2 w-5 h-5" />
                  Download Brosur
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="specifications" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="specifications">Spesifikasi</TabsTrigger>
              <TabsTrigger value="features">Fitur</TabsTrigger>
              <TabsTrigger value="variants">Varian & Harga</TabsTrigger>
              <TabsTrigger value="gallery">Galeri</TabsTrigger>
            </TabsList>

            <TabsContent value="specifications" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Spesifikasi Teknis</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-600">Mesin</span>
                        <span className="font-medium text-gray-900">{car.specifications.engine}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-600">Daya Maksimum</span>
                        <span className="font-medium text-gray-900">{car.specifications.power}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-600">Torsi Maksimum</span>
                        <span className="font-medium text-gray-900">{car.specifications.torque}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-600">Transmisi</span>
                        <span className="font-medium text-gray-900">{car.specifications.transmission}</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-600">Bahan Bakar</span>
                        <span className="font-medium text-gray-900">{car.specifications.fuel}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-600">Dimensi (P x L x T)</span>
                        <span className="font-medium text-gray-900">{car.specifications.dimensions}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-600">Jarak Sumbu Roda</span>
                        <span className="font-medium text-gray-900">{car.specifications.wheelbase}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-600">Kapasitas Tangki</span>
                        <span className="font-medium text-gray-900">{car.specifications.fuelTank}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="features" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Fitur Lengkap</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {car.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <Shield className="w-5 h-5 text-red-600 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="variants" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Varian dan Harga OTR</h3>
                  <div className="space-y-4">
                    {car.variants.map((variant: any, index: number) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{variant.name}</h4>
                          <p className="text-sm text-gray-600">Tipe {variant.name.split(' ')[1]}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-red-600">{variant.price}</div>
                          <Button size="sm" className="mt-2 bg-red-600 hover:bg-red-700">
                            Ajukan Kredit
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="gallery" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Galeri Foto</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {car.images.map((image: string, index: number) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative overflow-hidden rounded-lg border-2 transition-all ${
                          selectedImage === index ? 'border-red-600' : 'border-transparent'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${car.name} ${index + 1}`}
                          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </button>
                    ))}

                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      {/* Footer */}
    <Footer /> {/* ✅ panggil footer global */}
    </div>
  )
}