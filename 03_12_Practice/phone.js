class Phone {
    constructor(model,system,storage,ram,processor,battery,price){
        this.model=model,
        this.system=system,
        this.storage=storage,
        this.ram=ram,
        this.processor=processor,
        this.battery=battery,
        this.price=price
    }

    displayInfo(){
        return `
        Model: ${this.model}
        Operating System: ${this.system}
        Storage: ${this.storage}
        RAM: ${this.ram}
        Processor: ${this.processor}
        Battery: ${this.battery}
        Price: ${this.price}`;
    }
}

export default Phone;