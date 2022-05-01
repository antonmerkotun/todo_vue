<template>
  <li class="todo-item align-center" :key="todo._id">
    <span class="todo-item_body align-center">
      <input
        id="checkbox"
        class="todo-item_body-checkbox"
        type="checkbox"
        @change="$emit('completed-todo', todo)"
        v-bind:checked="todo.completed"
      />
      <label for="checkbox" />
      <p
        class="todo-item_body-content"
        v-bind:class="{ completed: todo.completed }"
      >
        {{ todo.content }}
      </p>
    </span>
    <button class="todo-item_button" @click="$emit('remove-todo', todo._id)">
      &times;
    </button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.align-center {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.todo-item {
  margin-bottom: 10px;
  padding: 0 20px;
  border-radius: 10px;
  background-color: #383a4c;
  height: 60px;
  &_body {
    &-checkbox {
      margin-right: 20px;
    }
    &-content {
      color: #fff;
      font-weight: 500;
    }
  }
  &_button {
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
    color: #9799ad;
  }
}

.completed {
  text-decoration: line-through;
}
</style>
