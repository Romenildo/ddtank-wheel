

import { useState } from 'react'
import ButtonWheel from '../component/ButtonWheel'
import CardWheel from '../component/CardWheel'
import WinnerDisplay from '../component/WinnerDisplay'

import { getRewards } from '../function/probability'


export default function Home() {

  const [showAwards, setShowAwards] = useState(false)
  const [awards, setAwards] = useState<any>([])


  const onStartx1 = ()=>{
    setAwards(getRewards(1))
    setShowAwards(true)
  }
  
  const onStartx10 = ()=>{
    setAwards(getRewards(10))
    setShowAwards(true)
  }

  const onClose = ()=>{
    setShowAwards(false)
  }
  
  return (
    <>
    <div className="container">
      { showAwards && (
        <WinnerDisplay cardsWinner={awards} onClose={onClose}></WinnerDisplay>
      )}


      <div className='wheel' style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>

          {/* Parte de cima */}
          <div style={{display:'flex', gap:'30px', margin:'30px 0px 0px 30px'}}>
            <CardWheel imageUrl='/assets/wheel/1dima.png'></CardWheel>
            <CardWheel imageUrl='/assets/wheel/2gold.png'></CardWheel>
            <CardWheel imageUrl='/assets/wheel/3baiacu.png'></CardWheel>
            <CardWheel imageUrl='/assets/wheel/4coal.png'></CardWheel>
            <CardWheel imageUrl='/assets/wheel/5expMont.png'></CardWheel>
          </div>
          
          {/*Meio cima*/}
          <div style={{display:'flex', gap:'655px', margin:'30px 0px 0px 30px'}}>
            <CardWheel imageUrl='/assets/wheel/14boguExp.png'></CardWheel>
            <CardWheel imageUrl='/assets/wheel/6essenceElement.png'></CardWheel>
          </div>
          {/* Meio Baixo*/}
          <div style={{display:'flex', gap:'655px', margin:'30px 0px 0px 30px'}}>
            <CardWheel imageUrl='/assets/wheel/13energyShard.png'></CardWheel>
            <CardWheel imageUrl='/assets/wheel/7perfectEssence.png'></CardWheel>
          </div>

          {/* Parte de baixo */}
          <div style={{display:'flex', gap:'30px', margin:'30px 0px 30px 30px'}}>
            <CardWheel imageUrl='/assets/wheel/12jewel.png'></CardWheel>
            <CardWheel imageUrl='/assets/wheel/11chip.png'></CardWheel>
            <CardWheel imageUrl='/assets/wheel/10magicCristal.png'></CardWheel>
            <CardWheel imageUrl='/assets/wheel/9forgeStone.png'></CardWheel>
            <CardWheel imageUrl='/assets/wheel/8fragBaiacu.png'></CardWheel>
          </div>
          
          <div className="buttons" style={{ position:'absolute', display:'flex', gap:'30px', marginTop:'100px'}}>
            <ButtonWheel imageUrl='/assets/wheel/buttonx1.png' onClicked={onStartx1}></ButtonWheel>
            <ButtonWheel imageUrl='/assets/wheel/buttonx10.png'onClicked={onStartx10}></ButtonWheel>
          </div>
      </div>

    </div>
    
    
    </>
  )
}