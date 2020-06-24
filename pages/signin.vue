<template>
  <div>
    <h2>sign in</h2>
    <form @submit.prevent="pressed">
      <div class="email">
        <p class="email">email</p>
        <input v-model="email" type="text" />
      </div>
      <div class="password">
        <p class="password">password</p>
        <input v-model="password" type="password" />
      </div>
      <button>Login</button>
    </form>
    <div v-if="error" class="error"></div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          console.log(data)
          this.$router.push('/secret')
        })
        .catch((error) => (this.error = error))
    },
  },
}
</script>

<style lang="scss" scoped></style>
