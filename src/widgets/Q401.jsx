import React from "react";
import Button from "@material-ui/core/Button";

//defination  of Question1 widget
//all the mathod define in actionprovider and all states of widget are passed in props
//you can use all fuunction and state with the help of props
const Q401 = (props) => {
  let onClick = (e) => {
    // console.log(e.target.outerText.includes("GYM"));
    if(e.target.outerText.includes("DAY")){
      localStorage.setItem("motto","day")
    }
    else{
      localStorage.setItem("motto","rose")
    }
    props.actionProvider.Q501()
  }
  return (
    <>
      <ul>
        <li>
          <Button style={{ background: 'yellow' }} onClick={(e) => {onClick(e)}}> <img src="https://cdn-icons-png.flaticon.com/128/0/375.png"
          />
            1) "Seize the day!" 
          </Button>
        </li>
        <p></p>
        <li>
          <Button style={{ background: 'yellow' }} onClick={(e) => {onClick(e)}}> <img src="https://cdn-icons-png.flaticon.com/128/16/16427.png"
          />
            2) "Seize the Rose"
          </Button>
        </li>
      </ul>
    </>
  );
};
export default Q401;