import css from "./transactions.module.css"
import PropTypes from 'prop-types';
export function Transactions ({list}) {
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

    Transactions.propTypes = {
        list:PropTypes.array.isRequired
    }