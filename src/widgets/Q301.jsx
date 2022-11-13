import React from "react";
import Button from "@material-ui/core/Button";

//defination  of Question1 widget
//all the mathod define in actionprovider and all states of widget are passed in props
//you can use all fuunction and state with the help of props
const Q301 = (props) => {
  let onClick = (e) => {
    // console.log(e.target.outerText.includes("GYM"));
    if(e.target.outerText.includes("NOVEL")){
      localStorage.setItem("Relax","Novel")
    }
    else{
      localStorage.setItem("Relax","Song")
    }
    props.actionProvider.Q4o1()
  }
  return (
    <>
      <ul>
        <li>
          <Button style={{ background: 'yellow' }} onClick={(e) => {onClick(e)}}> <img src="https://cdn-icons-png.flaticon.com/128/2383/2383122.png"
          />
            1) Read a nice romance Novel 
          </Button>
        </li>
        <p></p>
        <li>
          <Button style={{ background: 'yellow' }} onClick={(e) => {onClick(e)}}> <img src="https://cdn-icons-png.flaticon.com/128/3656/3656968.png"
          />
            2) Yell along to your fav break-up song
          </Button>
        </li>
      </ul>
    </>
  );
};
export default Q301;