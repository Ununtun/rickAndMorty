import React from 'react';
import { Input } from "@material-tailwind/react";

const SearchFilter = ({value, changeInput}) => {
    return (
        <form>   
            <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label>
            <div className="relative">
                
                <Input 
                    value={value}
                    onChange={changeInput}
                    label="Search" 
                    icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>} 
                />
            </div>
        </form>
    );
};

export default SearchFilter;