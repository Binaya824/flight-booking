import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { User, Briefcase, Mail, Phone } from "lucide-react"


interface FlightInfoProps {
  from: string;
  to: string;
  date: string;
  time: string;
  stops: string;
  airlines: string;
}

export default function FlightItinerary() {
  return (
    <div className="w-full space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Flight Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <FlightInfo
            from="Bhubaneshwar (BBI)"
            to="Los Angeles (LAX)"
            date="Tue 17 Dec - Wed 18 Dec"
            time="20:30 - 20:20"
            stops="2 stops · 37h 20m · Economy"
            airlines="Air India, Air Canada · AI2782, AC51, AC781"
          />
          <Separator />
          <FlightInfo
            from="Los Angeles (LAX)"
            to="Bhubaneshwar (BBI)"
            date="Tue 24 Dec - Fri 27 Dec"
            time="22:55 - 09:05"
            stops="2 stops · 44h 40m · Economy"
            airlines="Air Canada, Air India · AC794, AC42, AI2785"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center">
            <Phone className="mr-2 h-4 w-4" />
            <span>+918249611167</span>
          </div>
          <div className="flex items-center">
            <Mail className="mr-2 h-4 w-4" />
            <span>binayakumar824@gmail.com</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Traveller Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <User className="mr-2 h-4 w-4" />
            <span>Binaya Das</span>
          </div>
          <div className="text-sm text-muted-foreground">Adult · Male · 12 Nov 1999</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Baggage</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Flight to Los Angeles</h3>
            <BaggageInfo />
          </div>
          <Separator />
          <div>
            <h3 className="font-semibold mb-2">Flight to Bhubaneshwar</h3>
            <BaggageInfo />
          </div>
          <Button variant="outline" className="w-full">View baggage per traveller</Button>
        </CardContent>
      </Card>

    </div>
  )
}

function FlightInfo({ from, to, date, time, stops, airlines }: FlightInfoProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <div className="font-semibold">{from} to {to}</div>
        <Button variant="ghost" size="sm">View flight details</Button>
      </div>
      <div className="text-sm text-muted-foreground">{date}</div>
      <div className="text-sm">{time}</div>
      <div className="text-sm">{stops}</div>
      <div className="text-sm">{airlines}</div>
    </div>
  )
}

function BaggageInfo() {
  return (
    <div className="space-y-2">
      <div className="flex items-center">
        <Briefcase className="mr-2 h-4 w-4" />
        <span>1 personal item</span>
      </div>
      <div className="text-sm text-muted-foreground pl-6">Fits under the seat in front of you</div>
      <div className="flex items-center">
        <Briefcase className="mr-2 h-4 w-4" />
        <span>1 cabin bag</span>
      </div>
      <div className="text-sm text-muted-foreground pl-6">23 x 40 x 55 cm</div>
      <div className="flex items-center">
        <Briefcase className="mr-2 h-4 w-4" />
        <span>2 checked bags</span>
      </div>
      <div className="text-sm text-muted-foreground pl-6">Max weight 23 kg</div>
    </div>
  )
}