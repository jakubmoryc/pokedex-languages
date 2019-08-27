import React from 'react'

import { Card, Button, CardTitle} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import Img from 'react-image'

import uk from '../../icons/united-kingdom.svg'
import de from '../../icons/germany.svg'
import it from '../../icons/italy.svg'
import es from '../../icons/spain.svg'
import jp from '../../icons/japan.svg'
import kr from '../../icons/south-korea.svg'
import cn from '../../icons/china.svg'
import fr from '../../icons/france.svg'

export default function Pokemon({pokemonData}) {
    return (
        <div>
            <Row>
                <Col>
                    <Card className="mb-1" body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardTitle>
                            <div class="cardTitle"> {/*This is flexed */}
                                <Img 
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`} 
                                    alt={`${pokemonData.us}`}
                                >
                                    </Img>
                                <div className="cardInfo">
                                    <p className="biggerText">
                                        <img className="smallerIcon" src={uk} alt=''/>
                                        {pokemonData.us}
                                    </p>
                                    <h1>
                                        #{pokemonData.id}
                                    </h1>
                                </div>
                                <div className="languages"> {/*This is flexed */}
                                    <div className="language"> {/*This is flexed */}
                                        <img className="icon" src={jp} alt=''/> 
                                        {pokemonData.jp}
                                    </div>
                                    <div className="language">
                                        <img className="icon" src={de} alt=''/>
                                        {pokemonData.de}
                                    </div>
                                    <div className="language">
                                        <img className="icon" src={fr} alt=''/>
                                        {pokemonData.fr}
                                    </div>
                                    <div className="language">
                                        <img className="icon" src={it} alt=''/>
                                        {pokemonData.it}
                                    </div>
                                    <div className="language">
                                        <img className="icon" src={es} alt=''/>
                                        {pokemonData.es}
                                    </div>
                                    <div className="language">
                                        <img className="icon" src={kr} alt=''/>
                                        {pokemonData.kr}
                                    </div>
                                    <div className="language">
                                        <img className="icon" src={cn} alt=''/>
                                        {pokemonData.cn}
                                    </div>
                                </div>
                            </div> 
                        </CardTitle>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
