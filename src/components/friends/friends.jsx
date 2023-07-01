import css from "./friends.module.css"
import PropTypes from 'prop-types';
import { Friend } from "./friend";
export function Friends ({friends}) {
  return <ul  className={css.friendList}>
  {friends.map(el => <Friend key={el.id} avatar={el.avatar} name={el.name} isOnline={el.isOnline} id={el.id}/>)}
</ul>
}

Friends.propTypes = {
  friends: PropTypes.array.isRequired
}

