import React from 'react';
import { useEffect } from 'react';
import AnimationThree from "../../animation3D/Animation3D"
import GridWithCones from './testTHREE';


const Diamonds = () => {

    useEffect(() => {
      //const anim = new AnimationThree();
      //anim.init();
    }, [])
    
      
    return (
        
            <GridWithCones />        
        
    )
}

export default Diamonds;