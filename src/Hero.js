import React from 'react'

const Hero = ({handleLogOut}) => {
    return (
        <section className="hero">
             <nav>
                 <h2>Welcom</h2>
                 <button onClick={handleLogOut}>Log out</button>
             </nav>
        </section>
    )
}

export default Hero
