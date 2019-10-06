import React from 'react'

import { Container } from 'reactstrap';

import Pokemon from '../Pokemon/Pokemon';
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import NoResults from '../NoResults/NoResults'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

class Display extends React.Component {

    scrollToTop() {
        document.querySelector("#display").scrollTop = 0;
    }
    
    render() {
        const styleClasses = "pushFromSidebar " + (this.props.isLoading ? "darkerBg" : "")
 
        if(this.props.results.length === 0 && this.props.isLoading === false) {
            return (
                <div id="display" className={styleClasses}>
                    <NoResults/>
                    <ScrollToTop
                        scrollFunction={this.scrollToTop}
                    />
                </div>
            )
        } else if (this.props.isLoading === true) {
            return (
                <div id="display" className={styleClasses}>
                    <LoadingScreen/>
                    <ScrollToTop
                        scrollFunction={this.scrollToTop}
                    />
                </div>
            )
        } else {
            return (
                <div id="display" className={styleClasses}>
                    <Container>
                        {this.props.results.map(pokemon => {
                            
                            return <Pokemon
                                        pokemonData={pokemon}
                                        key={pokemon.id}
                                    />
                        })}
                    </Container>
                    <ScrollToTop
                        scrollFunction={this.scrollToTop}
                    />
                </div>
            )
        }
    }
}

export default Display;
