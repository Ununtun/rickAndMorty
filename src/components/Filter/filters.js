// Gender Filter
const genderFilter = (gender, updatedList) => {
    return updatedList.filter(
        (item) => item.gender === gender
    );
}

// Status Filter
const statusFilter = (status, updatedList) => {
    return updatedList.filter(
        (item) => item.status === status
    );
}

// Species Filter
const speciesFilter = (species, updatedList) => {
    return updatedList.filter(
        (item) => item.species === species
    );
}

// Type Filter
const typeFilter = (type, updatedList) => {
    return updatedList.filter(
        (item) => item.type === type
    );
}

// Search Filter
const searchFilter = (searchInput, updatedList) => {
    return updatedList.filter(
        (item) => item.name.toLowerCase().search(searchInput.toLowerCase().trim()) !== -1
    );
}

export {
    genderFilter,
    statusFilter,
    speciesFilter,
    typeFilter,
    searchFilter
}