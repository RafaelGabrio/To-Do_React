import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [erros, setErros] = useState({});

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        className={erros.title ? "focus:border-red-500 border-red-500" : ""}
        onChange={(event) => {
          setTitle(event.target.value);
        }}

      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        className={erros.description ? "focus:border-red-500 border-red-500" : ""}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <button
        onClick={() => {
          const isEmpty = (value) => !value.trim();
          const newErros = {};

          if (isEmpty(title)) newErros.title = true;
          if (isEmpty(description)) newErros.description = true;

          if (Object.keys(newErros).length > 0) {
            setErros(newErros);
            return alert("Por favor, preencha todos os campos");
          }

          setErros({});
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
