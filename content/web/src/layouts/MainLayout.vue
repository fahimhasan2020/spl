<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',

  components: {
  //
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Home',
          caption: 'Main page',
          icon: 'home',
          link: '/'
        },
        {
          title: 'Login',
          caption: 'user login',
          icon: 'account_circle',
          link: '/login'
        },
        {
          title: 'Register',
          caption: 'user register',
          icon: 'input',
          link: '/register'
        },
      ]
    }
  }
}
</script>
