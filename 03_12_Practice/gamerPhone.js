import Phone from "./phone.js";

class GamerPhone extends Phone {
    constructor(model,system,storage,ram,processor,battery,price,graphicCard){
        super(model,system,storage,ram,processor,battery,price);
        this.graphicCard=graphicCard;
    }

    displayInfo(){
        return `${super.displayInfo()}
        Graphic Card: ${this.graphicCard}
        `;
    }
}

export default GamerPhone;