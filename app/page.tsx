import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Shield,
  Clock,
  Users,
  Award,
  Sparkles,
  Home,
  Building,
  SprayCanIcon as Spray,
  Wrench,
  ChevronRight,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const services = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Deep Cleaning",
      description: "Comprehensive cleaning services for homes and offices with eco-friendly products.",
      features: ["Eco-friendly products", "Professional equipment", "Trained staff"],
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Commercial Cleaning",
      description: "Reliable cleaning solutions for offices, retail spaces, and commercial buildings.",
      features: ["Flexible scheduling", "Quality assurance", "Competitive pricing"],
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Residential Cleaning",
      description: "Regular and one-time cleaning services for your home with attention to detail.",
      features: ["Regular maintenance", "One-time cleaning", "Move-in/out cleaning"],
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Maintenance Services",
      description: "Complete maintenance solutions including plumbing, electrical, and HVAC services.",
      features: ["24/7 emergency", "Preventive maintenance", "Licensed technicians"],
    },
    {
      icon: <Spray className="h-8 w-8" />,
      title: "Disinfection Services",
      description: "Professional sanitization and disinfection services for health and safety.",
      features: ["Hospital-grade disinfectants", "COVID-19 protocols", "Certified processes"],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Specialized Cleaning",
      description: "Carpet cleaning, window cleaning, and other specialized cleaning services.",
      features: ["Advanced equipment", "Specialized techniques", "Quality guarantee"],
    },
  ]

  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      company: "Dubai Marina Towers",
      rating: 5,
      text: "Elegant Services has been maintaining our commercial building for over 2 years. Their professionalism and attention to detail is outstanding.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Sarah Johnson",
      company: "Villa Owner, Emirates Hills",
      rating: 5,
      text: "The team is reliable, thorough, and always goes above and beyond. I highly recommend their residential cleaning services.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Mohammed Hassan",
      company: "Office Manager, DIFC",
      rating: 5,
      text: "Excellent service quality and competitive pricing. They handle all our office cleaning needs efficiently and professionally.",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
    { number: "100%", label: "Satisfaction Rate" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-blue-900">Elegant Services</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-blue-900 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-blue-900 hover:text-blue-600 font-medium">
                About
              </Link>
              <Link href="/services" className="text-blue-900 hover:text-blue-600 font-medium">
                Services
              </Link>
              <Link href="/contact" className="text-blue-900 hover:text-blue-600 font-medium">
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="hidden md:flex border-blue-200 text-blue-700 hover:bg-blue-50"
              >
                <Phone className="h-4 w-4 mr-2" />
                +971 50 123 4567
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-yellow-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">⭐ Trusted by 500+ Clients in UAE</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
                  Professional
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-500">
                    {" "}
                    Cleaning{" "}
                  </span>
                  & Maintenance Services
                </h1>
                <p className="text-lg text-blue-700 max-w-xl">
                  Experience excellence with our comprehensive cleaning and maintenance solutions across the UAE. We
                  deliver quality, reliability, and peace of mind for your home and business.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8"
                >
                  Book Service Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-blue-900">{stat.number}</div>
                    <div className="text-sm text-blue-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Professional cleaning team"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-200 to-yellow-200 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Comprehensive Solutions for Every Need
            </h2>
            <p className="text-lg text-blue-600 max-w-2xl mx-auto">
              From residential cleaning to commercial maintenance, we provide professional services tailored to meet
              your specific requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-blue-100 hover:border-blue-200"
              >
                <CardContent className="p-8">
                  <div className="text-blue-600 mb-4 group-hover:text-blue-700 transition-colors">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">{service.title}</h3>
                  <p className="text-blue-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-blue-700">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 group-hover:bg-blue-600 group-hover:text-white transition-all"
                  >
                    Get Quote
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Professional cleaning equipment"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-8">
              <div>
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 mb-4">Why Choose Us</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Excellence in Every Detail</h2>
                <p className="text-lg text-blue-600">
                  With years of experience serving the UAE market, we understand the unique needs of our clients and
                  deliver solutions that exceed expectations.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Licensed & Insured</h3>
                    <p className="text-blue-600">Fully licensed and insured for your peace of mind and protection.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">24/7 Availability</h3>
                    <p className="text-blue-600">
                      Round-the-clock support and emergency services when you need them most.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Trained Professionals</h3>
                    <p className="text-blue-600">
                      Skilled and experienced team members committed to delivering quality results.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Quality Guarantee</h3>
                    <p className="text-blue-600">
                      100% satisfaction guarantee with quality assurance on all our services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 mb-4">Client Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-blue-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-blue-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-blue-700 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-blue-900">{testimonial.name}</div>
                      <div className="text-sm text-blue-600">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Experience Excellence?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free quote today and discover why we're the preferred choice for cleaning and maintenance services
              in the UAE.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 px-8">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +971 50 123 4567
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-700 px-8"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">Elegant Services</span>
              </div>
              <p className="text-blue-200">
                Professional cleaning and maintenance services across the UAE. Your trusted partner for quality and
                reliability.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-blue-700 text-blue-200 hover:bg-blue-800">
                  Facebook
                </Button>
                <Button size="sm" variant="outline" className="border-blue-700 text-blue-200 hover:bg-blue-800">
                  Instagram
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <Link href="/services/deep-cleaning" className="hover:text-white">
                    Deep Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/services/commercial" className="hover:text-white">
                    Commercial Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/services/residential" className="hover:text-white">
                    Residential Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/services/maintenance" className="hover:text-white">
                    Maintenance Services
                  </Link>
                </li>
                <li>
                  <Link href="/services/disinfection" className="hover:text-white">
                    Disinfection
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-blue-200">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3" />
                  +971 50 123 4567
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3" />
                  info@elegantservices.ae
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1" />
                  <div>
                    Dubai, UAE
                    <br />
                    Available across all Emirates
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-200">
            <p>&copy; 2025 Elegant Services. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg">
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
