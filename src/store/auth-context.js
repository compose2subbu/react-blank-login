import React, {useState, useEffect} from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email,password) => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const varLoggedIn = localStorage.getItem('IsLoggedIn');
        if(varLoggedIn === '1'){
          setIsLoggedIn(true);
      }
      }, [])

    const logoutHandler = () => {
        localStorage.removeItem('IsLoggedIn','0');
        setIsLoggedIn(false);
    };

    const loginHandler = () => {
        localStorage.setItem('IsLoggedIn','1');
        setIsLoggedIn(true);
    };

    return <AuthContext.Provider value={
        {
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler,
        }
    }>{props.children}</AuthContext.Provider>
}
export default AuthContext;