import React from "react";
import Button from "@material-ui/core/Button";

//defination  of Question1 widget
//all the mathod define in actionprovider and all states of widget are passed in props
//you can use all fuunction and state with the help of props
const Q401 = (props) => {
  return (
    <>
      <ul>
        <li>
          <Button style={{ background: 'yellow' }} onClick={props.actionProvider.Q501}> <img src="https://cdn-icons-png.flaticon.com/128/0/375.png"
          />
            1) "Seize the day!" 
          </Button>
        </li>
        <p></p>
        <li>
          <Button style={{ background: 'yellow' }} onClick={props.actionProvider.Q501}> <img src="https://cdn-icons-png.flaticon.com/128/16/16427.png"
          />
            2) "Seize the Rose"
          </Button>
        </li>
      </ul>
    </>
  );
};
export default Q401;