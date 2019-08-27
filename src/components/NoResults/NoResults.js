import React from 'react'

import img from '../../img/budew_monochrome.png'

import { Jumbotron,} from 'reactstrap';

export default function NoResults() {
    return (
        <div className="centerContentScreen">
            <Jumbotron className="darkerBg centerAll">
                <h1 className="display-3">
                    No results so far...
                </h1>
                <p>
                    Type in a Pokémon's name/number
                </p>
                <img 
                    src={img}
                />
            </Jumbotron>
        </div>
    )
}
