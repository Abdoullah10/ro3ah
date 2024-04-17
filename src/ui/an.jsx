"use client"
import { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';
const ICON = '/wired.json'

export default function App() {    
    const playerRef = useRef(null);
    
    useEffect(() => {
        playerRef.current?.playFromBeginning();
    }, [])
  
    return (
      
        <Player 
          ref={playerRef} 
          size={96} 
          icon={ICON}
        />
       
    )
    
}