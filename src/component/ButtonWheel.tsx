
import styles from '../styles/ButtonWheel.module.css'

interface ButtonWheelProp  {
    imageUrl:string
    onClicked: ()=> void
}

export default function ButtonWheel(props:ButtonWheelProp){

    return(
        <img src={props.imageUrl} alt="erro"  className={styles.buttonWheel} onClick={props.onClicked}/>
    )
}