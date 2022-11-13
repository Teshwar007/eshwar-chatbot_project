import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Config from "./Config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import "./app.css";
import { useEffect, useRef, menuRef} from "react";

function App() {
    const [showBot, toggleBot] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        document.addEventListener("mousedown", (event) => {
            if (!menuRef.current.contains(event.target)) {
                toggleBot(false);
            }
        })
    });

    const saveMessages = (messages, HTMLString) => {
        localStorage.setItem('chat_messages', JSON.stringify(messages));
    };
    const loadMessages = () => {
        const messages = JSON.parse(localStorage.getItem('chat_messages'));
        return messages;
    };
  return (
      <>
          <div className="app" >
        <div className="container">
          <h1>
                      Music Chat bot by {" "}
                      <span style={{ color: "gold", fontFamily: "cursive", alignContent: "center" }}>Eshwar Prasad</span>
                  </h1>
                  <div><button className="glow-on-hover" onClick={ () => {toggleBot((prev) => !prev) ; console.log("Toggle")}}>Music Bot</button></div>
                
        </div>
              <div ref={ menuRef} className="App mx-auto col-md-6 col-sm-8 col-lg-4 cpl-xl-3 my-5">
          {showBot && (<Chatbot
            config={Config} // to 
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            messageHistory={loadMessages()}
            saveMessages={saveMessages}
          />
        )}
        </div>
              
      </div>
    </>
  );
}

export default App;
