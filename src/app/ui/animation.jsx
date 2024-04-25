"use client"
import { useEffect, useRef, useState } from 'react';
import { Player } from '@lordicon/react';
const icons = {
    superstar: {
        src: require('./wired-outline-2239-star-of-bethlehem.json'),
        size: 120,
        states: {
            reveal: 'in-reveal', // verify state name in the official documentation
            hover: 'hover-detach',
            click: 'morph-detach',
        },
    },
    puzzle: {
        src: require('./wired-outline-186-puzzle.json'),
        size: 120,
        states: {
            reveal: 'in-reveal', // verify state name in the official documentation
            hover: 'hover-detach',
            click: 'morph-detach',
        },
    },
    stars:{
      src: require('./wired-outline-1865-shooting-stars.json'),
      size: 120,
      states: {
          reveal: 'in-reveal', // verify state name in the official documentation
          hover: 'hover-detach',
          click: 'morph-detach',
      },

    }
    }

export default function Lord(props) {   
    const [icon, setIcon] = useState(icons[props.icon]);
    const playerRef = useRef(null);
    const [state, setState] = useState();
    const onHover = () => {
        playerRef.current?.goToFirstFrame()
        setState(icon.states.hover)
        playerRef.current?.play()
    }
    
    useEffect(() => {
        playerRef.current?.playFromBeginning();
    }, [])
    return (
      
        <div onMouseOver={onHover} >
        <Player 
          ref={playerRef} 
          size={icon.size} 
          icon={icon.src}
          state={state}
        />
       </div>
       
    );
    
};