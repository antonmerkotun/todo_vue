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
      await axios.delete(`/todo/${id}`);
    },
    async addTodo(content: object) {
      await axios.post("/add/todo", content);
      await axios.get("/todos").then(({ data }) => {
        this.todos = data;
      });
    },
    async completedTodo(todo: any) {
      todo.completed = !todo.completed;
      await axios.patch(`/todo/done/${todo._id}`);
    },
  },
});
