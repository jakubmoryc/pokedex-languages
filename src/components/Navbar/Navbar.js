import React from 'react'

import { Navbar as NavbarBootstrap } from 'reactstrap'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';


export default function Navbar(props) {
    return (
        <nav>
            <NavbarBootstrap className="navbar" color="dark" padding="3">
                <form 
                    id="search" 
                    className="pushFromSidebar"
                    onSubmit={props.submitHandler}>
                    <InputGroup>
                        <InputGroupAddon className="prepend" addonType="prepend">
                            @
                        </InputGroupAddon>
                        <Input 
                            placeholder="number or name" 
                            value={props.value}
                            onChange={props.formHandler}
                        />
                    </InputGroup>
                </form>
            </NavbarBootstrap>
        </nav>
    )
}
