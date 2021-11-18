import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import CreateAccount from "./CreateAccount";
import Deposit from "./Deposit";
import WithDraw from "./Withdraw";
import AllData from "./AllData";
import { UserContext } from './Context'


function App() {

  return (
  
    <div className="App">
      <HashRouter>
      <Navigation />
      <UserContext.Provider value={{
        users: [
          {
            name: 'Banking Client', 
            email: 'client@banking.com', 
            password: 'password', 
            balance: 100,
            },
            ],
            }}
            >  
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount" component={CreateAccount} />
          <Route path="/Deposit" component={Deposit}/>
          <Route path="/Withdraw" component={WithDraw}/>
          <Route path="/AllData" component={AllData}/>
        
      </UserContext.Provider>
      </HashRouter>
    </div>
  
  );
}

export default App;