import React, { useEffect, useState } from 'react'
import { getPages, getCharacters } from '../../services/AppService'
import Characters from '../Characters/Characters'
import FilterPanel from '../Filter/filterPanel'
import { genderFilter,
         statusFilter,
         speciesFilter,
         typeFilter,
         searchFilter
} from '../Filter/filters'
import { GENDER_LIST, 
         STATUS_LIST, 
         SPECIES_LIST, 
         TYPES_LIST 
} from '../../constants/appConst'
import Layout from '../Layout/Layout';

const Home = () => {

    const   [characters, setCharacters] = useState([]),
            [isLoading, setIsLoading] = useState(true),
            [totalPages, setTotalPages] = useState(1),
            [filteredList, setFilteredList] = useState([]),

            [searchInput, setSearchInput] = useState(''),
            [gender, setGender] = useState(''),
            [status, setStatus] = useState(''),
            [species, setSpecies] = useState(''),
            [type, setType] = useState('');

    // Get pages
    useEffect(() => {
        getPages(setTotalPages)
    }, []);

    // Get characters
    useEffect(() => {
        getCharacters(setCharacters, totalPages, setIsLoading)
    }, [totalPages]);

    // Filters
    const filters = {
        gender: gender,
        genderList: GENDER_LIST,
        changeGender: e => setGender(e),

        status: status,
        statusList: STATUS_LIST,
        changeStatus: e => setStatus(e),

        species: species,
        speciesList: SPECIES_LIST,
        changeSpecies: e => setSpecies(e),

        type: type,
        typesList: TYPES_LIST,
        changeType: e => setType(e)
    },
    filterSearchInput = {
        searchInput: searchInput,
        changeSearch: e => setSearchInput(e.target.value)
    }

    // Filter characters
    useEffect(() => {
        
        // Update filter
        const updatefilter = () => {
            let updatedList = characters;

            // Gender filter
            if (gender) updatedList = genderFilter(gender, updatedList)

            // Status filter
            if (status) updatedList = statusFilter(status, updatedList)

            // Species filter
            if (species) updatedList = speciesFilter(species, updatedList)

            // Type filter
            if (type) updatedList = typeFilter(type, updatedList)

            // Search filter
            if (searchInput) updatedList = searchFilter(searchInput, updatedList)

            setFilteredList(updatedList);
        }
        updatefilter()
    }, [characters, gender, status, species, type, searchInput]);

    // Clear filters
    const clearFilters = () => {
        setType('')
        setSpecies('')
        setStatus('')
        setGender('')
    }

    return (
        <Layout>
            <FilterPanel 
                filters={filters}
                searchFilter={filterSearchInput}
                clearFilters={clearFilters}
            />
            <Characters 
                characterList={filteredList}
                isLoading={isLoading}
            />
        </Layout>
    );
};

export default Home;