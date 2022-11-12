import React from "react";
import Button from "@material-ui/core/Button";

//defination  of Question1 widget
//all the mathod define in actionprovider and all states of widget are passed in props
//you can use all fuunction and state with the help of props
const Q201 = (props) => {
  return (
    <>
      <ul>
        <li>
          <Button style={{ background: 'yellow' }} onClick={props.actionProvider.Q3o1}> <img src="https://cdn-icons-png.flaticon.com/128/8831/8831750.png"
          />
            1) CLean greens on silver platter 
          </Button>
        </li>
        <p></p>
        <li>
          <Button style={{ background: 'yellow' }} onClick={props.actionProvider.Q3o1}> <img src="https://cdn-icons-png.flaticon.com/128/1923/1923515.png"
          />
            2) Messy takeout in a foil tray
          </Button>
        </li>
      </ul>
    </>
  );
};
export default Q201;