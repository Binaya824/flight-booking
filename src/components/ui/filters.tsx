'use client'
import React from 'react'


const Filters = () => {
  return (
    <div className='w-full rounded-md'>
        <p className='text-lg font-semibold tracking-wider'>Filters</p>
        <p className='text-tiny tracking-wide font-light'>Showing 50 results</p>

        <div className="mt-10">
            <h2 className='text-lg font-semibold tracking-wider'>Stops</h2>
            <div className="pl-2 mt-3 flex flex-col gap-2">
                <div className="">
                    <input type="radio" name="stops" id="any" className='scale-200 mr-3'/>
                    <label htmlFor="any">Any</label>
                </div>
                <div className="">
                    <input type="radio" name="stops" id="nonStop"className='scale-200 mr-3' />
                    <label htmlFor="nonStop">1 Stop Max</label>
                </div>
            </div>
        </div>

        <div className="mt-10">
            <h2 className='text-lg font-semibold tracking-wider'>Airlines</h2>
            <div className="pl-2 mt-3 flex flex-col gap-2">
                <div className="">
                    <input type="checkbox" name="stops" id="any" className='scale-200 mr-4'/>
                    <label htmlFor="any">Indigo</label>
                </div>
                <div className="">
                    <input type="checkbox" name="stops" id="nonStop"className='scale-200 mr-4' />
                    <label htmlFor="nonStop">Air India</label>
                </div>
                <div className="">
                    <input type="checkbox" name="stops" id="nonStop"className='scale-200 mr-4' />
                    <label htmlFor="nonStop">Akasa Air</label>
                </div>
                <div className="">
                    <input type="checkbox" name="stops" id="nonStop"className='scale-200 mr-4' />
                    <label htmlFor="nonStop">Vistara</label>
                </div>
                <div className="">
                    <input type="checkbox" name="stops" id="nonStop"className='scale-200 mr-4' />
                    <label htmlFor="nonStop">Air Asiax</label>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Filters