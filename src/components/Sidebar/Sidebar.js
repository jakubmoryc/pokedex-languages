import React from 'react'

import { useState } from 'react'

import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Modal, ModalHeader, ModalBody} from 'reactstrap';

export default function Sidebar() {
    const [modal, setModal] = useState(false);
    
    const toggle = () => {
        setModal(!modal)
    }
    return (
        <div>
            <SideNav>
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem>
                        <NavIcon>
                            <button 
                                className="btn" 
                                onClick={() => {
                                    window.open('https://bulbapedia.bulbagarden.net/wiki/Category:Pages_in_other_languages')
                                }}>
                                <i class="fas fa-list"></i>   
                            </button>
                        </NavIcon>
                        <NavText>
                            <a rel="noopener noreferrer" href="https://bulbapedia.bulbagarden.net/wiki/Category:Pages_in_other_languages" target="_blank">See full lists</a>
                        </NavText>
                    </NavItem>
                    <NavItem>
                        <NavIcon>
                            <button className="btn" 
                                onClick={e => {
                                    toggle();
                                }}>
                                <i class="fas fa-info-circle"></i>  
                            </button>
                        </NavIcon>
                        <NavText>
                            <a 
                                href="#" 
                                onClick={e => {
                                    toggle();
                                }}>
                                   Info & Credits 
                            </a>
                            <Modal isOpen={modal} toggle={toggle} className="text-dark bg-dark">
                                <ModalHeader toggle={toggle}>Credits</ModalHeader>
                                <ModalBody>
                                    <p>Simply put in Pokemon's name or id to see its names in various languages.</p>
                                    <p>App created with the use of <a  rel="noopener noreferrer" href="https://pokeapi.co" target="_blank">PokéAPI's</a> data and icons from <a rel="noopener noreferrer" href="https://www.flaticon.com/authors/freepik" target="_blank">Freepik</a></p>
                                    <img className="fullWidthImg" src="https://i.kym-cdn.com/photos/images/original/001/150/490/507.jpg" alt=''></img>
                                </ModalBody>
                            </Modal>
                        </NavText>
                    </NavItem>
                    <NavItem>
                        <NavIcon>
                            <button className="btn">
                                <i class="fab fa-github"></i>
                            </button>
                        </NavIcon>
                        <NavText>
                            GitHub
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        </div>
    )
}
