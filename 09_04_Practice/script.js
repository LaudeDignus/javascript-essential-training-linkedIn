/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const grid = document.querySelector(".grid");

grid.addEventListener('mouseenter', ()=>{
   addClass(grid,"grid-enter");
})

grid.addEventListener('mouseleave', ()=>{
   removeClass(grid,"grid-enter");
})

const cells = document.querySelectorAll(".cell");

cells.forEach((cell)=>{
    cell.addEventListener('mouseenter',()=>{
        addClass(cell,"cellMouseHover");
    });
    cell.addEventListener('mouseleave',()=>{
        removeClass(cell,"cellMouseHover");
    });
    cell.addEventListener('click',()=>{
        cell.classList.toggle('color');
        cell.classList.contains('color') ? cell.style.backgroundColor = randomColor() : cell.style.backgroundColor = '';
    });
})

const addClass=(element,name)=>{
    element.classList.add(name);
}

const removeClass=(element,name)=>{
    element.classList.remove(name);
}

const randomColor=()=>{
    const colorHex = "#" + Math.floor(Math.random()*16777215).toString(16);
    return colorHex;
}

document.body.addEventListener('keydown',(e)=>{
    if(e.key === 'd'){
        document.body.style.backgroundColor = 'black';
    }else if(e.key === 'l'){
        document.body.style.backgroundColor = 'white';
    }
})


const cell21 = document.querySelector('.cell21')
    cell21.addEventListener('dblclick',()=>{
    cell21.classList.toggle('easter-egg');
    cell21.classList.contains('easter-egg') ? cell21.innerHTML="EasterEgg trouvé🥳" : cell21.innerHTML="";
})