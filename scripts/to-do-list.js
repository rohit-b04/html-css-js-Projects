let myList = //JSON.parse(localStorage.getItem('todo')) || [
[    {
        name: 'cook',
        dueDate: '2025-12-02'
    }
];

//console.log(JSON.stringify(myList))
//localStorage.setItem('todo', JSON.stringify(myList));

// localStorage.setItem('todo', JSON.stringify(myList));
// console.log(localStorage.getItem('todo'));
renderToDoList();

function renderToDoList() {
    let todoListHtml = '';
    // console.log(myList[0].name)

    myList.forEach(function(todoObject, index) {
        const {name, dueDate} = todoObject;
        
        let html = `<div>${name}</div> 
        <div>${dueDate}</div>
        <button class="todo-delete-button" onclick = "myList.splice(${index}, 1);
        renderToDoList();">
        Delete</button>`;

        todoListHtml += html;
    })
    /*
    for(let i = 0;i < myList.length;i++) {
        const todoObject = myList[i];
        const {name, dueDate} = todoObject;
        
        let html = `<div>${name}</div> 
        <div>${dueDate}</div>
        <button class="todo-delete-button" onclick = "myList.splice(${i}, 1);
        renderToDoList();">
        Delete</button>`;

        todoListHtml += html;
    } */
    document.querySelector('.js-div-todolist')
     .innerHTML = `${todoListHtml}`;
}

function addToDoList() {
    const inputName = document.querySelector('.js-input-text');
    
    const dueDate = document.querySelector('.js-input-date')
    myList.push ({
        name: inputName.value,
        dueDate: dueDate.value
    })
        
    
    //console.log(inputText.value);
    //console.log(JSON.stringify(myList))
    /* console.log(myList);
    document.querySelector('.js-display-list') */

    inputName.value = ''
    //localStorage.setItem('todo', JSON.stringify(myList));
    renderToDoList();
    // .innerHTML = `${inputText.value}`    
}

function emptyList() {
    myList.splice(0, myList.length)

    //localStorage.removeItem('todo');
    renderToDoList();
}

function enterKey(event) {
    if(event.key === "Enter") {
        addToDoList();
    }
}