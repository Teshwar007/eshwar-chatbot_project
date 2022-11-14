import React from "react";

//defination  of Question1 widget
//all the mathod define in actionprovider and all states of widget are passed in props
//you can use all fuunction and state with the help of props
const Q7 = (props) => {
    
  return (
    <>
      <ul>
        <li>
          <iframe  src= {'https://open.spotify.com/embed/track/' + localStorage.getItem("trackID") + '?utm_source=generator'}  width="100%" height="252" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" loading="lazy"></iframe>
        </li>
      </ul>
    </>
  );
};
export default Q7;