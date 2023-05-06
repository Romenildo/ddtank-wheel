export default class CardWheelModel{

    #id:number
    #name:string
    #urlImageCard: string
    #urlImageWin: string
    #rarity: string


    constructor(id: number, name:string, urlImageCard: string, urlImageWin:string, rarity: string){
        this.#id = id
        this.#name = name
        this.#urlImageCard = urlImageCard
        this.#urlImageWin = urlImageWin
        this.#rarity = rarity
    }

    get id(){
        return this.#id
    }
    get name(){
        return this.#name
    }
    get urlImageCard(){
        return this.#urlImageCard
    }
    get urlImageWin(){
        return this.#urlImageWin
    }
    get rarity(){
        return this.#rarity
    }
}
