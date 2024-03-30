import userData from "./userData.json";
import friends from "./friends.json"
import transactions from "./transactions.json"
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransationHistory";

const { username, location, tag, avatar, stats } = userData;
function App() {
   return (
     <>
       <Profile
         name={username}
         location={location}
         tag={tag}
         image={avatar}
         stats={stats}
       ></Profile >

       <FriendList friendsList={friends}></FriendList>
       
      <TransactionHistory transactions={transactions}></TransactionHistory>
    </>
  );
}

export default App
