'use client'
import flightImg from '@/assets/flight.png'
import Image from 'next/image';

type FlightInfoProps = {
    time: string;
    date: string;
    airport: string;
    stops?: number;
    duration?: string;
    technicalStops?: number;
    isArrival?: boolean;
    airline?: string;
  };
export default function FlightInfo({ time, date, airport, stops, duration, technicalStops, isArrival = false , airline }: FlightInfoProps) {
    return (
      <div className="flex items-start gap-5 relative">
        {!isArrival && <div className="h-full flex flex-col gap-2">
            <Image src={flightImg} alt='flight img' width={70}/>
            <span className='text-sm'>{airline}</span>
        </div>}
       <div className="flex flex-col items-start">
       <div className="text-2xl font-semibold">{time}</div>
            <div className="text-sm text-muted-foreground">{date}</div>
            <div className="text-lg font-medium">{airport}</div>
            {!isArrival && (
            <div className="flex items-center">
                <div className=" rounded-full bg-blue-500" />
                <div className="text-sm text-muted-foreground">
                {stops} stop{stops !== 1 ? 's' : ''}
                </div>
                {duration && <div className="text-sm text-muted-foreground">· {duration}</div>}
            </div>
            )}
            {technicalStops && (
            <div className="text-xs text-muted-foreground">
                {technicalStops} technical stop{technicalStops !== 1 ? 's' : ''}
            </div>
            )}
       </div>
      </div>
    )
  }