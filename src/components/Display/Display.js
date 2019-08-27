import React from 'react'

import { Container } from 'reactstrap';

import Pokemon from '../Pokemon/Pokemon';

export default function Display({results}) {
    return (
        <div id="display" className="pushFromSidebar">
            <Container>
                {results.map(pokemon => {
                    return <Pokemon
                                pokemonData={pokemon}
                            />
                })}
            </Container>
        </div>
    )
}
