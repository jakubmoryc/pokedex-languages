import React from 'react'

import img from '../../img/budew.png'

import { Jumbotron,} from 'reactstrap';

export default function NoResults() {
    return (
        <div className="centerContentScreen">
            <Jumbotron className="noResults darkerBg centerAll">
                <h1 className="display-3">
                    No results so far...
                </h1>
                <p>
                    Type in a Pokémon's name/number
                </p>
                <img 
                    src={img} alt=''
                />
            </Jumbotron>
        </div>
    )
}
