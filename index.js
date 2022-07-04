const todoInput = document.getElementById("todoInput");
const todoListContainer = document.getElementById("todoListContainer");

const app = {
    list: [],
    add: function (matn) {
        this.list.unshift({
            id: Date.now(),
            text: matn,
            
        })
        this.renderlist()
        todoInput.value = ""
        

    },
    remove: function (todoId) {
        this.list = this.list.filter(todo => todo.id !== todoId)
        this.renderlist()

    },

    renderlist: function () {
        todoListContainer.innerHTML = ""
        this.list.forEach(todo => {
            todoListContainer.innerHTML += `  
            <div id="todoListContainer" class="d-flex flex-column w-100 h-auto align-items-center mt-2 gap-2">
            <div class="d-flex w-30 h-auto bg-div color-white border-radius5px p-3 justify-content-between align-items-center">
                <div>
                    <P class="pt-1 font-weight-bold">${todo.text}</P>
                </div>
                <div class="d-flex gap-3 w-50 h-100 justify-content-end">
                    <button class="w-30 h-82 border-none button-color font-weight-bold border-radius5px">DONE</button>
                    <button onclick="removeClickHandle(${todo.id})" class=" w-35 h-82 border-none border-radius5px font-weight-bold button--delete-color ">DELETE</button>
                </div>
            </div>
        </div> 
        `

        })

    },
    
}

function buttonClickHandle() {
    app.add(todoInput.value);
}

function removeClickHandle(todoId) {
    app.remove(todoId);
}







// todoInput.addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {
//         event.preventDefault();
//         document.getElementById("myBtn").click();
//     }
// });