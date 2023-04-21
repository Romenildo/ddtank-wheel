
import CardWheelModel from '../model/CardWheelModel'
import styles from '../styles/CardWinner.module.css'

interface CardWinnerProp  {
    card:CardWheelModel
}

export default function CardWinner(props:CardWinnerProp){

    return(
        <div className={styles.cardWinner}>
            <img src={props.card.urlImageWin} alt="erro"/>
            <p>{props.card.name}</p>
        </div>
    )
}