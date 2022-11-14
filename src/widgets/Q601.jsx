import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { useState, useEffect } from "react";

//defination  of Question1 widget
//all the mathod define in actionprovider and all states of widget are passed in props
//you can use all fuunction and state with the help of props
const CLIENT_ID = "60ece375af0949c4b98c642a03bdb63c";
const CLIENT_SECRET = "83ef5422f3864c669eb8da0413e08fd5";

const Q601 = (props) => {
    const [accessToken, setAccessToken] = useState("");
    useEffect(() => {
        ///API ACESS token
        var authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
        }
        fetch('https://accounts.spotify.com/api/token', authParameters)
        .then(result => result.json())
        .then(data => setAccessToken(data.access_token))
    }, []);
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    };
    
    async function search() {
      console.log("search for"); 
      const mood = [localStorage.getItem("motto"), localStorage.getItem("Relax"), localStorage.getItem("identify"), localStorage.getItem("morning"), localStorage.getItem("dinner")];
      const rock = ['day', 'Song', 'winter', 'gym', 'greens']
      var vibe = "";
      console.log(mood.includes("day") && mood.includes("Song") )
      if (mood.includes("day") && mood.includes("Song") ) {
        var vibe = "rock"
      }
      else if (mood.includes("snooze") && mood.includes("messy") && mood.includes("Song") && mood.includes("rose") && mood.includes("summer")) {
        var vibe = "focus"
      }
      if (mood.includes("gym") && mood.includes("greens") && mood.includes("Song") && mood.includes("day") && mood.includes("summer")) {
        var vibe = "lo-fi"
      }
      if (mood.includes("snooze") && mood.includes("messy") && mood.includes("Song") && mood.includes("day") && mood.includes("summer")) {
        var vibe = "party"
      }
      if (mood.includes("snooze") && mood.includes("messy") && mood.includes("Song") && mood.includes("rose") && mood.includes("winter")) {
        var vibe = "Rap"
      }
      if (mood.includes("gym") && mood.includes("messy") && mood.includes("Song") && mood.includes("rose") && mood.includes("winter")) {
        var vibe = "Rap"
      }
      else {
        var vibe = "latest"
      }
      console.log(vibe)

      ///Get tracks based on the query
        var trackParameters = {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
            }
        };
        var trackID = await fetch('https://api.spotify.com/v1/search?q=' + vibe +'&type=track', trackParameters)
          .then(response => response.json())
          .then(data => {return data.tracks.items[getRandomInt(15)].id})
          console.log('trackis is',trackID)
          localStorage.setItem("trackID",trackID)
          props.actionProvider.Q7()
    };
    
  return (
    <>
      <ul>
        <Button style={{ background: 'yellow' }} onClick={search}> <img src="https://cdn-icons-png.flaticon.com/128/0/375.png"
          />
            1) Bring it on!!!
          </Button>
      </ul>
    </>
  );
};
export default Q601;