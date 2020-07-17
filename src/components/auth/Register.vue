<template>
  <div>
    <form @submit="register">
      <h2>Register</h2>
      <input type="email" v-model="email" placeholder="Email" />
      <input type="text" v-model="name" placeholder="Name" />
      <input type="password" v-model="password" placeholder="Password" />
      <br />
      <button warn type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      name: "",
    };
  },
  methods: {
    register(e) {
      e.preventDefault();
      const { name, email, password } = this;
      this.$store.dispatch("user/registerUserAction", {
        email,
        name,
        password,
      });
    },
  },
};
</script>
<style scoped></style>
