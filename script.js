document.addEventListener('DOMContentLoaded', function() {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add tasks
    function addTask() {
        const taskText = taskInput.value.trim(); // Get input value
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }
            // Load tasks from Local Storage
         function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        storedTasks.forEach(taskText => addTask(taskText, false));
        }

        // Add task function with optional save flag
        function addTask(taskText, save = true) {
        if (taskText.trim() === "") {
            alert("Please enter a task.");
            return;
        }
        // Create li element and set its content
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn'); // Correct use of classList.add()

        // Add remove functionality
        removeBtn.onclick = function() {
            taskList.removeChild(li);
        };

        // Append the button and li to the task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

            // Load tasks from Local Storage
        function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        storedTasks.forEach(taskText => addTask(taskText, false));
        }

         // Add task function with optional save flag
        function addTask(taskText, save = true) {
        if (taskText.trim() === "") {
            alert("Please enter a task.");
            return;
        }
            // Remove task from local storage
        function removeTaskFromStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        }   

        // Clear the input field
        taskInput.value = '';
        }
            // Event listeners
    addButton.addEventListener('click', () => addTask(taskInput.value));
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });

    // Load tasks on page load
    loadTasks();
});