// MyComponent.vue
<template>
  <div>
    <p>Counter: {{ counter }}</p>
    <p>Double Counter: {{ doubleCounter }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useMyStore } from '@/store';

export default defineComponent({
  setup() {
    const store = useMyStore();

    return {
      counter: store.counter,
      doubleCounter: store.doubleCounter,
      increment: store.increment,
    };
  },
});
</script>
