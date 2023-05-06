
import CardWheelModel from '../model/CardWheelModel'
import styles from '../styles/CardWinner.module.css'

interface CardWinnerProp  {
    card:CardWheelModel
}

export default function CardWinner(props:CardWinnerProp){

    let checkRarity;

    switch (props.card.rarity) {
      case 'hero':
        checkRarity = styles.hero;
        break;
      case 'elite':
        checkRarity = styles.elite;
        break;
      case 'excellent':
        checkRarity = styles.excellent;
        break;
      default:
        checkRarity = styles.common;
        break;
    }

    return(
        <div className={`${styles.cardWinner}`}>
            <img src={props.card.urlImageWin} alt="erro" className={`${checkRarity}`}/>
            <p>{props.card.name}</p>
        </div>
    )
}