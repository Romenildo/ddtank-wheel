
import CardWheelModel from '../model/CardWheelModel'
import styles from '../styles/WinnerDisplay.module.css'
import CardWinner from './CardWinner'

interface WinnerDisplayProp  {
    onClose: ()=>any
    cardsWinner: CardWheelModel[]
}

export default function WinnerDisplay(props:WinnerDisplayProp){
    
    function generateAllCards(){
        console.log(props.cardsWinner)
        return props.cardsWinner.map((card, i)=>{
            return <CardWinner 
                        key={`${card.id}${i}`}
                        card={card}
                    />
        })
    }

    return(
        <div className={styles.display} onClick={props.onClose}>
            <div className={styles.text_winner}>
                <p>TESOURO DD</p>
            </div>

            <div className={styles.awards_display}>
                <div className={styles.awards_content}>
                    {props.cardsWinner.length === 1? (
                        <CardWinner card={props.cardsWinner[0]}/>
                    ): (
                        <>
                        {generateAllCards()}
                        </>
                    )}
                </div>
                
                    
            </div>
            
            
        </div>
    )
}