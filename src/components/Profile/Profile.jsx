import css from "./Profile.module.css"

import Statistics from "../Statistics/Statistics"

export default function Profile({ name, tag, location, image, stats:{followers, views, likes} }) {
    return <div className={css.profileItem}>

        <div className={css.avatarContainer}>

            <img className={css.userAvatar} src={image} alt="" width={100} height={100} />
            <p className={css.userName}>{name }</p>
            <p className={css.userTag}>{tag}</p>
            <p className={css.userLocation}>{location}</p>
        </div>
        <Statistics
            followers={followers}
            likes={likes}
            views={views}></Statistics>

    </div>
}