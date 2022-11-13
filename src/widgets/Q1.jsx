import React from "react";
import Button from "@material-ui/core/Button";

//defination  of Question1 widget
//all the mathod define in actionprovider and all states of widget are passed in props
//you can use all fuunction and state with the help of props
const Q1 = (props) => {
  let onClick = (e) => {
    // console.log(e.target.outerText.includes("GYM"));
    if(e.target.outerText.includes("GYM")){
      localStorage.setItem("morning","gym")
    }
    else{
      localStorage.setItem("morning","snooze")
    }
    props.actionProvider.Q2o1()
  }
  return (
    <>
      <ul>
        <li>
          <Button style={{ background: 'yellow' }} onClick={(e) => {onClick(e)}}>1.) <img src="https://cdn-icons-png.flaticon.com/128/1414/1414446.png"/>
           By hitting the gym!
          </Button>
        </li>
        <p></p>
        <li>
          <Button style={{ background: 'yellow' }} onClick={(e) => {onClick(e)}}>2.) <img src="https://cdn-icons-png.flaticon.com/128/711/711628.png"
            />
           2. By Hitting the snooze button!
          </Button>
        </li>
      </ul>
    </>
  );
};
export default Q1;