<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from './components/shared/HeaderComponent.vue'
import FooterComponent from './components/shared/FooterComponent.vue'
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <div class="container">
    <RouterView />
  </div>
  <FooterComponent></FooterComponent>
</template>

<script>
export default {
  components: { HeaderComponent, FooterComponent, RouterView },
  mounted() {},
  updated() {},
  created() {},
  beforeMount() {},
  return: {},
  methods: {},
};
</script>

<style scoped>

</style>
