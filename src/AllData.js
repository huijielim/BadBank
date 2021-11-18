import React from 'react';
import { Card, UserContext } from './Context';


function AllData(){

    const ctx = React.useContext(UserContext)
    return ctx.users.map((user, item) => {
        return (
            <Card
                style={{
                    display: 'flex',
                    margin: 0,
                    marginTop: 10,
                    padding: 10,
                    align: 'center'
                }}
               key={item}
               header={user.name}
               txtcolor="black"
               text={
                   "Email: " + user.email + 
                   "  Password: " +  user.password
                }
               body={"Balance: $" + user.balance}
               />
            
           );

    }) ;
}

export default AllData;