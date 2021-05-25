<template>
  <q-page class="row items-center justify-evenly">
    <div class="q-pa-md" style="max-width: 400px">
      <h3>Register</h3>
      <hr>
      <q-btn to="/login" label="Login" class="q-mt-md full-width"  glossy color="warning" />
      <hr>
      <q-btn to="/#" label="Register with Facebook" class="q-mt-md full-width" icon="fab fa-facebook" glossy color="primary" />
      <q-btn to="/#" label="Register with Twitter" class="q-mt-md full-width" icon="fab fa-twitter" glossy color="info" />
      <q-btn to="/#" label="Register with LinkedIn" class="q-mt-md full-width" icon="fab fa-linkedin" glossy color="blue" />
      <q-btn to="/#" label="Register with Instagram" class="q-mt-md full-width" icon="fab fa-instagram" glossy color="red" />
      <q-btn to="/#" label="Register with Pinterest" class="q-mt-md full-width" icon="fab fa-pinterest" glossy color="pink" />
      <q-btn to="/#" label="Register with Github" class="q-mt-md full-width" icon="fab fa-github" glossy color="black" />
      <hr>
      <h3>Register with email</h3>
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="firstName"
          label="First Name"
          hint="First name"
        />
        <q-input
          filled
          v-model="lastName"
          label="Last Name"
          hint="Last name"
        />
        <q-input
          filled
          v-model="email"
          label="Your email"
          hint="Email Id"
          lazy-rules
          :rules="[
        val => $v.email.required || 'Email is required',
        val => $v.email.email || 'Invalid email format',
        ]"
        />
        <q-input
          filled
          type="password"
          v-model="password"
          label="Password"
          lazy-rules
          :rules="[val => !!val || 'Password is missing']"
        />
        <q-toggle v-model="accept" label="Keep me log in" />
        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>
<script>
  import {email, required} from "vuelidate/lib/validators";
  export default {
    name: "Register",
    meta:{
      title:'Laravel boiler plate | Register',
      noscript: {
        default: 'This is content for browsers with no JS (or disabled JS)'
      }
    },
    data(){
      return{
        email:null,
        password:null,
        accept: false,
        firstName:null,
        lastName:null
      }
    },
    validations: {
      email: {
        required,
        email,
      },
      password: {
        required,
      },
    },
    methods:{
      onSubmit () {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      },

      onReset () {
        this.email = null
        this.password = null
        this.accept = false
      }
    }
    }
</script>

<style scoped>

</style>
