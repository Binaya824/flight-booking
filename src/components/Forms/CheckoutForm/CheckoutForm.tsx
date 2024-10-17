'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, ArrowRight, RefreshCw } from 'lucide-react'
import Details from '@/components/Forms/CheckoutForm/Details'

type TicketType = 'standard' | 'flexible'

type FormData = {
  ticketType: TicketType
}

type Step = {
  id: number
  title: string
}

const steps: Step[] = [
  { id: 1, title: 'Your details' },
  { id: 2, title: 'Extras' },
  { id: 3, title: 'Check and pay' },
]

export default function CheckoutForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    ticketType: 'standard',
  })

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleTicketTypeChange = (value: TicketType) => {
    setFormData({ ...formData, ticketType: value })
  }

  return (
    <div className="w-full mx-auto p-6">
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                step.id === currentStep ? 'bg-blue-600 text-white' : 
                step.id < currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                {step.id}
              </div>
              <span className="text-xs mt-1">{step.title}</span>
            </div>
          ))}
        </div>
        <div className="h-1 bg-gray-200">
          <div 
            className="h-1 bg-blue-600 transition-all duration-300 ease-in-out" 
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-600">Round trip · 1 traveller · Fri 13 Dec - Sat 28 Dec</p>
        <h1 className="text-2xl font-bold">Sydney to New Delhi</h1>
      </div>

      {steps[currentStep - 1].title === "Your details" && <Details/>}

      <div className="flex justify-between mt-6">
        <Button variant="outline" onClick={handleBack} disabled={currentStep === 1}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <Button onClick={handleNext}>
          Next <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="mt-6 text-center">
        <Button variant="link" className="text-gray-600">
          Give feedback
        </Button>
        <p className="text-xs text-gray-600">Tell us how we're doing and what could be better</p>
      </div>
    </div>
  )
}