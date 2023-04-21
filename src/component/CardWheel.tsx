
import styles from '../styles/CardWheel.module.css'

interface CardWheelProp  {
    imageUrl:string
}

export default function CardWheel(prop:CardWheelProp){

    return(
        <img src={prop.imageUrl} alt="erro"  className={styles.cardWheel}/>
        
    )
}