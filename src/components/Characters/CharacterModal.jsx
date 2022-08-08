import React, { useState, useEffect, useRef } from 'react';
import { IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Typography } from "@material-tailwind/react";
import { CSSTransition } from 'react-transition-group';

const CharacterModal = ({ character, closeModal }) => {

    // Get character info
    const getCharacterInfo = (key, value) => {
        return (
            <Typography key={key} variant="paragraph" className="text-grey-600 font-bold">
                {`${key} : `}
                { value ? <span className="text-grey-800 font-light">{`${value}`}</span> : <span>-</span> }
            </Typography>
        )
    }

    // Get character location
    const getCharacterLocation = (key, value) => {
        return (
            <Typography key={key} variant="paragraph" className="text-grey-600 font-bold">
                {`${key} : `}
                { value ? <span className="text-grey-800 font-light">{`${value[Object.keys(value)[0]]}`}</span> : <span>-</span> }
            </Typography>
        )
    }

    const characterInfoFields = ['status', 'species', 'gender', 'type'],
          characterLocationFields = ['origin', 'location'],
          [transition, setTransition] = useState(false),
          nodeRef = useRef(null);

    // transition
    useEffect(() => {
        setTransition(true)
    }, []);

    return (
        <CSSTransition in={transition} timeout={500} classNames="modalWindow" nodeRef={nodeRef} onExited={closeModal}>
            <div onClick={() =>setTransition(false)} ref={nodeRef} className="bg-modal p-4 flex items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full inset-0 h-modal md:h-ful">
                <div onClick={(e) => e.stopPropagation()} className="modalBody bg-white relative w-full max-w-4xl h-auto mx-auto rounded-lg">
                    <div className="relative shadow">
                        <div className="modalHeader flex justify-between items-center px-5 py-4">
                            <Typography variant="h3" className="font-semibold text-gray-900 flex-1">
                                Biographical Information
                            </Typography>
                            <IconButton onClick={() => setTransition(false)} color="blue-grey">
                                <FontAwesomeIcon icon={faXmark}  size="xl" />
                            </IconButton>
                        </div>
                        <div className="p-6 space-y-6">
                            <div className="grid gap-5 md:grid-cols-4">
                                <div>
                                    <img className="img-fluid rounded" 
                                        src={character.image} 
                                        alt={character.name}
                                    />
                                </div>
                                <div className="col-span-3">
                                    <Typography variant="h3" className="text-gray-900 dark:text-white">
                                        {character.name}
                                    </Typography>
                                    
                                    <div className="mt-5 grid grid-flow-row auto-rows-min gap-3">
                                        {Object.entries(character).map(([key, value]) => (
                                            
                                            characterInfoFields.some(el => key.includes(el))
                                            ?
                                            getCharacterInfo(key, value)
                                            :
                                            characterLocationFields.some(el => key.includes(el))
                                            ?
                                            getCharacterLocation(key, value)
                                            : 
                                            null

                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

export default CharacterModal;