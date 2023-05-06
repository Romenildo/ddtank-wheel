
import cards from "../pages/api/bdItens"



const generateIds = (quant: number) => {

    const awardsIds = []
    for (let i = 0; i < quant; i++) {
        awardsIds.push(generateItem() - 1)
    }

    console.log(awardsIds)
    return awardsIds
}

const getRewards = (quant: number) => {
    let ids 
    let count10xfrag = 0
    let countPet = 0

    do{
        ids = generateIds(quant)
        count10xfrag = ids.filter(x => x === 7).length;
        countPet = ids.filter(x => x === 2).length;
    }while(count10xfrag > 1 || countPet > 1)
    
    
    const rewards: any = []

    ids.map((id) => {
        rewards.push(cards[id])
    })
    return rewards;

}

const generateItem = () => {

    const chances = [0.001, 0.0015, 0.002, 0.035, 0.035, 0.05, 0.07, 0.14, 0.15, 0.05, 0.085, 0.13, 0.16, 0.05];

    const sumChances = chances.reduce((a, b) => a + b, 0);

    const randomNumber = Math.random();
    

    
    let accumulatedChance = 0;
    let chosenItem;
    for (let i = 0; i < chances.length; i++) {
        accumulatedChance += chances[i] / sumChances;
        if (randomNumber <= accumulatedChance) {
            chosenItem = i + 1;
            break;
        }
    }
    

    switch (chosenItem) {
        case 1:
            return 3//pet lendario 0.1%
        case 2:
            return 12//jewel nvl 5 0.15%
        case 3:
            return 8//frag pet lendario x10 0.2%
        case 4:
            return 11//chip 
        case 5:
            return 9//forja nvl 4
        case 6:
            return 14//bogu exp
        case 7:
            return 5//'expMont'
        case 8:
            return 6//'Essencia elemento'
        case 9:
            return 13//'Cristal energia'
        case 10:
            return 10//'Cristal mágico'
        case 11:
            return 1//'Diamante'
        case 12:
            return 4//'Carvao'
        case 13:
            return 7//'Essencial animal perfeito'
        case 14:
            return 2//'Moeda de ouro'
        default:
            return 999

    }
}

export { getRewards }