<template>
  <v-app>
    <Navbar />
    <v-content class="mx-4">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar
  },
  data: () => ({
    //
  })
};
</script>

<style>
.theme--light.v-application {
  background: #f5f5f5 !important;
  border-color: #f5f5f5 !important;
}
</style>
