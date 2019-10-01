import React from 'react'

import { Container } from 'reactstrap';

import Pokemon from '../Pokemon/Pokemon';
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import NoResults from '../NoResults/NoResults'

export default function Display({results, isLoading}) {
    const styleClasses = "pushFromSidebar " + (isLoading ? "darkerBg" : "")
 
        if(results.length === 0 && isLoading === false) {
            return (
                <div id="display" className={styleClasses}>
                    <NoResults/>
                </div>
            )
        } else if (isLoading === true) {
            return (
                <div id="display" className={styleClasses}>
                    <LoadingScreen/>
                </div>
            )
        } else {
            return (
                <div id="display" className={styleClasses}>
                    <Container>
                        {results.map(pokemon => {
                            return <Pokemon
                                        pokemonData={pokemon}
                                        key={pokemon.id}
                                    />
                        })}
                    </Container>
                </div>
            )
        }
}
