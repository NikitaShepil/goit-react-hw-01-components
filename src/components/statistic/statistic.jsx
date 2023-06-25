
import css from "./statistics.module.css"
import PropTypes from 'prop-types';
export  function Statistics ({data}) {
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

  function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // Випадкове значення для червоного каналу (0-255)
  const g = Math.floor(Math.random() * 256); // Випадкове значення для зеленого каналу (0-255)
  const b = Math.floor(Math.random() * 256); // Випадкове значення для синього каналу (0-255)
  return `rgb(${r}, ${g}, ${b})`; // Повертаємо значення у форматі RGB
}


Statistics.propTypes = {
  data: PropTypes.array.isRequired,
}