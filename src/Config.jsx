import { createChatBotMessage } from "react-chatbot-kit";
import Q1 from "./widgets/Q1";
import Q2o1 from "./widgets/Q2o1";
import Q301 from "./widgets/Q301";
import Q401 from "./widgets/Q401";
import Q501 from "./widgets/Q501";
import Q601 from "./widgets/Q601";
import Q7 from "./widgets/Q7";
import React from "react";

const botName = "Eshwar Prasad";
//congig for chatbot
const config = {
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  initialMessages: [createChatBotMessage(`Hi, i am ${botName}`)],
    customComponents: {
        // Replaces the default header
        header: () => <div style={{ backgroundColor: 'yellow', padding: "5px", borderRadius: "3px" }}>Eshwar's Music bot at your service</div>
    },
  state: {
    Q1State: [
      "Q2o1",
      "Q2o2",
    ],
  },
  //widgets declaration section which we use in our bot for display information
  widgets: [
    // {
    //   widgetName: "Q1",
    //   widgetFunc: (props) => <Q1 {...props} />,
    //   mapStateToProps: ["Enrollment"],
    // },

    {
      widgetName: "Q1",
      widgetFunc: (props) => <Q1 {...props} />,
      mapStateToProps: ["Q2o1"],
    },
    {
      widgetName: "Q2o1",
      widgetFunc: (props) => <Q2o1 {...props} />,
      mapStateToProps: ["Q3"],
    },
    {
      widgetName: "Q3o1",
      widgetFunc: (props) => <Q301 {...props} />,
      mapStateToProps: ["Q4"],
    },
    {
      widgetName: "Q4o1",
      widgetFunc: (props) => <Q401 {...props} />,
      mapStateToProps: ["Q5"],
    },
    {
      widgetName: "Q501",
      widgetFunc: (props) => <Q501 {...props} />,
      mapStateToProps: ["Q6"],
    },
    {
      widgetName: "Q601",
      widgetFunc: (props) => <Q601 {...props} />,
      mapStateToProps: ["Q7"],
    },
    {
      widgetName: "Q7",
      widgetFunc: (props) => <Q7 {...props} />,
      mapStateToProps: ["Q7"],
    },
  ],
};

export default config;
