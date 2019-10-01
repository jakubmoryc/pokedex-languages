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
                                    <div className="languagesWrapper">
                                        <div className="language"> {/*This is flexed */}
                                            <img className="icon" src={jp} alt=''/> 
                                            <p>{pokemonData.jp}</p>
                                        </div>
                                        <div className="language">
                                            <img className="icon" src={de} alt=''/>
                                            <p>{pokemonData.de}</p>
                                        </div>
                                        <div className="language">
                                            <img className="icon" src={fr} alt=''/>
                                            <p>{pokemonData.fr}</p>
                                        </div>
                                        <div className="language">
                                            <img className="icon" src={it} alt=''/>
                                            <p>{pokemonData.it}</p>
                                        </div>
                                        <div className="language">
                                            <img className="icon" src={es} alt=''/>
                                            <p>{pokemonData.es}</p>
                                        </div>
                                        <div className="language">
                                            <img className="icon" src={kr} alt=''/>
                                            <p>{pokemonData.kr}</p>
                                        </div>
                                        <div className="language">
                                            <img className="icon" src={cn} alt=''/>
                                            <p>{pokemonData.cn}</p>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </CardTitle>
                        <Button 
                            className="bg-white text-dark cardButton"
                            onClick={e => {
                                window.open(`https://www.pokemon.com/uk/pokedex/${pokemonData.id}`)
                            }}>
                            <i class="fas fa-book-open"></i> See Pokédex entry
                        </Button>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
