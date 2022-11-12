class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  //method for add message in our chatbot
  addMessageToBotState = (messages) => {
    if (Array.isArray(messages)) {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, ...messages],
      }));
    } else {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, messages],
      }));
    }
  };

  //simple greeting which return simple message
  Greeting = () => {
    const message = this.createChatBotMessage(`Hey , how is your day going ?`, {
        withAvatar: true,
    });
    this.addMessageToBotState(message);
  };

  //use tools widget, return button and action doing
  Tools = () => {
    const message = this.createChatBotMessage(
      `we provides this much features`,
      {
        withAvatar: true,
        widget: "Tools",
      }
    );
    this.addMessageToBotState(message);
  };

  //for weather widget, API testing and fetch data return current weather info of city using API
  WeatherInfoHandle = () => {
    const message = this.createChatBotMessage(
      `enter your city name to know weather if your city`,
      {
        withAvatar: true,
        widget: "WeatherInfo",
      }
    );
    this.addMessageToBotState(message);
  };

  Q2o1 = () => {
    const message = this.createChatBotMessage("whats for dinner tonight?", {
      loading: true,
      withAvatar: true,
      widget: "Q2o1",
    });
    this.addMessageToBotState(message);
  };

  Q3o1 = () => {
    const message = this.createChatBotMessage("How do you like to relax at home?", {
      loading: true,
      withAvatar: true,
      widget: "Q3o1",
    });
    this.addMessageToBotState(message);
  };

  Q4o1 = () => {
    const message = this.createChatBotMessage("What is your motto in Life?", {
      loading: true,
      withAvatar: true,
      widget: "Q4o1",
    });
    this.addMessageToBotState(message);
  };

  Q501 = () => {
    const message = this.createChatBotMessage("What is your motto in Life?", {
      loading: true,
      withAvatar: true,
      widget: "Q501",
    });
    this.addMessageToBotState(message);
  };
  Q601 = () => {
    const message = this.createChatBotMessage("Sounds like you are a yerri puku listener", {
      loading: true,
      delay: 200,
      withAvatar: true,
      widget: "Q601",
    });
    this.addMessageToBotState(message);
  };


  //display list using help of states array
  WebHandler = () => {
    const messages = this.createChatBotMessage(`cources for web development:`, {
      withAvatar: true,
      widget: "WebDevelopment",
    });

    this.addMessageToBotState(messages);
  };

  // display list using help of data array provided in widget
  SoftwareHandler = () => {
    const messages = this.createChatBotMessage(
      `cources for software development:`,
      { withAvatar: true, widget: "SoftwareDevelopment" }
    );
    this.addMessageToBotState(messages);
  };

  //default handler if you not found any mathes
  handleDefault = () => {
    const message = this.createChatBotMessage("Ok Lets decide what kind of music to serve you. First question: How did you start your morning?", {
      withAvatar: true,
      widget: "Q1",
    });
    this.addMessageToBotState(message);
  };
  handleContactInfo = () => {
    const message = this.createChatBotMessage(
      "If you need to speak to a real person, you can call 67 03 00 00.",
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.addMessageToBotState(message);
  };
}



export default ActionProvider;
