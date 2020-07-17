<template>
  <div>
    <div>
      <h2>Log In</h2>
      <form @submit="login">
        <input type="email" v-model="email" placeholder="Email Address" />

        <input type="password" v-model="password" placeholder="Password" />

        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      this.$store.dispatch("user/loginUserAction", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped></style>
