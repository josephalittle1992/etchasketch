const container = document.getElementById('container');
const resetBtn = document.getElementById('resetBtn');
const gridItemClass = document.getElementsByClassName('gridItem');

addDivs(8);

resetBtn.addEventListener('click', () => {
    let size = prompt('Enter a new size.', '4');
    while (gridItemClass.length > 0) gridItemClass[0].remove();
    container.style.gridTemplateRows = 'repeat(' + size + ', 1fr)';
    container.style.gridTemplateColumns = 'repeat(' + size + ', 1fr)';
    addDivs(size);    
})


function addDivs (amount) {
    for (let i = 0; i < amount*amount; i++) {
        let createdDiv = document.createElement('div');;
        createdDiv.classList.add('gridItem');
        createdDiv.style.backgroundColor = 'white';
        createdDiv.style.border = '1px solid black';
        container.appendChild(createdDiv);
        createdDiv.onmouseover = function()
            {createdDiv.style.backgroundColor = 'blue'}
    }
}





