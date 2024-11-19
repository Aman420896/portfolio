'use client'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from '@/components/ui/button'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Mail, Twitter, Linkedin } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "@/app/context/ThemeContext"
import AnimateInView from '@/app/components/AnimateInView'
import RevealFooter from '@/app/components/RevealFooter'

export default function Component() {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen pt-[85px] ${theme === 'dark' ? 'bg-black' : 'bg-white'} ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
      <main className="container relative z-10 mx-auto px-8 sm:px-12 md:px-24 lg:px-40 xl:px-52 py-10 md:py-20">
        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col justify-center py-20">
          <AnimateInView>
            <h1 className={`text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl font-bold ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'} mb-2`}>
              Aman Gupta.
            </h1>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold mb-12 md:mb-20">
              Product Designer.
            </h2>
          </AnimateInView>

          {/* Experience */}
          <AnimateInView className="delay-200">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'} mb-4`}>CURRENT</h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  Freelance Product Designer at
                  <Link href="#" className={`${theme === 'dark' ? 'text-white' : 'text-black'} hover:underline ml-1`}>
                    Friendly Studio
                  </Link>
                </p>
              </div>
              <div>
                <h3 className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'} mb-4`}>SOON</h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  Incoming Product Designer at
                  <Link href="#" className={`${theme === 'dark' ? 'text-white' : 'text-black'} hover:underline ml-1`}>
                    Facebook
                  </Link>
                </p>
              </div>
              <div>
                <h3 className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'} mb-4`}>PAST</h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  Former Intern at Facebook,
                  <Link href="#" className={`${theme === 'dark' ? 'text-white' : 'text-black'} hover:underline mx-1`}>
                    Digital
                  </Link>
                  and
                  <Link href="#" className={`${theme === 'dark' ? 'text-white' : 'text-black'} hover:underline ml-1`}>
                    Other
                  </Link>
                </p>
              </div>
            </div>
          </AnimateInView>
        </section>

        {/* Featured Projects */}
        <AnimateInView>
          <section className="mb-32">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'} mb-8 md:mb-16`}>
              Featured Projects.
            </h2>

            {/* Facebook Project */}
            <div className="mb-20">
              <div className="flex gap-2 mb-4">
                <Badge variant="outline" className={`${theme === 'dark' ? 'text-gray-400 border-gray-800' : 'text-gray-600 border-gray-300'}`}>
                  PRODUCT DESIGN
                </Badge>
                <Badge variant="outline" className={`${theme === 'dark' ? 'text-gray-400 border-gray-800' : 'text-gray-600 border-gray-300'}`}>
                  INTERNSHIP
                </Badge>
              </div>
              <Link href="#" className="group block mb-4">
                <h3 className="text-2xl font-bold inline-flex items-center gap-2">
                  Facebook Internship
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </h3>
              </Link>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-8`}>A summary of my growth and experiences working at Facebook.</p>
              <Card className={theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-gray-100 border-gray-200'}>
                <CardContent className="p-8 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg"
                    alt="Facebook Logo"
                    width={200}
                    height={40}
                    className={theme === 'dark' ? 'opacity-60' : 'opacity-80'}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Helios Project */}
            <div className="mb-20">
              <div className="flex gap-2 mb-4">
                <Badge variant="outline" className={`${theme === 'dark' ? 'text-gray-400 border-gray-800' : 'text-gray-600 border-gray-300'}`}>
                  PRODUCT DESIGN
                </Badge>
                <Badge variant="outline" className={`${theme === 'dark' ? 'text-gray-400 border-gray-800' : 'text-gray-600 border-gray-300'}`}>
                  CASE STUDY
                </Badge>
              </div>
              <Link href="#" className="group block mb-4">
                <h3 className="text-2xl font-bold inline-flex items-center gap-2">
                  Helios
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </h3>
              </Link>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-8`}>Building a community of entrepreneurship and talent.</p>
              <Card className={theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-gray-100 border-gray-200'}>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Image
                      src="/placeholder.svg"
                      alt="Helios UI Screenshot 1"
                      width={500}
                      height={300}
                      className="rounded-lg w-full"
                    />
                    <Image
                      src="/placeholder.svg"
                      alt="Helios UI Screenshot 2"
                      width={500}
                      height={300}
                      className="rounded-lg w-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Misc Projects */}
            <div>
              <div className="flex gap-2 mb-4">
                <Badge variant="outline" className={`${theme === 'dark' ? 'text-gray-400 border-gray-800' : 'text-gray-600 border-gray-300'}`}>
                  GALLERY
                </Badge>
                <Badge variant="outline" className={`${theme === 'dark' ? 'text-gray-400 border-gray-800' : 'text-gray-600 border-gray-300'}`}>
                  UI DESIGN
                </Badge>
              </div>
              <Link href="#" className="group block mb-4">
                <h3 className="text-2xl font-bold inline-flex items-center gap-2">
                  Misc Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </h3>
              </Link>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-8`}>Collection of UI explorations and miscellaneous projects.</p>
              <Card className={theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-gray-100 border-gray-200'}>
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Image
                        key={i}
                        src="/placeholder.svg"
                        alt={`UI Screenshot ${i}`}
                        width={200}
                        height={400}
                        className="rounded-lg w-full"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </AnimateInView>

        {/* Contact */}
        <AnimateInView>
          <section className="mb-32">
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Get in Touch</h2>
            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
              Hello! For work, coffee chats, advice, or just about your favorite anime :)
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#" className={`flex items-center gap-2 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
              <Link href="#" className={`flex items-center gap-2 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
                <Twitter className="h-4 w-4" />
                Twitter
              </Link>
              <Link href="#" className={`flex items-center gap-2 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
                <Mail className="h-4 w-4" />
                Email
              </Link>
            </div>
          </section>
        </AnimateInView>
      </main>
      <RevealFooter />
    </div>
  )
}