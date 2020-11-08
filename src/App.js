// import useWebAnimations from "@wellyshen/use-web-animations";
import React from "react";
// import Animation from "./animation";
import "./App.css";
import RedQueen from "./redQ";
 
function App() {
  // const ref = useRef(null);
  // const { ref, playState, getAnimation } = useWebAnimations({
  //   keyframes: [
  //     {transform: 'translate(0,0)'},
  //     {transform: 'translate(500px,0)'},
  //     // {transform: 'translate(0,0)'},
  //   ],
  //   timing: {
  //     // delay: 500,
  //     duration: 1000,
  //     iterations: Infinity,
  //     direction: "alternate",
  //     easing: "ease-in-out",
  //   },
  //   // onReady: ({ playState, animate, animation }) => {},
  //   // onUpdate: ({ playState, animate, animation }) => {},
  //   // onFinish: ({ playState, animate, animation }) => {},
  // });

  return (
    <div>
      {/* <input type="text"  ref={element} /> */}
      {/* <div className="target" ref={ref}> */}
        
      {/* </div> */}
      {/* current animation state :{playState}
      <button onClick={()=>getAnimation().pause()} >Stop</button>
      <button onClick={()=>getAnimation().play()} >Play</button> */}
      {/* <div>
        <Animation />
      </div> */}
      <div>
      <RedQueen/>
      </div>
    </div>
  );
}

export default App;
