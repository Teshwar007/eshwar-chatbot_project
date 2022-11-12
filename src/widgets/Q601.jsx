import React from "react";
import Button from "@material-ui/core/Button";

//defination  of Question1 widget
//all the mathod define in actionprovider and all states of widget are passed in props
//you can use all fuunction and state with the help of props
const Q601 = (props) => {
  return (
    <>
      <ul>
        <li>
          <Button style={{ background: 'yellow' }} onClick={props.actionProvider.Q601}> <img src="https://cdn-icons-png.flaticon.com/128/2121/2121098.png"
          />
            1) "SO go F**K Yourself!" 
          </Button>
        </li>
      </ul>
    </>
  );
};
export default Q601;