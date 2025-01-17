import React from 'react'
import { useSelector } from 'react-redux'

function Header() {
    const { isLoading, error, flights } = useSelector(store => store.flightReducer)

    return (
        <header>
            <div>
                <img src="plane-logo.png" alt="plane-logo" />
                <h3>Ucus Radari</h3>
            </div>

            <h3>{isLoading
                ? "Ucuslar araniyor"
                : error
                    ? "Hata :" + error
                    : `${flights.length} Ucus Bulundu`}</h3>
        </header>
    )
}

export default Header
