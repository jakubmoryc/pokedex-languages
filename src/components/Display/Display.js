import React from 'react'

import { Container } from 'reactstrap';

import Pokemon from '../Pokemon/Pokemon';

export default function Display() {
    return (
        <div id="display" className="pushFromSidebar">
            <Container>
                <Pokemon/>
                <Pokemon/>
                <Pokemon/>
                <Pokemon/>
            </Container>
        </div>
    )
}
