import Backpack from "./backpack.js";
import Phone from "./phone.js";
import GamerPhone from "./gamerPhone.js";

const myBackpack = new Backpack("Nebula", "Blue", 30 , 5, 15, 15, false);

console.log("My Backpack:",myBackpack);
console.log("Before modification:", myBackpack.getInfo());

myBackpack.toggleLid(true);
myBackpack.newStrapLength(20, 20);

console.log("After modification:", myBackpack.getInfo());

const newBackpack = new Backpack("Orion", "Red", 40, 6, 18, 18, false);

console.log("New backpack created:", newBackpack.getInfo());

const myPhone = new Phone("Galaxy S21", "Android", "128GB", "8GB", "Exynos 2100", "4000mAh", 799);

console.log("My Phone:", myPhone);
console.log("All info:", myPhone.displayInfo());

const myGamerPhone = new GamerPhone("Razer Phone 2", "Android", "64GB", "8GB", "Snapdragon 845", "4000mAh", 799, "Adreno 630");

console.log("My Gamer Phone:", myGamerPhone);
console.log("All info:", myGamerPhone.displayInfo());
