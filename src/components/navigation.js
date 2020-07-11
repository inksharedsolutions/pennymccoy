import React, { useState, useEffect } from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Navigation = ()=>{

    const [burgerState, __burgerFunc] = useState(false);


    const pages = [
        'Home',
        'About-the-Author', 
        'About-the-Book', 
        'Contact'
   ]

   function capitalize(string) {
       return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
   }
   

   let Listed = pages.map((e, i) =>{
        
       var newUrl = ((e).replace(/[ /]/g,"-").trim().toLowerCase());
       let filterUrl = (newUrl === 'home') ? '/' : newUrl;

       const res = e.replace(/[-/]/g," ").trim();
   
       return (
           <li>
               <AniLink
                   to={filterUrl}>
                    <span>
                        {`0${i + 1}.`}
                    </span>
                        {res}
               </AniLink>
           </li>
       )
   })

   useEffect(()=>{
    
    console.log(burgerState);


   }, [burgerState, __burgerFunc])


 
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
                
      
                <nav 
                    className="burger-nav" 
                    onClick={()=> {__burgerFunc(!burgerState)}}
                >

                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                </nav>
         
            </nav>

            {
                burgerState && (
                    <nav className="navigations-body">
                        <div className="container">
                            <div className="nav-header">
                                <h1>Navigations</h1>
                                <div>
                                    <span className="hamburger-parent-x-mark" onClick={()=>__burgerFunc(!burgerState)}>
                                        <span className="hamburger-x-mark"></span>
                                        <span className="hamburger-x-mark"></span>
                                    </span>
                                </div>
                            </div>
                            
            
                            <nav className="nav-list">
                                {
                                    Listed
                                }
                            </nav>
                        </div>
                    </nav>
                )
            }

        </>
    )
}

export default Navigation;