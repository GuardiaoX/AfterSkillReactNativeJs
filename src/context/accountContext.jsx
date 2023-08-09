import { createContext, useEffect, useState } from "react";
import { AsyncStorage } from "react-native";

export const AccountContext = createContext();

export const AccountContextProvider = ({ children }) => {
  const [account, setAccount] = useState(null);

  const getLocalStorage = async () => {
    try {
      const value = await AsyncStorage.getItem("account");
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      console.log("localStorage erro: ", error)
    }
  };

  useEffect(() => {
    getLocalStorage()
    // if (value) {
    //     setAccount(JSON.parse(value));
    // }
  }, []);

  return (
    <AccountContext.Provider value={{ account, setAccount }}>
      {children}
    </AccountContext.Provider>
  );
};
