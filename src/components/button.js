import React, {useState , useEffect} from 'react'
import {LeftOutlined, RightOutlined} from '@ant-design/icons';

const limit = 4;


const ButtonClick = (props)=>{

    const [btnState, __stateFunc] = useState(1);

    useEffect(()=>{
        
       props.activePage(btnState)

    },[btnState, __stateFunc])

    const leftClicks = (e)=>{
        return  btnState > 1 ?  __stateFunc( btnState - 1) : btnState;
    }

    const rightClicks = (e)=>{
        return btnState < limit ?  __stateFunc(btnState + 1) : btnState;
    }

    return(
        <>
            <div className="button-container">
                <button className="btn-prev" onClick={(e)=> leftClicks(e)}>
                    <LeftOutlined />
                </button>

                <button className="btn-next" onClick={(e)=> rightClicks(e)}>
                    <RightOutlined />
                </button>
            </div>
        </>
    )
}



export default ButtonClick