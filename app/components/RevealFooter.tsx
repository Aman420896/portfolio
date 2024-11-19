'use client'

import { useTheme } from "@/app/context/ThemeContext"

export default function RevealFooter() {
  const { theme } = useTheme()

  return (
    <div 
      className="relative h-[120px] -mt-[120px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+120px)] -top-[100vh]">
        <div className="h-[120px] sticky top-[calc(100vh-120px)]">
          <footer className={`
            w-full h-[120px]
            ${theme === 'dark' ? 'bg-zinc-900' : 'bg-zinc-100'} 
            ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} 
            text-sm py-8 border-t
            ${theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'}
          `}>
            <div className="container mx-auto px-8 sm:px-12 md:px-24 lg:px-40 xl:px-52">
              <p>
                Designed and coded by Aman Gupta{" "}
                <span className={theme === 'dark' ? 'text-gray-600' : 'text-gray-400'}>
                  —much love to After and Over for all help
                </span>
              </p>
              <p className="mt-2">© Aman Gupta 2023</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}


