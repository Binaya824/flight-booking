import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Share2,
  Luggage,
  Briefcase,
  Package,
  RefreshCcw,
  XCircle,
  Zap,
  Info,
} from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

export default function FlightBookingModal({
  isOpen,
  setOpenViewDetailModal,
}: {
  isOpen: boolean;
  setOpenViewDetailModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const router = useRouter();

  return (
    <Dialog open={isOpen} onOpenChange={setOpenViewDetailModal}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center">
            Your flight to New Delhi
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[80vh] pr-4">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-sm text-blue-600">
              <Share2 className="h-4 w-4" />
              <span>Share this flight</span>
            </div>

            {/* Flight to New Delhi */}
            <div>
              <h3 className="font-semibold">Flight to New Delhi</h3>
              <p className="text-sm text-gray-500">Direct · 13h</p>
              <div className="mt-2 space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Fri 13 Dec · 10:25</p>
                    <p className="text-sm">
                      SYD · Sydney Kingsford Smith Airport
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">Air India</p>
                    <p className="text-sm text-gray-500">A1301 · Economy</p>
                    <p className="text-sm text-gray-500">Flight time 13h</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Fri 13 Dec · 17:55</p>
                    <p className="text-sm">DEL · Delhi International Airport</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Flight to Sydney */}
            <div>
              <h3 className="font-semibold">Flight to Sydney</h3>
              <p className="text-sm text-gray-500">Direct · 12h 25m</p>
              <div className="mt-2 space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Sat 28 Dec · 14:15</p>
                    <p className="text-sm">DEL · Delhi International Airport</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">Air India</p>
                    <p className="text-sm text-gray-500">A1302 · Economy</p>
                    <p className="text-sm text-gray-500">Flight time 12h 25m</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Sun 29 Dec · 08:10</p>
                    <p className="text-sm">
                      SYD · Sydney Kingsford Smith Airport
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Included baggage */}
            <div>
              <h3 className="font-semibold">Included baggage</h3>
              <p className="text-sm text-gray-500">
                The total baggage included in the price
              </p>
              <div className="mt-2 space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Luggage className="h-4 w-4" />
                    <span className="text-sm">1 personal item</span>
                  </div>
                  <span className="text-sm text-green-600">Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-4 w-4" />
                    <div>
                      <p className="text-sm">1 cabin bag</p>
                      <p className="text-xs text-gray-500">
                        20 x 40 x 55 cm · Max weight 7 kg
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-green-600">Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Package className="h-4 w-4" />
                    <div>
                      <p className="text-sm">1 checked bag</p>
                      <p className="text-xs text-gray-500">Max weight 25 kg</p>
                    </div>
                  </div>
                  <span className="text-sm text-green-600">Included</span>
                </div>
              </div>
            </div>

            {/* Fare rules */}
            <div>
              <h3 className="font-semibold">Fare rules</h3>
              <p className="text-sm text-gray-500">
                Helpful policy information
              </p>
              <div className="mt-2 space-y-2">
                <div className="flex items-center space-x-2">
                  <RefreshCcw className="h-4 w-4" />
                  <span className="text-sm">
                    You&apos;re allowed to change this flight, for a fee
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <XCircle className="h-4 w-4" />
                  <span className="text-sm">
                    You&apos;re allowed to cancel this flight, for a fee
                  </span>
                </div>
              </div>
            </div>

            {/* Extras you might like */}
            <div>
              <h3 className="font-semibold">Extras you might like</h3>
              <p className="text-sm text-gray-500">Can be added for a fee</p>
              <div className="mt-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Zap className="h-4 w-4" />
                    <div>
                      <p className="text-sm">Flexible ticket</p>
                      <p className="text-xs text-gray-500">
                        Date change possible
                      </p>
                      <p className="text-xs text-gray-500">
                        + INR18,639.40 for all travellers
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-blue-600">
                    Available in the next steps
                  </span>
                </div>
              </div>
            </div>

            {/* CO2e emissions estimate */}
            <div>
              <h3 className="font-semibold flex items-center space-x-1">
                <span>CO2e emissions estimate</span>
                <Info className="h-4 w-4" />
              </h3>
              <p className="text-sm">Typical for this route</p>
            </div>

            {/* Price */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-1">
                <span className="text-2xl font-bold">INR143,380.00</span>
                <Info className="h-4 w-4" />
              </div>
              <Button onClick={()=> router.push('/checkout')}>Select</Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
