<template>
  <h1 class="title">To-do list</h1>
  <AddTodo @add-todo="addTodo" />
  <TodoList
    v-bind:todos="todosData.todos.filter((todo) => !todo.completed)"
    @remove-todo="removeTodo"
    @completed-todo="editCompleted"
    @edit-todo="editTodo"
    @edit-content="editContent"
  />
  <div class="hr" />
  <div
    class="completed-block"
    v-if="todosData.todos.some((todo) => todo.completed)"
  >
    <span>✔</span>
    <span>Completed</span>
  </div>
  <TodoList
    v-bind:todos="todosData.todos.filter((todo) => todo.completed)"
    @remove-todo="removeTodo"
    @completed-todo="editCompleted"
    @edit-todo="editTodo"
    @edit-content="editContent"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoList from "@/components/TodoList.vue";
import AddTodo from "@/components/AddTodo.vue";
import { useTodosStore } from "@/store/useTodos";

export default defineComponent({
  name: "App",
  components: { AddTodo, TodoList },
  setup() {
    const todosData = useTodosStore();
    todosData.getTodo;
    return {
      todosData,
    };
  },
  methods: {
    removeTodo(id: number) {
      this.todosData.removeTodo(id);
    },
    addTodo(content: object) {
      this.todosData.addTodo(content);
    },
    editCompleted(todo: any) {
      this.todosData.editCompletedTodo(todo);
    },
    editTodo(todo: any) {
      todo.editing = true;
    },
    editContent(content: any, todo: any) {
      this.todosData.editContentTodo(todo, content);
      todo.editing = false;
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
.hr {
  background-color: #383a4c;
  height: 2px;
  width: 100%;
  margin-bottom: 20px;
}
</style>
