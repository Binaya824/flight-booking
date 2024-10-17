"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { LuBaggageClaim, LuBriefcase } from "react-icons/lu";
import { BsSuitcase2 } from "react-icons/bs";
import FlightInfo from "@/components/ui/flightInfo";
import { useState } from "react";
import FlightBookingModal from "../Modals/FlightBookingModal";

export default function FlightCard() {
    const [openViewDetailModal, setOpenViewDetailModal] = useState<boolean>(false)
  return (
    <div className=" h-fit relative w-full flex justify-between">
        
      <Card className="w-full h-full">
        <CardHeader className="p-5">
          <div className="flex justify-between items-center">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Cheapest
            </Badge>
            <span className="text-sm text-muted-foreground">
              Flexible ticket upgrade available
            </span>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <FlightInfo
              time="10:10"
              date="16 Nov"
              airport="BBI"
              stops={1}
              duration="4h 20m"
              technicalStops={2}
              airline="Vistara"
            />
            <FlightInfo time="14:30" date="16 Nov" airport="COK" isArrival />
          </div>
          <Separator />
          <div className="flex justify-between items-center ">
            <FlightInfo
              time="21:55"
              date="23 Nov"
              airport="COK"
              stops={1}
              duration="10h"
              airline="Vistara"
            />
            <FlightInfo time="07:55" date="24 Nov" airport="BBI" isArrival />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <LuBriefcase className="text-muted-foreground" />
              <BsSuitcase2 className="text-muted-foreground" />
              <LuBaggageClaim className="text-muted-foreground" />
            </div>
            <span className="text-sm text-muted-foreground">
              Included: personal item, cabin bag, checked bag
            </span>
          </div>
        </CardContent>
        <Separator />
        <CardFooter className="flex justify-between items-center p-3">
          <CardTitle className="text-2xl font-bold">INR15,987.82</CardTitle>
          <Button onClick={()=> setOpenViewDetailModal(true)}>View details</Button>
        </CardFooter>
      </Card>
      <FlightBookingModal isOpen={openViewDetailModal} setOpenViewDetailModal={setOpenViewDetailModal}/>
    </div>
  );
}
