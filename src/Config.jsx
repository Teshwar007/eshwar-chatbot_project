import { createChatBotMessage } from "react-chatbot-kit";
import EnrollmentNo from "./widgets/EnrollmentNo";
import SoftwareDevelopment from "./widgets/SoftwareDevelopment";
import WebDevelopment from "./widgets/WebDevelopment";
import Tools from "./widgets/Tools";
import WeatherInfo from "./widgets/WeatherInfo";
import Options from "./widgets/Options/Options";
import Q1 from "./widgets/Q1";
import Q2o1 from "./widgets/Q2o1";
import Q301 from "./widgets/Q301";
import Q401 from "./widgets/Q401";
import Q501 from "./widgets/Q501";
import Q601 from "./widgets/Q601";
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
    WebDevelopmentState: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "BOOTSTRAP",
      "JQUERY & AJAX",
      "SASS",
      "REACT",
      "REDUX",
      "NODEJS",
      "EXPRESS",
      "MONGODB & MONGOOSE",
    ],
    ToolsState: [
      "enrollment number",
      "web development",
      "software development",
      "whether info",
    ],
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
      widgetName: "EnrollmentNo",
      widgetFunc: (props) => <EnrollmentNo {...props} />,
      mapStateToProps: ["Enrollment"],
    },
    {
      widgetName: "WebDevelopment",
      widgetFunc: (props) => <WebDevelopment {...props} />,
      mapStateToProps: ["WebDevelopmentState"],
    },
    {
      widgetName: "SoftwareDevelopment",
      widgetFunc: (props) => <SoftwareDevelopment {...props} />,
    },
    {
      widgetName: "Tools",
      widgetFunc: (props) => <Tools {...props} />,
      mapStateToProps: ["ToolsState"],
    },
    {
      widgetName: "WeatherInfo",
      widgetFunc: (props) => <WeatherInfo {...props} />,
      mapStateToProps: ["WeatherInfo"],
    },
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
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
  ],
};

export default config;
