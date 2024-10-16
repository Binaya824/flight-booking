"use client";
import React, { useEffect, useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import { PlaneTakeoff, ArrowLeftRight, CalendarDays } from "lucide-react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import moment from "moment";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

type Props = {};

const Search = (props: Props) => {
  const [cabinClasses, setCabinClasses] = useState<string[]>([
    "Economy",
    "Premium economy",
    "Business",
    "First class",
  ]);

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
    <div className="w-full px-2">
      <h2 className="text-3xl font-bold">Compare and book flights with ease</h2>
      <div className="">
        <p className="my-2">Discover your next dream destination</p>
        <ul className="flex gap-6 mb-2 items-center">
          <li className="flex items-center">
            <input
              type="radio"
              name="rountTrip"
              id="round-trip"
              className="scale-150 mr-3"
            />
            <label htmlFor="round-trip">Round Trip</label>
          </li>

          <li className="flex items-center">
            <input
              type="radio"
              name="oneWay"
              id="one-way"
              className="scale-150 mr-3"
            />
            <label htmlFor="one-way">One Way</label>
          </li>

          <li className="flex items-center">
            <input
              type="radio"
              name="multiCity"
              id="multi-city"
              className="scale-150 mr-3"
            />
            <label htmlFor="multi-city">Multi City</label>
          </li>
          <li className="flex items-center">
            <select
              name="cabinClass"
              defaultValue={cabinClasses[0]}
              className="p-1 bg-transparent"
            >
              {cabinClasses.map((el, index) => {
                return (
                  <option value={el} key={index}>
                    {el}
                  </option>
                );
              })}
            </select>
          </li>
          <li className="flex items-center">
            <input
              type="checkbox"
              name="directFlight"
              id="direct-flight"
              className="scale-150 mr-3"
            />
            <label htmlFor="direct-flight">Direct Flight</label>
          </li>
        </ul>

        <form
          action=""
          className="h-[3.5rem] p-1 bg-[#ffb700] rounded-md grid grid-cols-10 gap-1 relative"
        >
          <div className="bg-white h-full col-span-3 rounded-md cursor-pointer">
            <Popover placement="bottom-start" color="secondary">
              <PopoverTrigger>
                <div className="flex gap-3 items-center h-full px-2">
                  <PlaneTakeoff /> Biju Patnaik International Airport
                </div>
              </PopoverTrigger>
              <PopoverContent>
                <div className="">
                  <div className="text-small font-bold">Popover Content</div>
                  <div className="text-tiny">This is the popover content</div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <div className="bg-white flex h-full justify-center items-center rounded-md cursor-pointer">
            <ArrowLeftRight />
          </div>

          <div className="bg-white h-full col-span-3 rounded-md cursor-pointer">
            <Popover placement="bottom-start" color="secondary">
              <PopoverTrigger>
                <div className="flex gap-3 items-center h-full px-2">
                  <PlaneTakeoff /> Biju Patnaik International Airport
                </div>
              </PopoverTrigger>
              <PopoverContent>
                <div className="">
                  <div className="text-small font-bold">Popover Content</div>
                  <div className="text-tiny">This is the popover content</div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <div className="bg-white h-full col-span-2 rounded-md flex items-center px-2 cursor-pointer relative">
            <Popover
              placement="bottom-start"
              color="secondary"
              radius="none"
              shadow="sm"
              offset={15}
            >
              <PopoverTrigger>
                <div className="flex gap-3 items-center h-full px-2 w-full">
                  <CalendarDays />
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
          <div className="bg-[#006ce4] h-full rounded-md flex items-center justify-center px-2 cursor-pointer relative">
              <button className="text-white"> Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
