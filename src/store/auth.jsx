import { useContext, createContext, useState, useEffect } from "react";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState("");

  // stiring token from fronend
  const storeTokenLS =(st) => {
    localStorage.setItem("token", st);
    setToken(st)
    
  };

  let isLoggedIn = !!token;
  console.log(isLoggedIn);



  // tacaleing logOut Functionality
  const logOutUser = () => {
    setToken("");
  setUser(""); // Clear user data upon logout
  localStorage.removeItem("token");
  };




  // JWT userAutheniticate TO get currently login user data 
  const userAutheniticate = async () => {
    try {
      setIsLoading(true);
      let response = await fetch("http://localhost:5000/api/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let data = await response.json();
      console.log(data);
  
      if (data.success) {
        setUser(data.userData);
      }
    } catch (error) {
      console.log("error fetching user data...");
    } finally {
      setIsLoading(false);
    }
  };

    // useEffect hook to fetch user data when component mounts
    useEffect(() => {
      userAutheniticate();
    }, [token]);
    
  console.log("user data from context api",user);

  return (
    <authContext.Provider
      value={{ isLoggedIn, user, storeTokenLS, logOutUser , token, isLoading, userAutheniticate}}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};
