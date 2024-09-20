<template>
  <DefaultLayout>
    <router-view />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from './layouts/DefaultLayout.vue'; // Adjust the path as necessary

export default {
  components: {
    DefaultLayout,
  },
};
</script>