import { defineStore } from "pinia";
import axios from "axios";

export const useTodosStore = defineStore("todos", {
  state: () => ({
    todos: [],
  }),
  getters: {
    getTodo: async (state: any) => {
      await axios.get("/todos").then(({ data }) => {
        state.todos = [...state.todos, ...data];
      });
    },
  },
  actions: {
    async removeTodo(id: number) {
      this.todos = this.todos.filter(({ _id }): any => _id !== id);
      await axios.delete(`/todos/${id}`);
    },
    async addTodo(content: object) {
      await axios.post("/todos", content);
      await axios.get("/todos").then(({ data }) => {
        this.todos = data;
      });
    },
    async editCompletedTodo(todo: any) {
      todo.completed = !todo.completed;
      await axios.put(`/todos/${todo._id}`, {
        completed: todo.completed,
      });
    },
    async editContentTodo(todo: any, content: any) {
      todo.content = content;
      await axios.put(`/todos/${todo._id}`, {
        content,
      });
    },
  },
});
