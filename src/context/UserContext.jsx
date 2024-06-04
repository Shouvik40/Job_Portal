import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState({
    user1: { email: "a@a.com", password: "a1" },
    user2: { email: "user2@example.com", password: "password2" },
  });

  return <UserContext.Provider value={{ users, setUsers }}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
