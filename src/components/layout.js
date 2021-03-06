/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useRef,useEffect} from "react"

import Header from "./header"
import SideBar from "./sidebar"
import {TweenMax , Power3} from 'gsap'

const Layout = ({
    mainActivePage, 
    children}) => 
{

  const mainRefs = useRef(null);


  useEffect(()=>{

    const childElem = mainRefs.current.querySelectorAll('.hero-page')

    childElem.forEach( ( el , indx) => {
      removeActiveElements(el , indx);
        /*
        *  (mainActivePage - 1) Set Active Page to 0 since index start at (0)
        */
        if((mainActivePage -1) == indx){
            el.classList.add('active-page');
            animationList(el)
        }
    });
    
  },[mainActivePage])


  function removeActiveElements(el , indx){

    if(el.classList.contains('active-page') ){
        el.classList.remove('active-page')
    }
  }

  function animationList(el){
    const prevSibling =  el.previousSibling;
    const nextSibling =  el.nextSiblings;

    TweenMax.to(prevSibling, 1,{
      opacity :1,
      position: 'absolute',
      left: 0,
      bottom: 0,
      opacity: 0,
      pointerEvents: 'none'
    })

  }


  return (
    <>
      {/* Animation Linear */}
      <div className="linear-animation"> 
          <span></span>
          <span></span> 
          <span></span> 
      </div>

      <Header siteTitle={`Penny Mccoy`} />
      <SideBar />
  
        <main className="pages" ref={mainRefs}>
          {
            children
          }
        </main>
    </>
  )
    
  /*
  * main cla
  */

}


export default Layout
