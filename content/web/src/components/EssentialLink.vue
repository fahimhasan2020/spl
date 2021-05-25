<template>
  <router-link :to="link">
    <q-item
    >
      <q-item-section
        v-if="icon"
        avatar
      >
        <q-icon :name="icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ title }}</q-item-label>
        <q-item-label caption>
          {{ caption }}
        </q-item-label>
      </q-item-section>


    </q-item>
  </router-link>

</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
  a{
    text-decoration: none;
    color: #092c2c;
  }
  .q-item:hover{
    background-color: #e8e5e5;
    color: #444242;
  }
</style>
