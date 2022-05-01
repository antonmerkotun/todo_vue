<template>
  <form class="add-todo" @submit.prevent="onSubmit">
    <div class="add-todo_plus" />
    <input
      class="add-todo_input"
      type="text"
      placeholder="Add a task"
      v-model="content"
    />
  </form>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      content: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.content.trim()) {
        const newTodo = {
          content: this.content,
        };
        this.$emit("add-todo", newTodo);
        this.content = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.add-todo {
  position: relative;
  &_input {
    height: 60px;
    width: 737px;
    background-color: transparent;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 400;
    padding-left: 60px;
    color: #fff;
    outline: none;
    border: 1px solid #535568;
    &::placeholder {
      color: #7a7c8d;
    }
    &:focus {
      background-color: #383a4c;
    }
  }
}
.add-todo_plus {
  position: absolute;
  height: 20px;
  width: 20px;
  background-image: url("/src/assets/icons/icon-plus.png");
  top: 22px;
  left: 20px;
}
</style>
