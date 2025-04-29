let todos = JSON.parse(localStorage.getItem("todos")) || [];

    function renderTodos() {
      const list = document.getElementById("todoList");
      list.innerHTML = "";
      todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
          ${todo}
          <button class="delete-btn" onclick="deleteTask(${index})">✖</button>
        `;
        list.appendChild(li);
      });
    }

    function addTask() {
      const input = document.getElementById("todoInput");
      const value = input.value.trim();
      if (value) {
        todos.push(value);
        localStorage.setItem("todos", JSON.stringify(todos));
        input.value = "";
        renderTodos();
      }
    }

    function deleteTask(index) {
      todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(todos));
      renderTodos();
    }

    renderTodos();
  
