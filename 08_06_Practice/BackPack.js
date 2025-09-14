class BackPack {
    constructor(name,color,volume,strapLengthR,strapLengthL){
        this.name = name,
        this.color=color,
        this.volume=volume,
        this.strapLength={
            left:strapLengthL,
            right:strapLengthR
        }
    }

    newStrapLength(left,right){
        this.strapLength.left=left;
        this.strapLength.right=right;
        (()=> {
            console.log(`New strap lengths for ${this.name}: Left - ${this.strapLength.left}, Right - ${this.strapLength.right}`);
        })();
    }

    changeColor(newColor){
        this.color=newColor;
    }
}

export default BackPack;