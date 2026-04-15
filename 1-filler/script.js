const addBtn = document.getElementById('add-list')
const listItems = document.getElementById('list-items')



let userValue;
addBtn.addEventListener('click', () => {
    const inputElement = document.getElementById('text-field')
    userValue = inputElement.value;
    const newItem = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.innerText = userValue;

    if (userValue != "") {
        const newCircle = document.createElement('i');
        newCircle.classList.add("fa-regular", "fa-circle", "circle");
        newCircle.addEventListener('click', () => {
            newCircle.style.display = 'none';
            newCircleCheck.style.display = 'flex';
            taskText.style.textDecoration = 'line-through'
        });

        const newCircleCheck = document.createElement('i');
        newCircleCheck.classList.add("fa-solid", "fa-circle-check", "circle");
        newCircleCheck.addEventListener('click', () => {
            newCircle.style.display = 'flex';
            newCircleCheck.style.display = 'none';
            taskText.style.textDecoration = 'none'
        });

        const deleteItem = document.createElement('i');
        deleteItem.classList.add('fa-solid', 'fa-xmark', 'remove');
        deleteItem.addEventListener('click', () => {
            newItem.style.transition = 'all 0.3s ease';
            newItem.style.opacity = '0';
            setTimeout(() => {
                newItem.remove();
            }, 250)
        });


        newItem.append(newCircle, newCircleCheck, taskText, deleteItem);

        listItems.appendChild(newItem);

        inputElement.value = "";

    }

    else {
        alert('Please fill up the input box.');
    }


});


