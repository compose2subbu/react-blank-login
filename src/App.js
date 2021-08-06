import React, {useContext} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  const ctx = useContext(AuthContext);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // useEffect(() => {
  //   const varLoggedIn = localStorage.getItem('IsLoggedIn');
  //   if(varLoggedIn === '1'){
  //     setIsLoggedIn(true);
  // }
  // }, [])
  

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem('IsLoggedIn','1');
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem('IsLoggedIn','0');
  //   setIsLoggedIn(false);
  // };

  return (
    <React.Fragment>

    
      <MainHeader  />
      <main>
        {!ctx.isLoggedIn && <Login  />}
        {ctx.isLoggedIn && <Home  />}
      </main>

    </React.Fragment>
  );
}
//isAuthenticated={isLoggedIn} onLogout={logoutHandler}
//  <AuthContext.Provider value={{
    //     isLoggedIn: isLoggedIn,
    //     onLogout: logoutHandler
    // }}> 
    //<AuthContext.Provider>
export default App;
