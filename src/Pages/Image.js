import React from 'react'

export default function Image({props}) {
    console.log(props)
  return (
    <>
      <img onDragStart={(e)=>{
            console.log(e.target);
      }}
        src={props}
        draggable="true"
        style={{ width: "100%", height: "100%" }}
      />
    </>
  );
}
