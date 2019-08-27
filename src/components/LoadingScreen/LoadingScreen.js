import React from 'react'

import { Spinner } from 'reactstrap';

export default function LoadingScreen() {
    return (
        <div className="centerContentScreen">
            <Spinner className="spinner" color="light" />
        </div>
    )
}
