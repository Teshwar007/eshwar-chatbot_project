import React from "react";
import Button from "@material-ui/core/Button";

//defination  of Question1 widget
//all the mathod define in actionprovider and all states of widget are passed in props
//you can use all fuunction and state with the help of props
const Q1 = (props) => {
  return (
    <>
      <ul>
        <li>
          <Button
            className="my-1"
            variant="outlined"
            color="primary"
            onClick={props.actionProvider.Q2o1}
          >
            Hit the gym!
          </Button>
        </li>
        <li>
          <Button
            className="my-1"
            variant="outlined"
            color="primary"
            onClick={props.actionProvider.Q2o2}
          >
            Hit the snooze button!
          </Button>
        </li>
      </ul>
    </>
  );
};
export default Q1;