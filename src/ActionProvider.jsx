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
    const message = this.createChatBotMessage("What do you most identify with?", {
      loading: true,
      withAvatar: true,
      widget: "Q501",
    });
    this.addMessageToBotState(message);
  };
  Q601 = () => {
    const message = this.createChatBotMessage("Sounds like you are a boring listner", {
      loading: true,
      delay: 200,
      withAvatar: true,
      widget: "Q601",
    });
    this.addMessageToBotState(message);
  };
    Q7 = () => {
    const message = this.createChatBotMessage("Here  you go", {
      loading: true,
      delay: 200,
      withAvatar: true,
      widget: "Q7",
    });
    this.addMessageToBotState(message);
  };

  //default handler if you not found any mathes
  handleDefault = () => {
    const message = this.createChatBotMessage("Ok Lets decide what kind of music to serve you. First question: How did you start your morning?", {
      withAvatar: true,
      widget: "Q1",
    });
    this.addMessageToBotState(message);
  };
}



export default ActionProvider;