import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import { useEffect, useState } from "react";
import type { Schema } from "../../../amplify/data/resource";
import outputs from "../../../amplify_outputs.json";

Amplify.configure(outputs);
const client = generateClient<Schema>();

export default function Todo() {
  const [todos, setTodos] = useState<Schema["Todo"]["type"][]>([]);

  const fetchTodos = async () => {
    const { data: items, errors } = await client.models.Todo.list();
    setTodos(items);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const createTodo = async () => {
    await client.models.Todo.create({
      content: window.prompt("Todo content?"),
      isDone: false,
    });

    fetchTodos();
  }

  const labels = Array.from(new Set(todos.map((t) => t.content)))

  return (
    <div>
      <button onClick={createTodo}>Add new todo</button>
      <ul>
        {todos.map(({ id, content, isDone }) => (
          <li key={id}>{content}, isDone: {isDone}</li>
        ))}
      </ul>
    </div>
  );
}