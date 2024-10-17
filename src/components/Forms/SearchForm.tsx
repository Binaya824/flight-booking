'use client'
import React, { useEffect, useState } from 'react'
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import {
  PlaneTakeoff,
  PlaneLanding,
  ArrowLeftRight,
  CalendarDays,
} from "lucide-react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Select from "react-select";
import formatDate from "@/utils/formatDate";
import Traveler from '../ui/travelerUi';

type Props = {}

const SearchForm = (props: Props) => {

    const [flightState, setFlightState] = useState({
        isFromOpen: false,
        isToOpen: false,
      });
      const [openTraveler, setOpenTraveler] = useState<boolean>(false)
      const colourOptions = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
      ];
      const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: "selection",
        },
      ]);
    
      useEffect(() => {
        console.log("selected dates", state);
      }, [state]);
  return (
    <form
          action=""
          className="h-[3.5rem] p-1 bg-[#006ce4] rounded-md grid grid-cols-28 gap-1 relative"
        >
          <div className="bg-white h-full col-span-7 rounded-md cursor-pointer relative">
            <div
              className="flex gap-3 items-center h-full px-2"
              onClick={() =>
                setFlightState({ ...flightState, isFromOpen: true })
              }
            >
              <PlaneTakeoff />
              <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                Cochin International Airport
              </span>
            </div>
            {flightState.isFromOpen && (
              <div className="flex gap-3 items-center h-full w-full bg-transparent absolute top-full left-0 z-50">
                <Select
                  autoFocus
                  defaultValue={[colourOptions[2], colourOptions[3]]}
                  isMulti
                  name="colors"
                  options={colourOptions}
                  className="basic-multi-select w-full"
                  classNamePrefix="select"
                  onBlur={() => {
                    console.log("clicked");
                    setFlightState({ ...flightState, isFromOpen: false });
                  }}
                />
              </div>
            )}
          </div>

          <div className="bg-white flex h-full justify-center items-center rounded-md col-span-1 cursor-pointer">
            <ArrowLeftRight />
          </div>

          <div className="bg-white h-full col-span-7 rounded-md cursor-pointer relative">
            <div
              className="flex gap-3 items-center h-full px-2 whitespace-nowrap overflow-hidden text-ellipsis"
              onClick={() => setFlightState({ ...flightState, isToOpen: true })}
            >
              <PlaneLanding />
              <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                Biju Patnaik International Airport
              </span>
            </div>
            {flightState.isToOpen && (
              <div className="flex gap-3 items-center h-full w-full bg-transparent absolute top-full left-0 z-50">
                <Select
                  autoFocus
                  defaultValue={[colourOptions[2], colourOptions[3]]}
                  isMulti
                  name="colors"
                  options={colourOptions}
                  className="basic-multi-select w-full "
                  classNamePrefix="select"
                  placeholder="Search by City or Airport"
                  onBlur={() => {
                    console.log("clicked");
                    setFlightState({ ...flightState, isToOpen: false });
                  }}
                />
              </div>
            )}
          </div>

          <div className="bg-white h-full col-span-5 rounded-md flex items-center px-2 cursor-pointer relative">
            <Popover
              placement="bottom-start"
              color="secondary"
              radius="none"
              shadow="sm"
              offset={15}
            >
              <PopoverTrigger>
                <div className="flex gap-3 items-center h-full px-2 w-full whitespace-nowrap overflow-hidden text-ellipsis">
                  <CalendarDays />
                  <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                    {`${formatDate(state[0].startDate)} - ${
                      state[0].endDate ? formatDate(state[0].endDate) : ""
                    }`}
                  </span>
                </div>
              </PopoverTrigger>
              <PopoverContent>
                <DateRange
                  editableDateInputs={true}
                  onChange={(item: any) => setState([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={state as []}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="bg-white h-full col-span-5 rounded-md flex items-center px-2 cursor-pointer relative">
            <div
              className="flex gap-3 items-center h-full w-full px-2 whitespace-nowrap overflow-hidden text-ellipsis"
              onClick={() => setOpenTraveler(!openTraveler)}
            >
              <PlaneLanding />
              <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                1 adult
              </span>
            </div>
            {openTraveler && (
              <div className="flex gap-3 items-center h-fit w-[20rem] bg-transparent absolute top-full right-0 z-50">
                <Traveler/>
              </div>
            )}
          </div>

          <div className="bg-[#2fd24a] h-full rounded-md flex items-center justify-center px-2 col-span-3 cursor-pointer relative">
            <button className="text-white"> Search</button>
          </div>
        </form>
  )
}

export default SearchForm