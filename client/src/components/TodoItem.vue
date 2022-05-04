<template>
  <li
    class="todo-item align-center"
    v-bind:class="{ edit_content: todo.editing }"
    :key="todo._id"
  >
    <span class="todo-item_body align-center">
      <input
        id="checkbox"
        class="todo-item_body-checkbox"
        type="checkbox"
        @change="$emit('completed-todo', todo)"
        v-bind:checked="todo.completed"
      />
      <label for="checkbox" />
      <div
        class="todo-item_body-content"
        v-bind:class="{ completed: todo.completed }"
        @click="$emit('edit-todo', todo)"
      >
        <span class="span-content" v-if="!todo.editing">
          {{ todo.content }}
        </span>
        <form v-else @submit.prevent="editContentFn">
          <input
            autofocus
            class="input-content"
            type="text"
            v-model="editContent"
          />
        </form>
      </div>
    </span>
    <button class="todo-item_button" @click="$emit('remove-todo', todo._id)">
      &times;
    </button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  data() {
    return {
      editContent: this.todo.content,
    };
  },
  props: {
    todo: {
      type: Object,
      require: true,
    },
  },
  methods: {
    editContentFn() {
      const newContent = this.editContent;
      this.$emit("edit-content", newContent, this.todo);
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
      width: 600px;
      text-align: left;
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
  color: #9799ad;
}
.span-content {
  font-size: 18px;
  font-weight: 500;
}
.input-content {
  width: 737px;
  padding-left: 0;
  background-color: transparent;
  font-size: 19px;
  font-weight: 500;
  color: #fff;
  outline: none;
  border: none;
}
.edit_content {
  height: 58px;
  background-color: #222435;
  border: 1px solid #383a4c;
  border-radius: 10px;
}
</style>
