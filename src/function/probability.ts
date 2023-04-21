

import cards from "../pages/api/bdItens"

const generateIds = (quant:number) =>{

    const awardsIds = []
    for(let i = 0; i < quant;i++){
        awardsIds.push(generateItem()-1)
    }

    return awardsIds
    
}

const getRewards = (quant:number) =>{
    
    const ids = generateIds(quant)
    console.log(ids)
    const rewards:any = []

    ids.map((id)=>{
        rewards.push(cards[id])
    })

    return rewards;
    
}



const generateItem = () =>{
    const randomNumber =Math.floor(Math.random() * 200) + 1;

    if(randomNumber >=1 && randomNumber <=2){//1%
        return 3//poet lendario
    }
    if(randomNumber >=3 && randomNumber <=5){//1.5%
        return 12//jewel nvl 5
    }
    if(randomNumber >=6 && randomNumber <=9){//2%
        return 8//frag pet lendario x10
    }
    if(randomNumber >=10 && randomNumber <=16){//3.5%
        return 11//chip
    }
    if(randomNumber >=17 && randomNumber <=23){//3.5%
        return 9//forja nvl 4
    }
    if(randomNumber >=24 && randomNumber <=33){//5%
        return 14//bogu exp
    }
    if(randomNumber >= 34 && randomNumber <=47){//7%
        return 5//'expMont'
    }
    if(randomNumber >=48 && randomNumber <=75){//14%
        return 6//'Essencia elemento'
    }
    if(randomNumber >=76 && randomNumber <=105){//15%
        return 13//'Cristal energia'
    }
    if(randomNumber >=106 && randomNumber <=115){//5%
        return 10//'Cristal mágico'
    }
    if(randomNumber >=116 && randomNumber <=124){//8.8%
        return 1//'Diamante'
    }
    if(randomNumber >=125 && randomNumber <=150){//13%
        return 4//'Carvao'
    }
    if(randomNumber >=151 && randomNumber <=182){//16%
        return 7//'Essencial animal perfeito'
    }
    if(randomNumber >=183 && randomNumber <=200){//5.1%
        return 2//'Moeda de ouro'
    }
    console.log(randomNumber)
    return 9999
}

export {getRewards }