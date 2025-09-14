class BackPack {
    constructor(
        name,
        color,
        volume,
        pocketNum,
        strapLengthL,
        strapLengthR,
        lidOpen
    ){
        this.name=name;
        this.color=color;
        this.volume=volume;
        this.pocketNum=pocketNum;
        this.strapLength={
            left:strapLengthL,
            right:strapLengthR
        };

        this.lidOpen=lidOpen;
    }

    toggleLid(lidStatus){
        this.lidOpen=lidStatus;
    }

    newStrapLength(left,right){
        this.strapLength.left=left,
        this.strapLength.right=right
    }
    
    getInfo(){
        return `Backpack Name: ${this.name}, Color: ${this.color}, Volume: ${this.volume}, Number of Pockets: ${this.pocketNum}, Strap Lengths: Left - ${this.strapLength.left}, Right - ${this.strapLength.right}, Lid Open: ${this.lidOpen}`;
    }
}

export default BackPack;