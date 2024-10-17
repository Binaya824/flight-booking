"use client";
import React from "react";
import SearchForm from "../Forms/SearchForm";



const Search = () => {

  
  const cabinClasses: string[] = [
    "Economy",
    "Premium economy",
    "Business",
    "First class",
  ]
  

  return (
    <div className="w-full px-2 pt-4">
      <h2 className="text-3xl font-bold">Compare and book flights with ease</h2>
      <div className="">
        <p className="my-2">Discover your next dream destination</p>
        <ul className="flex gap-6 mb-2 items-center">
          <li className="flex items-center">
            <input
              type="radio"
              name="tripType"
              id="round-trip"
              className="scale-150 mr-3"
            />
            <label htmlFor="round-trip">Round Trip</label>
          </li>

          <li className="flex items-center">
            <input
              type="radio"
              name="tripType"
              id="one-way"
              className="scale-150 mr-3"
            />
            <label htmlFor="one-way">One Way</label>
          </li>

          <li className="flex items-center">
            <input
              type="radio"
              name="tripType"
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
        
        <SearchForm/>
        
      </div>
    </div>
  );
};

export default Search;
