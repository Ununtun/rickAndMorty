import React, { useState, useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import Loader from '../UI/Loader';
import CharacterCard from '../Card/CharacterCard';
import { CARD_LIMIT } from '../../constants/appConst'

const Characters = ({
        characterList,
        isLoading
    }) => {

    // Observer API
    const [itemsLimit, setItemsLimit] = useState(CARD_LIMIT)
    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: '0px'
    });
    useEffect(() => {
        if(inView) setItemsLimit( i => i + CARD_LIMIT)
    }, [inView])

    // clear (when updating filter)
    useEffect(() => {
        setItemsLimit(CARD_LIMIT)
    }, [characterList])
    
    return (
        <div className="pt-5">
            { isLoading ? <Loader />
            : (
            <div>
                <div className="charactersList mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                    {characterList.slice(0,itemsLimit)?.map( (item) => (
                        <CharacterCard key={item.id} character={item} />
                    ))}
                </div>
                <div className="mt-8 flex justify-center pb-12">
                    {itemsLimit < characterList.length
                        ?
                        <div id="observer" ref={ref}><Loader /></div>
                        : 
                        <div>There are no more characters.</div> 
                    }
                </div>
            </div>
            )}
        </div>
    );
};

export default Characters;