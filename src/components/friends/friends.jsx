import css from "./friends.module.css"
import PropTypes from 'prop-types';
export function Friends ({friends}) {
  return <ul  className={css.friendList}>
  {friends.map(el => {
    return <li key={el.id} className={css.itemF}>
      {el.isOnline ? (<span className={css.status} style={{ backgroundColor: 'green' }} ></span>) : (<span className={css.status} style={{ backgroundColor: 'red' }} ></span>)}
    
    <img className={css.avatarF} src={el.avatar} alt="User avatar" width="48" />
    <p className={css.nameF}>{el.name}</p>
  </li>
  })}
</ul>
}

Friends.propTypes = {
  friends: PropTypes.array.isRequired
}