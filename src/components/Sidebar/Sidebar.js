import React from 'react'

import { useState } from 'react'

import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Modal, ModalHeader, ModalBody} from 'reactstrap';

export default function Sidebar() {
    const [modal, setModal] = useState(false);
    
    const toggle = () => {
        setModal(!modal)
        console.log(modal)
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
                                    window.open('https://bulbapedia.bulbagarden.net/wiki/List_of_characters_in_other_languages')
                                }}>
                                <i class="fas fa-list"></i>   
                            </button>
                        </NavIcon>
                        <NavText>
                            See full list 
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
                            Info&Credits
                            <Modal isOpen={modal} toggle={toggle} className="text-dark bg-dark">
                                <ModalHeader toggle={toggle}>Credits</ModalHeader>
                                <ModalBody>
                                    App created with the use of <a href="https://pokeapi.co" target="_blank">PokéAPI's</a> data and icons from <a href="https://www.flaticon.com/authors/freepik" target="_blank">Freepik</a>.
                                    <img className="fullWidthImg" src="https://i.kym-cdn.com/photos/images/original/001/150/490/507.jpg" alt=''></img>
                                </ModalBody>
                            </Modal>
                        </NavText>
                    </NavItem>
                    <NavItem>
                        <NavIcon>
                            <button className="btn">
                                <i class="fas fa-sun"></i>
                            </button>
                        </NavIcon>
                        <NavText>
                            Dark/Light theme
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        </div>
    )
}
