import React, { useEffect } from 'react';
import { useState } from 'react';
import CharacterModal from '../Characters/CharacterModal';
import { Button } from "@material-tailwind/react";

const CharacterCard = ({character}) => {

    const [modal, setModal] = useState(false)

    // prevent scrolling
    useEffect(() => {
        modal ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""
    }, [modal])

    return (
        <div>
            <div className="characterCard relative w-full h-full flex flex-col shadow-md">
                <div className="bg-cover rounded-t-lg text-center overflow-hidden">
                    <img className="img-fluid" 
                        src={character.image} 
                        alt={character.name}
                    />
                </div>
                <div className="flex-1 bg-blue-grey-800 rounded-b-lg p-4 flex flex-col justify-between leading-normal">
                    <div>
                        <span className="text-grey-50 font-bold text-xl mb-2">{character.name}</span>
                    </div>
                    <div className="pt-6">
                        <div>
                            <span className="text-grey-300 text-base">Status: </span>
                            <span className="text-grey-100 text-base">{character.status}</span>
                        </div>
                        <div>
                            <span className="text-grey-300 text-base">Species: </span>
                            <span className="text-grey-100 text-base">{character.species}</span>
                        </div>
                    </div>
                </div>

                <div className="showDetails w-full h-full absolute left-0 top-0 bottom-0 right-0">
                    <div className="bg-black opacity-60 w-full h-full rounded"></div>
                    <div className="flex items-center text-white justify-center uppercase absolute left-0 top-0 bottom-0 right-0">
                        <Button onClick={() => setModal(true)} variant="filled">Show details</Button>
                    </div>
                </div>
            </div>

            { modal ? ( <CharacterModal character={character} closeModal={() => setModal(false)} /> ) : null }
            
        </div>
    );
};

export default React.memo(CharacterCard);