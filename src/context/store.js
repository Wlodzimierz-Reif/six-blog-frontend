const { createContext } = require("react");

export const appContext = createContext({
  loginStatus: {
    isLoggedIn: false,
    setIsLoggedIn: (loggedIn) => {},
  },
});
