class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse = (message) => {
    //convert message in lowercase wich passed by user
    const lowerCase = message.toLowerCase();

    //define your keyword in condition and return handler function whixh created in actionprovider

    if (
      lowerCase.includes("hi") ||
      lowerCase.includes("hii") ||
      lowerCase.includes("hiii") ||
      lowerCase.includes("hello") ||
      lowerCase.includes("hey") ||
      lowerCase.includes("hiiii") ||
      lowerCase.includes("..") ||
      lowerCase.includes("heyy") ||
      lowerCase.includes("Adios") ||
      lowerCase.includes("ola") 

    ) {
      return this.actionProvider.Greeting();
    }

    if (
      lowerCase.includes("good") ||
      lowerCase.includes("fine") ||
      lowerCase.includes("ok") ||
      lowerCase.includes("great") ||
      lowerCase.includes("better") ||
      lowerCase.includes("well") ||
      lowerCase.includes("..") ||
      lowerCase.includes("nice") 

    ) {
      return this.actionProvider.handleDefault();
    }

    return this.actionProvider.handleDefault();
  };
}

export default MessageParser;
