 "use client"
import { useEffect, useRef, useState } from 'react';
import { Player } from '@lordicon/react';

export default function Lord(props) {    
    const playerRef = useRef(null);
    const [state, setState] = useState('in-reveal');
    useEffect(() => {
        playerRef.current?.playFromBeginning();
    }, [])
    return (
      
        <Player 
          ref={playerRef} 
          size={96} 
          icon={require(props.src)}
          state={state}

        />
       
    );
    
};