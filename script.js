window.onload = function()
{
    creategrid(16);
}

let parent = document.getElementById("container")
let gridbutton = document.getElementById("grid")
let resetbutton = document.getElementById("reset")
let yellowbutton = document.getElementById("yellow")
let greenbutton = document.getElementById('green')
let bluebutton = document.getElementById("blue")


yellowbutton.addEventListener("click",()=>
{
    addEventListener("mouseover",(e)=>color(e, "yellow"))
})

greenbutton.addEventListener("click", ()=>
{
    addEventListener("mouseover",(e)=> color(e,"green"))
})

bluebutton.addEventListener("click",()=>
{
    addEventListener("mouseover",(e)=> color(e,"blue"))
})
function creategrid(n)
{
    for ( let i = 0 ; i < n ; i++ )
    {   
        row = document.createElement('div')
        row.classList.add("rows");
        parent.appendChild(row)
        for ( let j = 0 ; j < n ; j++)
        {
            temp = document.createElement('div')
            temp.classList.add("temps");
            temp.opacitylevel = 0.1;
            row.appendChild(temp)
        }
    }
}

resetbutton.addEventListener("click",resetgrid);

function resetgrid()
{
    parent.innerHTML = '' // clearing the grid
    creategrid(16); // resetting to a 16x16 grid
}

gridbutton.addEventListener("click",gridreset);

function gridreset()
{
    parent.innerHTML = '';
    value = prompt("Enter number of rows ( or columns ): ")
    creategrid(value);
}

function color(evt, colorchoice)
{
    if ( evt.target.classList.contains("temps"))
    {
        evt.target.opacitylevel += 0.1;
        evt.target.style.opacity =  evt.target.opacitylevel;
        evt.target.style.backgroundColor = colorchoice
    }
}