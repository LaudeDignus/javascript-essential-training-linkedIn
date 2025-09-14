const toolBox ={
    boxContains:["hammer","screwdriver"],
    hammer:{
        material:'steel',
        color:"red",
        weight:1.5
    },
    screwdriver:{
        material:'chrome vanadium',
        color:"blue",
        weight:0.5
    },
    addTool : function(toolName,toolDetails){
        this.boxContains.push(toolName),
        this[toolName]=toolDetails
    },
    removeTool: function(toolName){
        if (this.boxContains.indexOf(toolName)!==-1){
            this.boxContains.splice(this.boxContains.indexOf(toolName), 1);
        }
        delete this[toolName]
    }
}

console.log(`My tool box contains: - ${toolBox.boxContains.join(", ")}`)

toolBox.addTool("wrench", {
    material: "chrome molybdenum",
    color: "green",
    weight: 1.2
});

toolBox.removeTool("screwdriver");

console.log(`My tool box contains: - ${toolBox.boxContains.join(", ")}`);
console.log(toolBox.hammer);