import React, { useEffect, useState } from 'react'
import Img from "./r1.png";
import Img2 from "./r2.png";
import Img3 from "./r3.png";
import btn1 from "./arrowleft.png";
import btn2 from "./arrowup.png";
import btn3 from "./arrowdown.png";
import robot from "./robot.png";
import btn4 from "./arrowright.png";
// import Image from './Image';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RefreshIcon from "@mui/icons-material/Refresh";
export default function Firstp() {
  var [lis_,set_lis]=useState([]);
  var [xaxix,setxaxis]=useState(0);
  var [yaxix, setyaxis] = useState(0);
  console.log(xaxix,yaxix);
  var [state,setstate]=useState();
  var [axis,setaxis]=useState(0);
  console.log("hi i am axis ",axis);

  var [end,setend]=useState(0);
  // console.log(end);
  var [div_,setdiv_]=useState();
  function eventhandler(e){
    
    var select =e.target;
    var parent=select.parentElement;
    setdiv_(parent);
    setstate(select);
    
  }
  function function_insider(e) {
    var main=e.target;
    var b=parseInt(main.id.slice(main.id.length - 1, main.id.length ));
    var obj_={};
    obj_["pos"]=b;
    
    main.appendChild(state);
    setTimeout(()=>{
      console.log(div_.className);
      var len = div_.className.length;
      var index = parseInt(div_.className.slice(len - 1, len));
      
      obj_["btn_pos"] = index;
      var new_lis=lis_;
      new_lis.push(obj_);
      set_lis(new_lis);
      var img_ = document.createElement("img");
      img_.style.width = "100%";
      img_.style.height = "100%";
      img_.draggable = "true";
      img_.ondragstart = (e) => {
        eventhandler(e);
      };
      div_.className === "btn0"
        ? (img_.src = `${btn1}`)
        : div_.className === "btn1"
        ? (img_.src = `${btn2}`)
        : div_.className === "btn2"
        ? (img_.src = `${btn3}`)
        : div_.className === "btn3"
        ? (img_.src = `${btn4}`)
        : (img_.src = `${btn4}`);

      var list = div_.childNodes;
      console.log(list.length);
      if (!list.length) {
        div_.appendChild(img_);
      }
    },0);
   

  }
    var list_ = [
      1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2, 3, 5, 6, 7, 8, 9,
      10, 9, 10,
    ];
    var li2 = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    var li_4=[1,2,3,4,5,5,6,7,8,9,10];
    
  return (
    <div className="main">
      <div id="left">
        <div id="slide">
          <div id="firsthalf">
            <img id="logo" src={Img} />
            <div id="fsf">
              {
                li_4.map((e,i)=>{
                  if (i==10){
                    return (
                      <>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            // border: "1px solid white",
                            width: "3%",
                          }}
                        >
                          <div
                            style={{
                              width: "20%",
                              minWidth: "70%",
                              minHeight: "50%",
                              background: "white",
                              borderRadius: "50%",
                            }}
                            id="circle"
                          >
                            {" "}
                          </div>
                          <div style={{ color: "white" }}>{e}</div>
                        </div>
                      </>
                    );
                  }
                  else{
                    return (
                      <>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            // border: "1px solid white",
                            width: "3%",
                          }}
                        >
                          {i <= 6 ? (
                            <div
                              style={{
                                width: "20%",
                                minWidth: "70%",
                                minHeight: "50%",
                                background: "green",
                                borderRadius: "50%",
                              }}
                              id="circle"
                            >
                              {" "}
                            </div>
                          ) : i == 7 ? (
                            <div
                              style={{
                                width: "20%",
                                minWidth: "70%",
                                minHeight: "50%",
                                background: "yellow",
                                borderRadius: "50%",
                              }}
                              id="circle"
                            >
                              {" "}
                            </div>
                          ) : (
                            <div
                              style={{
                                width: "20%",
                                minWidth: "70%",
                                minHeight: "50%",
                                background: "white",
                                borderRadius: "50%",
                              }}
                              id="circle"
                            >
                              {" "}
                            </div>
                          )}
                          <div style={{ color: "white" }}>{e}</div>
                        </div>
                        <div
                          style={{
                            width: "6%",
                            height: "5%",
                            background: "white",
                            marginTop: "1.2%",
                          }}
                          id="slit"
                        ></div>
                      </>
                    );
                  }
                  
                })
              }
            </div>
          </div>
          <div id="secondhalf"></div>
        </div>
        <div id="down">
          <div id="ldow">
            <div className="ldsm" id="same">
              {" "}
              <img
                src={Img2}
                style={{
                  width: "8%",
                  height: "70%",
                  background: "black",
                  marginRight: "2%",
                }}
              />{" "}
              Learn
            </div>
            <div id="cont">
              <li>
                {" "}
                Set the starting positon : Drag and place the sprite on the
                stage to set its initial position. Click and drag the sprite to
                position it where you want it to start.
              </li>
              <li>
                Set the starting positon : Drag and place the sprite on the
                stage to set its initial position. Click and drag the sprite to
                position it where you want it to start.
              </li>
              <li>
                Set the starting positon : Drag and place the sprite on the
                stage to set its initial position. Click and drag the sprite to
                position it where you want it to start.
              </li>
            </div>
          </div>
          <div id="rdow">
            <div id="same0">
              <img src={Img3} id="img_3" /> Build
            </div>
            <div id="grid_div">
              <div id="one" className="grid_s">
                {list_.map((e, i) => {
                  if (i !== 24) {
                    return (
                      <div key={i} className="insame" id={`insisame${i}`}>
                        {axis === i ? (
                          <img
                            src={robot}
                            style={{ width: "40px", height: "40px" }}
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  } else {
                    return (
                      <div key={i} className="insame" id={`insisame${i}${end}`}>
                        {axis === i ? (
                          <img
                            src={robot}
                            style={{ width: "40px", height: "40px" }}
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  }
                })}
                {/* <div id="insisame0"></div> */}
                {/* <div id="insisame24"></div>; */}
              </div>
              <div className="os" id="one">
                <div id="osli">
                  <h4>Instructions Implemented</h4>
                </div>
                <div id="oslicontent">
                  <li id="oli">Robot Move Left</li>
                  <li id="oli">Robot Move Down</li>
                  <li id="oli">Robot Move Left</li>
                  <li id="oli">Robot Move Down</li>
                  <li id="oli">Robot Move Left</li>
                  <li id="oli">Robot Move Down</li>
                  <li style={{ fontWeight: 600 }} id="oli">
                    ... Robot reached the destination
                  </li>
                </div>
              </div>
            </div>

            {/* Logic panel */}
            <div className="logic_pannel">
              <div id="upl">
                <h2>Logic Panel</h2>
                <div id="dragable">
                  {li2.map((e, i) => {
                    return (
                      <div
                        onDragOver={(e) => {
                          e.preventDefault();
                        }}
                        onDrop={(e) => {
                          return function_insider(e);
                        }}
                        key={i}
                        id={`drags${i}`}
                        className="drags"
                      ></div>
                    );
                  })}
                </div>
              </div>
              <div id="lpl">
                <div className="btn0" id="btns">
                  {/* <Image props={btn1} /> */}
                  <img
                    onDragStart={eventhandler}
                    src={btn1}
                    draggable="true"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="btn1" id="btns">
                  <img
                    onDragStart={eventhandler}
                    src={btn2}
                    draggable="true"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="btn2" id="btns">
                  <img
                    onDragStart={eventhandler}
                    src={btn3}
                    draggable="true"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="btn3" id="btns">
                  <img
                    onDragStart={eventhandler}
                    src={btn4}
                    draggable="true"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <button
                  onClick={(e) => {
                    // console.log(lis_);
                    lis_.forEach((e, i) => {
                      // console.log(i,i+1);
                      var a = lis_.slice(i, i + 1);
                      console.log(a);
                      var { pos, btn_pos } = a[0];
                      if (btn_pos === 2) {
                        setTimeout(() => {
                          if (axis === 24) {
                            console.log("we are in");
                            // setend(1);
                          } else {
                            axis += 5;
                            setaxis(axis);
                          }
                        }, 1000);
                      } else {
                        setTimeout(() => {
                          if (axis === 24) {
                            console.log("we are in");
                            // setend(1);
                          } else {
                            axis += 1;
                            setaxis(axis);
                          }
                        }, 2000);
                      }
                    });
                  }}
                  id="playbtn"
                >
                  {" "}
                  <PlayArrowIcon id="icons" /> Play
                </button>
                <button
                  onClick={(e) => {
                    setaxis(0);
                    var parent = e.target.parentElement
                      ? e.target.parentElement.parentElement.parentElement
                          .parentElement
                      : e.target.parentElement;

                    var c = parent.childNodes[2]
                      ? parent.childNodes[2].childNodes[0]
                      : parent.childNodes[2];
                    var ed = c ? c.childNodes[1].childNodes : null;
                    ed.forEach((e) => {
                      console.log(e.hasChildNodes());
                      if (e.hasChildNodes()) {
                        var child = e.childNodes[0];
                        e.removeChild(child);
                      }
                    });
                  }}
                  id="reboot"
                >
                  <RefreshIcon id="icons0" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
