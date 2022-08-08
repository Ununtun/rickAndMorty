import React, { useState, useEffect } from 'react';
import SearchFilter from './searchFilter';
import { Select, Option, Button } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";

const FilterPanel = ({
        filters,
        clearFilters,
        searchFilter
    }) => {

    const [emptyFilter, setEmptyFilter] = useState(true)
    useEffect(() => {
        ( filters.gender || filters.status || filters.species || filters.type ) ? setEmptyFilter(false) : setEmptyFilter(true)
    }, [filters.gender, filters.status, filters.species, filters.type]);

    return (
        <div className="mt-20">
            <Typography variant="h5" className="mb-6 font-bold text-grey-600">Filter Panel</Typography>
            <div className="grid gap-6">
                <SearchFilter value={searchFilter.searchInput} changeInput={searchFilter.changeSearch} />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    <Select label="Status" value={filters.status} onChange={ (e) => filters.changeStatus(e)}>
                        { 
                            filters.statusList?.map((s) => (
                                <Option value={s} key={s}>{s}</Option>
                            ))
                        }   
                    </Select>
                    <Select label="Species" value={filters.species} onChange={ (e) => filters.changeSpecies(e)}>
                        { 
                            filters.speciesList?.map((s) => (
                                <Option value={s} key={s}>{s}</Option>
                            ))
                        }   
                    </Select>
                    <Select label="Type" value={filters.type} onChange={ (e) => filters.changeType(e)}>
                        { 
                            filters.typesList?.map((s) => (
                                <Option value={s} key={s}>{s}</Option>
                            ))
                        }   
                    </Select>
                    <Select label="Gender" value={filters.gender} onChange={ (e) => filters.changeGender(e)}>
                        { 
                            filters.genderList?.map((s) => (
                                <Option value={s} key={s}>{s}</Option>
                            ))
                        }   
                    </Select>
                    <div>
                        <Button 
                            onClick={clearFilters} 
                            variant="filled" 
                            color={emptyFilter ? 'grey' : 'blue'} 
                            className="w-full"
                            disabled={emptyFilter}
                        >Clear Filters</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterPanel;