<template>
  <h1 class="title">To-do list</h1>
  <AddTodo @add-todo="addTodo" />
  <TodoList
    v-bind:todos="todos.filter((todo) => !todo.completed)"
    @remove-todo="removeTodo"
    @completed-todo="completedTodo"
  />
  <hr />
  <div class="completed-block" v-if="todos.some((todo) => todo.completed)">
    <span>✔</span>
    <span>Completed</span>
  </div>
  <TodoList
    v-bind:todos="todos.filter((todo) => todo.completed)"
    @remove-todo="removeTodo"
    @completed-todo="completedTodo"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoList from "@/components/TodoList.vue";
import AddTodo from "@/components/AddTodo.vue";
import axios from "axios";

export default defineComponent({
  name: "App",
  data() {
    return {
      todos: [],
    };
  },
  components: { AddTodo, TodoList },
  mounted() {
    axios.get("/todos").then(({ data }) => {
      this.todos = data;
    });
  },
  methods: {
    removeTodo(id: number) {
      this.todos = this.todos.filter(({ _id }): any => _id !== id);
      axios.delete(`/todo/${id}`);
    },
    addTodo(content: object) {
      axios.post("/add/todo", content);
    },
    completedTodo(todo: any) {
      todo.completed = !todo.completed;
      axios.patch(`/todo/done/${todo._id}`);
    },
  },
});
</script>

<style lang="scss">
body {
  background-color: #222435;
}
#app {
  max-width: 800px;
  font-family: "Inter", sans-serif;
  text-align: center;
  margin: 60px auto 0;
}
.title {
  color: #535568;
  margin-bottom: 30px;
}
.completed-block {
  height: 29px;
  width: 114px;
  background-color: #1e446e;
  color: #4ea2ff;
  border-radius: 4px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
