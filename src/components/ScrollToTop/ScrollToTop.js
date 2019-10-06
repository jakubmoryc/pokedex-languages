import React from 'react'

import iconUp from '../../img/icons8-upward.svg'

export default function ScrollToTop({scrollFunction}) {
    return (
        <button onClick={scrollFunction} id="scroll-to-top" title="Go to top">
            <img src={iconUp} id="scroll-icon"></img>
        </button>
    )
}
