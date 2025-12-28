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
import { motion, type Variants } from 'framer-motion'



export default function CarDetailPage() {
  const params = useParams()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState('red')
  const [selectedImage, setSelectedImage] = useState(0)


  const carId = params.id as string

  // Car data based on ID
  const carData: Record<string, any> = {
'ayla': {
  name: 'All New Ayla',
  category: 'Hatchback',
  price: 'Rp 137.150.000', // Harga mulai dari tipe 1.0 M setelah diskon 20jt
  story: {
    tagline: 'The Modern Icon',
    quote: 'Sahabat setia untuk mobilitas perkotaan yang lincah dan efisien.',
    description: 'All New Ayla hadir dengan desain yang semakin tajam dan modern, sempurna untuk menjawab tantangan jalanan kota yang padat. Dibangun di atas platform baru yang lebih stabil, mobil ini menawarkan efisiensi bahan bakar luar biasa tanpa mengorbankan kenyamanan berkendara bagi Anda yang berjiwa muda.'
  },
  mainImage: '/product/product-ayla.png',
  gallery: [
    '/cars/ayla/ayla-red.png',
    '/cars/ayla/ayla-white.png',
    '/cars/ayla/ayla-black.png',
    '/cars/ayla/ayla-silver.png',
    '/cars/ayla/ayla-yellow.png',
    '/cars/ayla/ayla-orange.png',
    '/cars/ayla/ayla-grey.png'
  ],
  specifications: {
    engine: '1.0L / 1.2L 3-Cylinder DOHC',
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
    // Tipe 1.0 (Potongan Rp 20.000.000)
    { name: 'ALL NEW AYLA 1.0 M MT', price: '137,150,000' },
    { name: 'ALL NEW AYLA 1.0 X MT', price: '150,050,000' },
    { name: 'ALL NEW AYLA 1.0 X CVT', price: '170,050,000' },
    { name: 'ALL NEW AYLA 1.0 X ADS MT', price: '155,950,000' },
    { name: 'ALL NEW AYLA 1.0 X ADS CVT', price: '175,950,000' },
    
    // Tipe 1.2 (Potongan Rp 15.000.000)
    { name: 'ALL NEW AYLA 1.2 R MT', price: '167,150,000' },
    { name: 'ALL NEW AYLA 1.2 R CVT', price: '187,150,000' },
    { name: 'ALL NEW AYLA 1.2 R ADS MT', price: '173,050,000' },
    { name: 'ALL NEW AYLA 1.2 R ADS CVT', price: '193,050,000' }
  ]
},

'sigra': {
  name: 'Sigra New',
  category: 'MPV / LCGC',
  price: 'Rp 141.400.000', // Harga mulai dari tipe 1.0 D setelah diskon 20jt
  story: {
    tagline: 'Sahabat Keluarga',
    quote: 'Impian keluarga muda Indonesia untuk perjalanan yang lebih bermakna.',
    description: 'Sigra adalah solusi cerdas bagi keluarga yang menginginkan kenyamanan 7 penumpang dengan harga terjangkau. Efisiensi bahan bakarnya yang luar biasa menjadikannya pilihan favorit untuk menemani aktivitas harian hingga momen spesial bersama orang tercinta.'
  },
  mainImage: '/product/product-sigra.png',
  gallery: [
    '/cars/sigra/sigra-main.png',
    '/cars/sigra/sigra-interior.png',
    '/cars/sigra/sigra-side.png'
  ],
  specifications: {
    engine: '1.0L / 1.2L VVT-i',
    power: '67 - 88 PS',
    torque: '89 - 108 Nm',
    transmission: '5-Speed Manual / 4-Speed Automatic',
    fuel: 'Bensin',
    dimensions: '4,110 x 1,655 x 1,600 mm',
    wheelbase: '2,525 mm',
    seating: '7 Kursi',
    fuelTank: '35 Liter'
  },
  features: [
    'Dual SRS Airbags',
    'Front Sensor',
    'Rear Parking Sensor',
    'Electric Retractable Mirror',
    'LED Headlamp',
    'Rear AC Vent',
    '14 Inch Alloy Wheel',
    'Smartphone Slot'
  ],
  variants: [
    // Tipe 1.0 (Potongan Rp 20.000.000 dari Harga OTR DIY)
    { name: 'SIGRA 1.0 D MC MT', price: '141,400,000' },
    { name: 'SIGRA 1.0 M MC MT', price: '153,900,000' },
    
    // Tipe 1.2 (Potongan Rp 15.000.000 dari Harga OTR DIY)
    { name: 'SIGRA 1.2 X MC MT', price: '162,850,000' },
    { name: 'SIGRA 1.2 X MC AT', price: '176,250,000' },
    { name: 'SIGRA 1.2 X DLX MC MT', price: '168,450,000' },
    { name: 'SIGRA 1.2 X DLX MC AT', price: '181,750,000' },
    { name: 'SIGRA 1.2 R MC MT', price: '169,650,000' },
    { name: 'SIGRA 1.2 R MC AT', price: '184,650,000' },
    { name: 'SIGRA 1.2 R DLX MC MT', price: '173,450,000' },
    { name: 'SIGRA 1.2 R DLX MC AT', price: '188,450,000' }
  ]
},

'xenia': {
  name: 'All New Xenia',
  category: 'MPV',
  price: 'Rp 216.750.000', // Harga mulai dari tipe 1.3 M setelah diskon 25jt
  story: {
    tagline: 'The Next Level Family Car',
    quote: 'Kenyamanan kabin luas untuk kebahagiaan setiap anggota keluarga.',
    description: 'Sebagai MPV legendaris, All New Xenia kini hadir dengan platform baru yang memberikan kenyamanan ekstra melalui penggerak roda depan (FWD). Kabin yang senyap dan fitur keselamatan canggih ASA (Advanced Safety Assist) menjadikannya pilihan ideal bagi keluarga yang mengutamakan keamanan dan kenyamanan dalam perjalanan jauh.'
  },
  mainImage: '/product/product-xenia.png',
  gallery: [
    '/cars/xenia/xenia-main.png',
    '/cars/xenia/xenia-interior.png',
    '/cars/xenia/xenia-side.png'
  ],
  specifications: {
    engine: '1.3L / 1.5L 4-Cylinder DOHC Dual VVT-i',
    power: '98 - 106 PS',
    torque: '122 - 138 Nm',
    transmission: '5-Speed Manual / CVT',
    fuel: 'Bensin',
    dimensions: '4,395 x 1,730 x 1,700 mm',
    wheelbase: '2,750 mm',
    seating: '7 Kursi',
    fuelTank: '43 Liter'
  },
  features: [
    'Advanced Safety Assist (ASA)',
    'Dual SRS Airbags',
    'ABS, EBD & VSC',
    'Hill Start Assist (HSA)',
    'LED Headlamp & Rear Combi Lamp',
    'Around View Monitor',
    'Keyless Entry & Push Start Button',
    'Digital AC'
  ],
  variants: [
    // Tipe 1.3 (Semua dipotong Rp 25.000.000 dari Harga OTR DIY)
    { name: 'ALL NEW XENIA 1.3 M MT', price: '216,750,000' },
    { name: 'ALL NEW XENIA 1.3 X MT', price: '219,950,000' },
    { name: 'ALL NEW XENIA 1.3 X CVT', price: '237,350,000' },
    { name: 'ALL NEW XENIA 1.3 R MT', price: '230,950,000' },
    { name: 'ALL NEW XENIA 1.3 R CVT', price: '248,450,000' },
    { name: 'ALL NEW XENIA 1.3 R ADS CVT', price: '257,450,000' },

    // Tipe 1.5 (Semua dipotong Rp 24.000.000 dari Harga OTR DIY)
    { name: 'ALL NEW XENIA 1.5 R MT', price: '247,150,000' },
    { name: 'ALL NEW XENIA 1.5 R CVT', price: '261,550,000' },
    { name: 'ALL NEW XENIA 1.5 R ADS CVT', price: '270,650,000' },
    { name: 'ALL NEW XENIA 1.5 R CVT ASA', price: '271,450,000' },
    { name: 'ALL NEW XENIA 1.5 R CVT ASA+ SC', price: '283,950,000' }
  ]
},

'terios': {
  name: 'New Terios MC',
  category: 'SUV',
  price: 'Rp 239.250.000', // Harga tipe X MT setelah diskon 30jt
  story: {
    tagline: 'Your Adventurous Partner',
    quote: 'Ketangguhan SUV sejati untuk menaklukkan segala medan petualangan.',
    description: 'New Terios hadir dengan desain yang lebih segar dan maskulin, siap menemani petualangan Anda dan keluarga. Dengan ground clearance tinggi, suspensi kokoh, dan fitur keselamatan yang mumpuni, mobil ini memberikan kepercayaan diri lebih saat menjelajahi berbagai destinasi impian Anda.'
  },
  mainImage: '/product/product-terios.png',
  gallery: [
    '/cars/terios/terios-main.png',
    '/cars/terios/terios-interior.png',
    '/cars/terios/terios-side.png'
  ],
  specifications: {
    engine: '1.5L 2NR-VE DOHC Dual VVT-i',
    power: '104 PS @ 6,000 rpm',
    torque: '136 Nm @ 4,200 rpm',
    transmission: '5-Speed Manual / 4-Speed Automatic',
    fuel: 'Bensin',
    dimensions: '4,455 x 1,695 x 1,705 mm',
    wheelbase: '2,685 mm',
    seating: '7 Kursi',
    fuelTank: '45 Liter'
  },
  features: [
    '6 Airbags (Tipe R Custom)',
    'Around View Monitor',
    'Wireless Charger',
    'Smartphone Connection',
    'ABS & EBD',
    'Vehicle Stability Control (VSC)',
    'Hill Start Assist (HSA)',
    'Eco Idle'
  ],
  variants: [
    // Tipe X (Potongan Rp 30.000.000 dari Harga OTR DIY)
    { name: 'TERIOS X MT MC', price: '239,250,000' },
    { name: 'TERIOS X AT MC', price: '249,550,000' },
    { name: 'TERIOS X ADS MT MC', price: '251,200,000' },
    { name: 'TERIOS X ADS AT MC', price: '261,500,000' },

    // Tipe R (Potongan Rp 25.000.000 dari Harga OTR DIY)
    { name: 'TERIOS R MT MC', price: '268,850,000' },
    { name: 'TERIOS R AT MC', price: '281,350,000' },
    { name: 'TERIOS R ADS MT MC', price: '278,850,000' },
    { name: 'TERIOS R ADS AT MC', price: '291,350,000' },
    { name: 'TERIOS R CUSTOM MT MC', price: '291,650,000' },
    { name: 'TERIOS R CUSTOM AT MC', price: '304,150,000' }
  ]
},

'rocky': {
  name: 'Daihatsu Rocky',
  category: 'Compact SUV',
  price: 'Rp 201.900.000', // Harga terendah (tipe 1.2 M MT) setelah diskon 25jt
  story: {
    tagline: 'Sahabat Eksis',
    quote: 'Performa turbo yang bertenaga dalam desain yang kompak dan berani.',
    description: 'Daihatsu Rocky hadir sebagai perpaduan sempurna antara gaya hidup urban dan performa SUV modern. Dengan pilihan mesin 1.2L yang efisien atau 1.0L Turbo yang responsif, Rocky siap menemani jiwa muda Anda yang dinamis dan berani tampil beda di segala medan perkotaan.'
  },
  mainImage: '/product/product-rocky.png',
  gallery: [
    '/cars/rocky/rocky-main.png',
    '/cars/rocky/rocky-interior.png',
    '/cars/rocky/rocky-side.png'
  ],
  specifications: {
    engine: '1.2L WA-VE / 1.0L 1KR-VET Turbocharged',
    power: '88 - 98 PS',
    torque: '113 - 140 Nm',
    transmission: '5-Speed Manual / CVT',
    fuel: 'Bensin',
    dimensions: '4,030 x 1,710 x 1,635 mm',
    wheelbase: '2,525 mm',
    seating: '5 Kursi',
    fuelTank: '36 Liter'
  },
  features: [
    'Advanced Safety Assist (ASA)',
    'Full Digital Meter Cluster',
    'Touchscreen Audio 7/9 Inch',
    'LED Headlamp',
    '16/17 Inch Alloy Wheel',
    'Subwoofer (Tipe R TC)',
    'Hill Start Assist',
    'Vehicle Stability Control'
  ],
  variants: [
    // Varian Rocky 1.2 (Potongan Rp 25.000.000 dari Harga OTR DIY)
    { name: 'ROCKY 1.2 M MT', price: '201,900,000' }, //
    { name: 'ROCKY 1.2 M CVT', price: '219,800,000' }, //
    { name: 'ROCKY 1.2 X MT', price: '216,000,000' }, //
    { name: 'ROCKY 1.2 X CVT', price: '233,900,000' }, //
    { name: 'ROCKY 1.2 X ADS MT', price: '224,100,000' }, //
    { name: 'ROCKY 1.2 X ADS CVT', price: '242,000,000' }, //

    // Varian Rocky 1.0 Turbo (Potongan Rp 25.000.000 dari Harga OTR DIY)
    { name: 'ROCKY 1.0 R TC MT', price: '238,500,000' }, //
    { name: 'ROCKY 1.0 R TC CVT', price: '253,500,000' }, //
    { name: 'ROCKY 1.0 R TC ADS MT', price: '246,600,000' }, //
    { name: 'ROCKY 1.0 R TC ADS CVT', price: '261,600,000' }, //
    { name: 'ROCKY 1.0 R TC ASA CVT', price: '263,400,000' }, //
    { name: 'ROCKY 1.0 R TC ASA+ SC CVT', price: '275,900,000' } //
  ]
},

'granmax-pickup': {
  name: 'Gran Max Pickup',
  category: 'Commercial',
  price: 'Rp 151.150.000', // Harga tipe 1.3 STD setelah diskon 30jt
  story: {
    tagline: 'Sahabat Bisnis',
    quote: 'Andalan utama untuk kembangkan usaha Anda tanpa batas.',
    description: 'Gran Max Pickup telah lama menjadi kepercayaan pengusaha Indonesia karena ketangguhannya di berbagai medan. Dengan bak yang luas dan kapasitas angkut yang maksimal, mobil ini dirancang untuk meningkatkan efisiensi operasional bisnis Anda, menjadikannya partner kerja yang paling menguntungkan.'
  },
  mainImage: '/product/product-granmaxpu.png',
  gallery: [
    '/cars/granmax/granmax-pu-main.png',
    '/cars/granmax/granmax-pu-side.png',
    '/cars/granmax/granmax-pu-back.png'
  ],
  specifications: {
    engine: '1.3L K3-DE / 1.5L 2NR-VE Dual VVT-i',
    power: '88 - 97 PS',
    torque: '115 - 134 Nm',
    transmission: '5-Speed Manual',
    fuel: 'Bensin',
    dimensions: '4,195 x 1,665 x 1,850 mm',
    wheelbase: '2,650 mm',
    seating: '3 Kursi',
    bakSize: '2,350 x 1,585 x 300 mm'
  },
  features: [
    'Bak Luas & Kokoh',
    'Mesin Bertenaga & Irit',
    'Chassis Kuat',
    'Tahan Banjir',
    'Door Armrest',
    'Air Conditioner (Tipe AC PS)',
    'Power Steering (Tipe AC PS)',
    'Slide Seat (Driver)'
  ],
  variants: [
    // Tipe 1.3 (Potongan Rp 30.000.000 dari Harga OTR DIY)
    { name: 'PU 1.3 STD / 3W FH E4', price: '151,150,000' },
    { name: 'PU BOX 1.3 PT GL E4', price: '171,750,000' },
    { name: 'PU BOX 1.3 ALUMINIUM GL E4', price: '172,050,000' },

    // Tipe 1.5 (Potongan Rp 40.000.000 dari Harga OTR DIY)
    { name: 'PU 1.5 STD / 3W FH MC', price: '148,950,000' },
    { name: 'PU AC PS 1.5 FH MC', price: '155,950,000' },
    { name: 'PU BOX 1.5 PT MC', price: '171,050,000' },
    { name: 'PU BOX 1.5 ALUMINIUM PT MC', price: '171,350,000' },
    { name: 'PU AC PS BOX 1.5 PT MC', price: '178,050,000' },
    { name: 'PU AC PS BOX 1.5 ALUMINIUM PT MC', price: '178,350,000' }
  ]
},

'granmax-minibus': {
  name: 'Gran Max Minibus & BV',
  category: 'Commercial / Minibus',
  price: 'Rp 175.250.000', // Harga tipe BV setelah diskon 17jt
  story: {
    tagline: 'Sahabat Bisnis & Keluarga',
    quote: 'Solusi ruang maksimal untuk segala kebutuhan usaha dan transportasi.',
    description: 'Gran Max Minibus dan Blind Van adalah standar kendaraan komersial yang menawarkan kapasitas kargo terbesar di kelasnya. Baik untuk angkutan barang usaha (BV) maupun transportasi penumpang (MB), kendaraan ini dirancang dengan durabilitas tinggi dan mesin yang tangguh untuk mendukung produktivitas Anda setiap hari.'
  },
  mainImage: '/product/product-granmaxmb.png',
  gallery: [
    '/cars/granmax/granmax-mb-main.png',
    '/cars/granmax/granmax-mb-interior.png',
    '/cars/granmax/granmax-mb-side.png'
  ],
  specifications: {
    engine: '1.3L K3-DE / 1.5L 2NR-VE Dual VVT-i',
    power: '88 - 97 PS',
    torque: '115 - 134 Nm',
    transmission: '5-Speed Manual',
    fuel: 'Bensin',
    dimensions: '4,045 x 1,665 x 1,900 mm',
    wheelbase: '2,650 mm',
    seating: '2 (BV) / 8-9 (MB) Kursi',
    door: 'Sliding Door (Pintu Geser)'
  },
  features: [
    'Kapasitas Bagasi Luas',
    'Pintu Geser Praktis',
    'Mesin Irit & Bertenaga',
    'Chassis Tangguh',
    'Power Steering (Tipe High)',
    'Air Conditioner (Tipe AC)',
    'Posisi Duduk Ergonomis',
    'Lantai Kabin Rata'
  ],
  variants: [
    // Varian Blind Van (Potongan Rp 17.000.000 dari Harga OTR DIY)
    { name: 'GRAN MAX BV 1.3 AC FH E4', price: '175,250,000' }, //
    
    // Varian Minibus (Potongan Rp 20.000.000 dari Harga OTR DIY)
    { name: 'GRAN MAX MB 1.3 D FH E4', price: '199,350,000' }, //
    { name: 'GRAN MAX MB 1.3 D FF FH E4', price: '206,050,000' }, //
    { name: 'GRAN MAX MB 1.5 D PS MC', price: '219,950,000' }, //
    { name: 'GRAN MAX MB 1.3 D FF FH E4 AMBULANCE', price: '233,650,000' } //
  ]
},

'sirion': {
  name: 'New Sirion',
  category: 'City Car / Hatchback',
  price: 'Rp 225.450.000', // Harga tipe X CVT setelah diskon 20jt
  story: {
    tagline: 'The Real Smart City Car',
    quote: 'Lincah, modern, dan sarat teknologi untuk gaya hidup urban yang dinamis.',
    description: 'New Sirion hadir sebagai sahabat cerdas bagi Anda yang aktif di perkotaan. Dengan transmisi D-CVT yang halus dan fitur kenyamanan modern seperti Air Purifier serta Smart Key, mobil ini menawarkan sensasi berkendara yang premium dan lincah, menjadikannya pilihan tepat bagi generasi muda yang mengutamakan gaya dan efisiensi.'
  },
  mainImage: '/product/product-sirion.png',
  gallery: [
    '/cars/sirion/sirion-main.png',
    '/cars/sirion/sirion-interior.png',
    '/cars/sirion/sirion-side.png'
  ],
  specifications: {
    engine: '1.3L 1NR-VE DOHC Dual VVT-i',
    power: '95 PS @ 6,000 rpm',
    torque: '121 Nm @ 4,200 rpm',
    transmission: 'D-CVT (Continuously Variable Transmission)',
    fuel: 'Bensin',
    dimensions: '3,895 x 1,735 x 1,525 mm',
    wheelbase: '2,500 mm',
    seating: '5 Kursi',
    fuelTank: '36 Liter'
  },
  features: [
    'Transmisi D-CVT Smooth & Irit',
    'Digital AC dengan Air Purifier',
    'Smart Key & Start Stop Button',
    'LED Headlamp with Follow Me Home',
    'Audio 7" with Smartphone Connection',
    '4 Airbags',
    'HSA (Hill Start Assist)',
    'VSC (Vehicle Stability Control)'
  ],
  variants: [
    // Potongan Rp 20.000.000 dari Harga OTR DIY
    { name: 'NEW SIRION X CVT', price: '225,450,000' }, 
    { name: 'NEW SIRION R CVT', price: '234,650,000' }
  ]
},

  }

      const car = carData[carId]
      if (!car) {
        return (
          <div className="min-h-screen flex items-center justify-center">
            <p className="text-gray-500">
              Produk tidak ditemukan
            </p>
          </div>
        )
      }

      const handleTestDrive = () => {
        const phoneNumber = '6282174635218' // ganti dengan nomor WA sales
        const message = `Halo, saya tertarik dan ingin mengajukan test drive untuk mobil ${car.name}. Mohon informasinya. Terima kasih.`
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        window.open(url, '_blank')
      }

      const brochureMap: Record<string, string> = {
        'ayla': '/brosur/all-new-ayla.pdf',
        'sigra': '/brosur/sigra.pdf',
        'xenia': '/brosur/all-new-xenia.pdf',
        'terios': '/brosur/terios.pdf',
        'rocky': '/brosur/rocky.pdf',
        'granmax-pickup': '/brosur/granmax-pickup.pdf',
        'granmax-minibus': '/brosur/granmax-minibus.pdf',
        'sirion': '/brosur/sirion.pdf'
      }

      // 🔹 Function download (INI STEP 2 YANG KAMU TANYA ADA DI SINI)
      const handleDownloadBrochure = () => {
        const brochureUrl = brochureMap[carId]
        if (!brochureUrl) return

        const link = document.createElement('a')
        link.href = brochureUrl
        link.download = `Brosur-${car.name}.pdf`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }

      const handleAjukanKredit = (variantName: string) => {
        const phoneNumber = '6282174635218' // ganti nomor WA sales
        const message = `Halo, saya tertarik mengajukan kredit untuk mobil ${car.name} tipe ${variantName}. Mohon dibantu simulasi DP, cicilan, dan tenor. Terima kasih.`
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        window.open(url, '_blank')
      }

const pageVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut'
    }
  }
}

const heroContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const heroItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}



  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="show"
      className="min-h-screen bg-white"
    >

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

{/* Hero Section - Perubahan ke Tema Dark Elegan */}
      <motion.section
  initial={{ opacity: 0, scale: 0.96 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7, ease: 'easeOut' }}
  className="py-16 bg-[#1A1A1A] text-white"
>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Area Gambar dengan Efek Shadow */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative group"
            >

              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-transparent rounded-xl blur opacity-20 transition duration-1000 group-hover:opacity-40"></div>
              <img
                src={car.mainImage || car.gallery?.[0]} 
                alt={car.name}
                className="relative w-full h-[450px] object-cover rounded-2xl shadow-2xl border border-white/5"
              />
              <Badge className="absolute top-4 left-4 bg-red-600 text-white border-none px-4 py-1 font-bold">
                {car.category}
              </Badge>
            </motion.div>


            {/* Area Teks dengan Tipografi Premium */}
            <motion.div
              variants={heroContainer}
              initial="hidden"
              animate="show"
              className="space-y-6"
            >

              <motion.h1
                variants={heroItem}
                className="text-5xl font-extrabold tracking-tight uppercase"
              >
                {car.name}
              </motion.h1>


              <div className="space-y-4">
                <motion.p
                  variants={heroItem}
                  className="text-xl text-gray-300 leading-relaxed font-light"
                >
                  {car.story.description}
                </motion.p>

                <div className="h-1 w-20 bg-red-600"></div> {/* Aksen garis merah */}
                  <motion.p
                    variants={heroItem}
                    className="text-lg text-gray-400 italic border-l-2 border-gray-700 pl-4"
                  >
                    "{car.story.quote}"
                  </motion.p>

              </div>

              {/* Tombol CTA dengan Desain Modern */}
              <motion.div
                variants={heroItem}
                className="flex flex-col sm:flex-row gap-4 pt-6"
              >

                <Button
                  size="lg"
                  onClick={handleTestDrive}
                  className="bg-red-600 hover:bg-red-700 text-white px-10 py-7 text-lg font-bold rounded-full transition-all shadow-lg hover:shadow-red-900/20"
                >
                  <Car className="mr-2 w-6 h-6" />
                  Pesan Test Drive
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleDownloadBrochure}
                  // bg-white: background awal putih pekat
                  // text-black: teks awal hitam agar terlihat jelas di atas putih
                  // hover:bg-red-600: background berubah jadi merah saat di-hover
                  // hover:text-white: teks berubah jadi putih saat di-hover
                  // border-none: menghapus garis tepi agar terlihat lebih modern/clean
                  className="bg-white text-black border-none hover:bg-red-600 hover:text-white px-10 py-7 text-lg font-bold rounded-full transition-all shadow-lg"
                >
                  <Download className="mr-2 w-6 h-6" />
                  Download Brosur
                </Button>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </motion.section>



      {/* Detailed Information Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
        <Tabs defaultValue="variants" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                {/* Urutan Trigger tetap sama atau bisa Anda pindah ke posisi pertama jika ingin urutan tombol juga berubah */}
                <TabsTrigger value="variants" className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  Varian & Harga
                </TabsTrigger>

                <TabsTrigger value="specifications" className="flex items-center gap-2">
                  <Gauge className="w-4 h-4" />
                  Spesifikasi
                </TabsTrigger>

                <TabsTrigger value="features" className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Fitur
                </TabsTrigger>
              </TabsList>

            <TabsContent value="specifications" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Spesifikasi Teknis
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Dirancang untuk performa stabil, irit bahan bakar, dan nyaman digunakan setiap hari.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
                      <Settings className="w-6 h-6 text-red-600 mt-1" />
                      <div>
                        <p className="text-sm text-gray-500">Mesin</p>
                        <p className="font-semibold text-gray-900">
                          {car.specifications.engine}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
                      <Gauge className="w-6 h-6 text-red-600 mt-1" />
                      <div>
                        <p className="text-sm text-gray-500">Daya Maksimum</p>
                        <p className="font-semibold text-gray-900">
                          {car.specifications.power}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
                      <Wrench className="w-6 h-6 text-red-600 mt-1" />
                      <div>
                        <p className="text-sm text-gray-500">Torsi Maksimum</p>
                        <p className="font-semibold text-gray-900">
                          {car.specifications.torque}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
                      <Fuel className="w-6 h-6 text-red-600 mt-1" />
                      <div>
                        <p className="text-sm text-gray-500">Bahan Bakar</p>
                        <p className="font-semibold text-gray-900">
                          {car.specifications.fuel}
                        </p>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {car.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                          <div className="bg-red-50 p-3 rounded-full">
                            <CheckCircle className="w-6 h-6 text-red-600" />
                          </div>
                          <span className="font-bold text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="variants" className="mt-8 outline-none">
              <div className="space-y-6">
                {/* Header Info Singkat */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 px-2">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 tracking-tight">Varian & Harga OTR</h3>
                    <p className="text-gray-500 mt-1">Harga estimasi OTR wilayah Yogyakarta dan sekitarnya.</p>
                  </div>
                  <Badge variant="outline" className="w-fit mt-4 md:mt-0 border-red-200 text-red-700 bg-red-50 px-4 py-1">
                    Update Terbaru
                  </Badge>
                </div>

                {/* Grid List Varian */}
                <div className="grid gap-4">
                  {car.variants.map((variant: any, index: number) => (
                    <div 
                      key={index} 
                      className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        {/* Icon Aksen untuk mempermanis */}
                        <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 group-hover:bg-red-50 transition-colors">
                          <Car className="w-6 h-6 text-gray-400 group-hover:text-red-600" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors">
                            {variant.name}
                          </h4>
                          <p className="text-sm text-gray-500 font-medium">Transmisi {variant.name.includes('MT') ? 'Manual' : 'Otomatis/CVT'}</p>
                        </div>
                      </div>

                      <div className="flex flex-col md:items-end mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-none border-gray-100">
                        <div className="flex items-baseline gap-1">
                          <span className="text-sm font-semibold text-gray-400">Rp</span>
                          <span className="text-2xl font-black text-gray-900 tracking-tight">
                            {variant.price}
                          </span>
                        </div>
                        
                        <Button
                          size="sm"
                          className="mt-3 bg-gray-900 hover:bg-red-600 text-white rounded-xl px-8 font-bold transition-all transform active:scale-95 shadow-md hover:shadow-red-200"
                          onClick={() => handleAjukanKredit(variant.name)}
                        >
                          Ajukan Kredit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

          </Tabs>
        </div>
      </section>
      {/* Footer */}
    <Footer /> {/* ✅ panggil footer global */}
    </motion.div>

  )
}
