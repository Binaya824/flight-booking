'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@radix-ui/react-separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { LuLuggage, LuBriefcase } from "react-icons/lu"

export default function Details() {
  return (
    <div className="container mx-auto p-4">
      <Card className="border-0 shadow-none">
        <CardContent>
          {/* Use grid with 3 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-2">
            {/* Left side: Form section */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold mb-4">Fill in your details</h2>
              <p className="text-sm text-gray-500 mb-4">Add traveller details and review baggage options</p>
              
              {/* Traveler details */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Adult 1</h3>
                <Button variant="outline" className="w-full">Add this traveller's details</Button>
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
            <div className="order-1 lg:order-none col-span-1 lg:col-start-3 lg:row-start-1">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Ticket (1 adult)</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Flight fare</span>
                      <span>INR86,029.74</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxes and charges</span>
                      <span>INR34,773.07</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span>Flexible ticket</span>
                      <span>INR15,704.37</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>INR136,507.18</span>
                    </div>
                    <p className="text-sm text-gray-500">Includes taxes and charges</p>
                  </div>
                  <div className="mt-4">
                    <RadioGroup defaultValue="no-hidden-fees">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no-hidden-fees" id="no-hidden-fees" />
                        <Label htmlFor="no-hidden-fees">No hidden fees - track your price at every step</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <Button className="w-full mt-4" variant="link">View price breakdown</Button>
                </CardContent>
              </Card>
              <Card className="mt-4">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Give feedback</h3>
                  <p className="text-sm text-gray-500">Tell us how we're doing and what could be better</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
