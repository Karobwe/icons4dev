"use client"

import { useState, useEffect } from "react"
import * as heroiconsReactSolid from "@heroicons/react/24/solid"
import * as heroiconsReactOutline from "@heroicons/react/24/outline"
import Toast from "@/components/Toast"
import Switch from "@/components/Switch"

const solidIconNames = Object.keys(heroiconsReactSolid)
const outlineIconNames = Object.keys(heroiconsReactOutline)

export default function Home() {
  const [isSolidVariant, setIsSolidVariant] = useState(true)
  const [toast, setToast] = useState({ isVisible: false, message: '' })

  const currentIconNames = isSolidVariant ? solidIconNames : outlineIconNames
  const currentIconSet = isSolidVariant ? heroiconsReactSolid : heroiconsReactOutline

  const showToast = (message) => {
    setToast({ isVisible: true, message })
    setTimeout(() => {
      setToast({ isVisible: false, message: '' })
    }, 3000)
  }

  const handleIconClick = (iconName) => {
    navigator.clipboard.writeText(iconName).then(() => {
      showToast(`Copied <span class="px-3 py-1 bg-slate-900/70 text-emerald-500 font-semibold text-xs rounded-full">${iconName}</span> to clipboard`)
    }).catch(err => {
      console.error('Could not copy text: ', err)
    })
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12 p-24 text-slate-700">
      <h1 className="text-4xl">
        List of icons from <strong className="p-1 font-mono bg-slate-600/25 rounded">@heroicons/react</strong>
      </h1>

      <div className="space-y-4">
          <Switch 
            isChecked={isSolidVariant} 
            onChange={event => setIsSolidVariant(event.target.checked)}
            label={isSolidVariant ? "Solid" : "Outline"} 
          />

        <ul className="grid grid-cols-2 sm:grid-cols-5">
          {currentIconNames.map(iconName => {
            const IconComponent = currentIconSet[iconName]

            return (
              <li 
                key={iconName} 
                className="flex flex-col items-center justify-center aspect-square gap-4 p-4 bg-white/30 rounded cursor-pointer hover:bg-white/80 duration-300" 
                onClick={() => handleIconClick(iconName)}
              >
                <IconComponent className="w-16 h-16"/>
                <span className="p-1 text-xs font-mono bg-slate-600/25 rounded">{iconName}</span>
              </li>
            )
          })}
        </ul>
      </div>

      <Toast isVisible={toast.isVisible} message={toast.message}/>
    </main>
  )
}