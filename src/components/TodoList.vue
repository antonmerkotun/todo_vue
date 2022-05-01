<template>
  <ul class="todo-list">
    <TodoItem
      v-for="todo of todos"
      v-bind:todo="todo"
      :key="todo._id"
      @remove-todo="removeTodo"
      @completed-todo="completedTodo"
    />
  </ul>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
  name: "TodoList",
  props: ["todos"],
  components: { TodoItem },
  methods: {
    removeTodo(id) {
      this.$emit("remove-todo", id);
    },
    completedTodo(completed) {
      this.$emit("completed-todo", completed);
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-list {
  padding: 0;
  margin: 20px 0;
}
</style>
