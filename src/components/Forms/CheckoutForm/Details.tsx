'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@radix-ui/react-separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LuLuggage, LuBriefcase } from "react-icons/lu"
import { useState } from "react"
import TravelerInfoModal from "@/components/Modals/TravelerInfoModal"

export default function Details() {
  const [openTravelerInfoModal, setOpenTravelerInfoModal] = useState<boolean>(false)
  return (
    <div className="container mx-auto p-4">
      <Card className="border-0 shadow-none">
        <CardContent>
          {/* Use grid with 3 columns */}
          <div className="">
            {/* Left side: Form section */}
            <div className="">
              <h2 className="text-xl font-semibold mb-4">Fill in your details</h2>
              <p className="text-sm text-gray-500 mb-4">Add traveller details and review baggage options</p>
              
              {/* Traveler details */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Adult 1</h3>
                <Button variant="outline" className="w-full" onClick={()=> setOpenTravelerInfoModal(true)}>Add this traveller&apos;s details</Button>
              </div>

              {/* Baggage options */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">On each flight</h4>
                  <div className="flex items-center">
                    <LuBriefcase className="mr-2" />
                    <div>
                      <p className="font-semibold">1 personal item</p>
                      <p className="text-sm text-gray-500">Fits under the seat in front of you</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Checkbox id="checked-bag" />
                    <label htmlFor="checked-bag" className="ml-2">
                      Add checked bag
                      <p className="text-sm text-gray-500">+ INR6,907.18</p>
                    </label>
                  </div>
                  <LuLuggage size={24} />
                </div>
              </div>

              <Separator className="my-6" />

              <div className="space-y-4">
                <h3 className="font-semibold">Flight to New Delhi</h3>
                <div className="flex items-center">
                  <LuLuggage className="mr-2" />
                  <div>
                    <p className="font-semibold">1 cabin bag</p>
                    <p className="text-sm text-gray-500">23 x 36 x 56 cm · Max weight 7 kg</p>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="space-y-4">
                <h3 className="font-semibold">Flight to Sydney</h3>
                <div className="flex items-center">
                  <LuLuggage className="mr-2" />
                  <div>
                    <p className="font-semibold">1 cabin bag</p>
                    <p className="text-sm text-gray-500">20 x 40 x 55 cm · Max weight 7 kg</p>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              {/* Contact details */}
              <div>
                <h3 className="font-semibold mb-4">Contact details</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email">Contact email *</Label>
                    <Input id="email" placeholder="We'll send your flight confirmation here" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone number *</Label>
                    <div className="flex">
                      <select className="w-20 border rounded-l-md">
                        <option value="+91">+91</option>
                      </select>
                      <Input id="phone" className="rounded-l-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            

            {/* Right side: Ticket details section */}
            
          </div>
        </CardContent>
      </Card>
      <TravelerInfoModal setOpenTravelerInfoModal={setOpenTravelerInfoModal} openTravelerInfoModal={openTravelerInfoModal}/>
    </div>
  )
}
