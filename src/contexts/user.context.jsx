import { createContext, useState } from "react";

// it stores the user data we want to access 
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// it's the component that provides the stored data
export const UserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = {
    currentUser,
    setCurrentUser,
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )  
};