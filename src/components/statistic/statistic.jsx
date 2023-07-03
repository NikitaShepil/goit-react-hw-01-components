
import css from "./statistics.module.css"
import PropTypes from 'prop-types';
import { getRandomColor } from './radColor'
export  function Statistics ({ title,  data}) {
    return <section className={css.statistics}>
    {title ? <h2 className={css.title}>{title}</h2> : null}
  
    <ul className={css.statsList}>
  
  {data.map(el => {
    return <li key ={el.id} className={css.item} style={{backgroundColor: getRandomColor()}} >
    <p className={css.label}>{el.label}</p>
    <p className={css.percentage}>{el.percentage}</p>
  </li> })}
  
      
    </ul>
  </section>
  }

  


Statistics.propTypes = {
  data: PropTypes.array.isRequired,
}