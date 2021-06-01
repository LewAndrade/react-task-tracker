import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "blabla",
      day: "5 de Jan de 2021",
      reminder: false,
    },
    {
      id: 2,
      text: "jumba",
      day: "15 de Ago de 2021",
      reminder: true,
    },
    {
      id: 3,
      text: "arroz",
      day: "15 de Jun de 2021",
      reminder: true,
    },
    {
      id: 4,
      text: "lava o cu",
      day: "30 de Mai de 2021",
      reminder: false,
    },
  ]);

  const addTask = (task) => {
    const id = tasks[tasks.length - 1].id + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className={"container"}>
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
      ) : (
        "No tasks here yet :("
      )}
    </div>
  );
}

export default App;
