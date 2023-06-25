
// import { user } from "../user"
import user from "../user.json"
import data from "../data.json"
import friends from "../friends.json"
import transactions from "../transactions.json"

import { Profile } from "components/profile/profile"
import{ Statistics } from "components/statistic/statistic"
import { Friends } from "components/friends/friends"
import { Transactions } from "components/transactions/transactions"

export const App = () => {
  return (<><Profile 
    username={user.username} 
    tag={user.tag} 
    location={user.location} 
    avatar={user.avatar} 
    stats={user.stats}/>
    <Statistics data={data}/>
    <Friends friends={friends}/>
    <Transactions list={transactions}/>
    </>
  );
};

