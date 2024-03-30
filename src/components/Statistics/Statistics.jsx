import css from "./Statistics.module.css"

export default function Statistics({ followers, likes, views }) {
    
    return <ul className={css.statsContainer}>
        
        <li className={css.statsItem}>
            <span>Followers</span>
            <span>{followers }</span>
        </li>

        <li className={css.statsItem}>
            <span>Views</span>
            <span>{views }</span>
        </li>

        <li className={css.statsItem}>
            <span>Likes</span>
            <span>{likes }</span>
        </li>
    </ul>
}