import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

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

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className={"container"}>
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No tasks here yet :("
      )}
    </div>
  );
}

export default App;
