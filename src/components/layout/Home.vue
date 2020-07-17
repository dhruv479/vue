<template>
  <div>
    <router-link to="/login">
      <vs-button warn>Login</vs-button>
    </router-link>
    <router-link to="/register">
      <vs-button warn>Register</vs-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data: () => ({
    active: "guide",
  }),
};
</script>

<style scoped></style>
