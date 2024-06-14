<script setup>
import { ref, onMounted } from 'vue'
import Home2View from './Home2View.vue';

// reactive state
const refState = ref({
  string:'test' ,
  obj: { status: true },
  stringArr: ['foo', 'bar']
})

onMounted(() => {
  console.log('onMounted'); // 2
})
console.log(refState.value.string); // 1


// Methods
function toggleComponent() {
  refState.value.obj.status = !refState.value.obj.status
}
</script>

<template>
  <div>
    Home
  </div>
  <div class="custom-config-text">
    {{ this.$commonUtils.testCommonUtils() }}
    <button @click="toggleComponent">Click</button>
  </div>
  <div>
    <template v-if="refState.obj.status == true">
      <Home2View :props="refState"></Home2View>
    </template>
  </div>
</template>

<style scoped>
.custom-config-text {
  color: red;
}
</style>
