import css from "./friends.module.css"
import PropTypes from 'prop-types';
export function Friend ({ avatar, name, isOnline, id}) {
    return <li className={css.itemF}>
    <span className={css.status} style={{ backgroundColor: isOnline ? 'green': 'red' }} ></span>
  
  <img className={css.avatarF} src={avatar} alt="User avatar" width="48" />
  <p className={css.nameF}>{name}</p>
  </li>
  }

Friend.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,

}


