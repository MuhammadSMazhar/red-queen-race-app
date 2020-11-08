import useWebAnimations ,{bounce} from "@wellyshen/use-web-animations";
import React from "react";
import "./App.css";

export default function Animation() { 
  // const ref = useRef(null);
  const { ref, playState, getAnimation } = useWebAnimations({...bounce});

  return (
    <div>
          <div className="target" ref={ref}>
        
        </div>
        current animation state :{playState}
        <button onClick={()=>getAnimation().pause()} >Stop</button>
        <button onClick={()=>getAnimation().play()} >Play</button>
    </div>
  );
}

