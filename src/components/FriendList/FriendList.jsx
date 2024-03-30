import FriendItem from "../FriendItem/FriendItem"
import css from "./FriendList.module.css"

export default function FriendList(friendsList) {
    const friendsCart = friendsList.friendsList.map(friend => {
        return <li key={friend.id}><FriendItem friend={friend}></FriendItem></li>
    })
    return(
        <ul className={css.friendList}>{friendsCart }</ul>)
}