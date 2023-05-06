
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
    const rewards:any = []

    ids.map((id)=>{
        rewards.push(cards[id])
    })
    return rewards;

}

const generateItem = () =>{
    const randomNumber =Math.floor(Math.random() * 1000) + 1;
    //console.log(randomNumber)
    if(randomNumber >=1 && randomNumber <=2){//1%
        return 3//pet lendario
    }
    if(randomNumber >=3 && randomNumber <=6){//1.5%
        return 12//jewel nvl 5
    }
    if(randomNumber >=7 && randomNumber <=10){//2%
        return 8//frag pet lendario x10
    }
    if(randomNumber >=11 && randomNumber <=82){//3.5%
        return 11//chip
    }
    if(randomNumber >=83 && randomNumber <=118){//3.5%
        return 9//forja nvl 4
    }
    if(randomNumber >=119 && randomNumber <=169){//5%
        return 14//bogu exp
    }
    if(randomNumber >= 170 && randomNumber <=240){//7%
        return 5//'expMont'
    }
    if(randomNumber >=241 && randomNumber <=381){//14%
        return 6//'Essencia elemento'
    }
    if(randomNumber >=382 && randomNumber <=532){//15%
        return 13//'Cristal energia'
    }
    if(randomNumber >=533 && randomNumber <=583){//5%
        return 10//'Cristal mágico'
    }
    if(randomNumber >=584 && randomNumber <=672){//8.8%
        return 1//'Diamante'
    }
    if(randomNumber >=673 && randomNumber <=803){//13%
        return 4//'Carvao'
    }
    if(randomNumber >=804 && randomNumber <=964){//16%
        return 7//'Essencial animal perfeito'
    }
    if(randomNumber >=965 && randomNumber <=1000){//5.1%
        return 2//'Moeda de ouro'
    }
    return 9999
}

export {getRewards }