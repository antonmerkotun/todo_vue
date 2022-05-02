<template>
  <ul class="todo-list">
    <TodoItem
      v-for="todo of todos"
      v-bind:todo="todo"
      :key="todo._id"
      @remove-todo="removeTodo"
      @completed-todo="editCompleted"
      @edit-todo="editTodo"
      @edit-content="editContent"
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
    editCompleted(completed) {
      this.$emit("completed-todo", completed);
    },
    editTodo(todo) {
      this.$emit("edit-todo", todo);
    },
    editContent(content, todo) {
      this.$emit("edit-content", content, todo);
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
