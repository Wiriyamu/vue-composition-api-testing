<template>
  <h1>Users List</h1>
  <button @click="showListUsers">{{ data.textButton }}</button>

  <ul v-if="data.showUsers">
    <li v-for="user in users" :key="user.id">
      <h1>{{ user.username }}</h1>
      <h2>{{ user.email }}</h2>
      <h3>{{ user.address.city }}</h3>
      <h4>{{ user.phone }}</h4>
    </li>
  </ul>
</template>

<script>
import { computed, onMounted, reactive } from "vue";
import { state, actions } from "@/store";

export default {
  name: "App",

  setup() {
    const data = reactive({
      showUsers: false,
      textButton: "View List Users",
    });

    const users = computed(() => state.users);

    const showListUsers = () => {
      data.showUsers = !data.showUsers;
      data.showUsers
        ? (data.textButton = "Hide List Users")
        : (data.textButton = "View List Users");
    };

    onMounted(() => {
      actions.getUsers();
    });

    return { data, users, showListUsers };
  },
};
</script>
