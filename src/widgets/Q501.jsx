import React from "react";
import Button from "@material-ui/core/Button";

//defination  of Question1 widget
//all the mathod define in actionprovider and all states of widget are passed in props
//you can use all fuunction and state with the help of props
const Q501 = (props) => {
  return (
    <>
      <ul>
        <li>
          <Button style={{ background: 'yellow' }} onClick={props.actionProvider.Q601}> <img src="https://cdn-icons-png.flaticon.com/128/642/642000.png"
          />
            1) "Wrapping up for winter!" 
          </Button>
        </li>
        <p></p>
        <li>
          <Button style={{ background: 'yellow' }} onClick={props.actionProvider.Q601}> <img src="https://cdn-icons-png.flaticon.com/128/2917/2917242.png"
          />
            2) "Throwing it all of in the summer!"
          </Button>
        </li>
      </ul>
    </>
  );
};
export default Q501;