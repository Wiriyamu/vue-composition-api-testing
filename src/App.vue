<template>
  <h1>Users</h1>
  <ul>
    <li v-for="user in users" :key="user.id">
      <h1>{{ user.username }}</h1>
      <h2>{{ user.email }}</h2>
      <h3>{{ user.address.city }}</h3>
      <h4>{{ user.phone }}</h4>
    </li>
  </ul>
</template>

<script>
import { computed, onMounted } from "vue";
import { state, actions } from "@/store";

export default {
  name: "App",
  setup() {
    const users = computed(() => state.users);

    onMounted(() => {
      actions.getUsers();
    });

    return { users };
  },
};
</script>
