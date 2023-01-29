const input = document.querySelector('.input')
const input1 = document.querySelector('.input1')
const btn = document.querySelector('.add-btn')
const ul = document.querySelector('.ul')


function addTask() {
    let tasks = JSON.parse(localStorage.getItem("task")) || []
    let newList = `<li class=" list list-group-item d-flex justify-content-between align-items-center">
<span class="d-flex align-items-center"> <div class="block d-flex align-item-center justify-content-center">
${input.value[0]}${input1.value[0]}</div>
   name:${input.value} surname:${input1.value}</span>
<button class="delete-btn btn btn-danger">delete</button>
</li>`
    ul.innerHTML += newList
}

btn.addEventListener('click', (e) => {
    if (input.value !== '' && input1.value !== '') {
        addTask()
    }
    let tasks = JSON.parse(localStorage.getItem("task")) || []
    const newTask = {
        id: 1,
        name: input.value,
        surname: input1.value
    }
    tasks = [...tasks, newTask]
    localStorage.setItem("task", JSON.stringify(tasks))
    addTask()
})

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask()
    }
})

input1.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask()
    }
})

ul.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentNode.remove()
        input.value = ''
        input1.value = ''
    }
})

