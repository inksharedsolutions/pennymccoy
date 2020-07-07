import React from 'react'


const Navigation = ()=>{
    return(
        <> 
            <nav className="navigation">
                <li>
                    <img src={``}/>
                </li>
                <li>
                    <h1>
                        Penny Mccoy
                    </h1>
                </li>
                <li>
                    <nav className="burger-nav">
                        <span className="burger-line"></span>
                        <span className="burger-line"></span>
                        <span className="burger-line"></span>
                    </nav>
                </li>
            </nav>
        </>
    )
}

export default Navigation;