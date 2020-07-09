import React from 'react';


const Counter = (props)=>{
    return(
        <>
            <section className="counter">
                <span className="counter-active">{`0${props.num}`} / </span>
                <span className="limit"> 04</span>
            </section>
        </> 
    )   
}


export default Counter