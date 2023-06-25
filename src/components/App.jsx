
// import { user } from "../user"
import user from "../user.json"
import data from "../data.json"
import friends from "../friends.json"
import transactions from "../transactions.json"
import css from "./app.module.css"


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

function Profile ({username, tag, location, avatar, stats}) {
  return <div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <p className={css.label}>Followers</p>
      <p className={css.quantity}>{stats.followers}</p>
    </li>
    <li>
      <p className={css.label}>Views</p>
      <p className={css.quantity}>{stats.views}</p>
    </li>
    <li>
      <p className={css.label}>Likes</p>
      <p className={css.quantity}>{stats.likes}</p>
    </li>
  </ul>
</div>
}

function Statistics ({data}) {
  return <section className={css.statistics}>
  <h2 className={css.title}>Upload stats</h2>

  <ul className={css.statsList}>

{data.map(el => {
  return <li key ={el.id} className={css.item} style={{backgroundColor: getRandomColor()}} >
  <p className={css.label}>{el.label}</p>
  <p className={css.percentage}>{el.percentage}</p>
</li> })}

    
  </ul>
</section>
}

function Friends ({friends}) {
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

function Transactions ({list}) {
return <table className={css.transactionHistory}>
<thead>
  <tr>
    <th>Type</th>
    <th>Amount</th>
    <th>Currency</th>
  </tr>
</thead>

<tbody>
{list.map(el => {
  return  <tr key={el.id}>
  <td>{el.type}</td>
  <td>{el.amount}</td>
  <td>{el.currency}</td>
</tr>
})}
 
</tbody>
</table>
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // Випадкове значення для червоного каналу (0-255)
  const g = Math.floor(Math.random() * 256); // Випадкове значення для зеленого каналу (0-255)
  const b = Math.floor(Math.random() * 256); // Випадкове значення для синього каналу (0-255)
  return `rgb(${r}, ${g}, ${b})`; // Повертаємо значення у форматі RGB
}
