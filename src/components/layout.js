/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useRef,useEffect} from "react"

import Header from "./header"
import SideBar from "./sidebar"

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

    console.log(prevSibling);

  }


  return (
    <>
      <Header siteTitle={`Penny Mccoy`} />
      <SideBar />

        <main className="pages" ref={mainRefs}>
            {
              children
            }
        </main>
    </>
  )

}


export default Layout
