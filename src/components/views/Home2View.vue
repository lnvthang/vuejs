<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps(['props'])

const stateRef = ref({
  props: props.props
})

onMounted(() => {
    console.log('mounted Home2View');
})

onUnmounted(() => {
    console.log('unmounted Home2View');
})

</script>

<template>
  <div>
    {{ stateRef.props.string }} | {{ stateRef.props.obj }} | {{ stateRef.props.stringArr }}
  </div>
</template>

