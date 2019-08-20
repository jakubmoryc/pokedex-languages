import React from 'react'

import { Navbar as NavbarBootstrap } from 'reactstrap'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';


export default function Navbar() {
    return (
        <nav>
            <NavbarBootstrap className="navbar" color="dark" padding="3">
                <form id="search" className="pushFromSidebar">
                    <InputGroup>
                        <InputGroupAddon className="prepend" addonType="prepend">
                            #
                        </InputGroupAddon>
                        <Input placeholder="number or name" />
                    </InputGroup>
                </form>
            </NavbarBootstrap>
        </nav>
    )
}
