import clsx from "clsx"
import css from "./FriendItem.module.css"

export default function FriendItem(friend) {
    const { name, avatar, isOnline } = friend.friend;
    return <div className={css.friendItem}>
        <img src={avatar} alt="Avatar" width="48" />
        <p>{name }</p>
        <p className={clsx(isOnline ? css.Online : css.Offline)} >{isOnline ? "Online" : "Offline" }</p>
        </div>
}