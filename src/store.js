// store.js
import { createPinia } from 'pinia';

export const pinia = createPinia();

export const useMyStore = pinia.defineStore('myStore', {
  state: () => ({
    // Your state properties go here
    counter: 0,
    // ...
  }),

  getters: {
    // Your getters go here
    doubleCounter: (state) => state.counter * 2,
    // ...
  },

  actions: {
    // Your actions go here
    increment() {
      this.counter++;
    },
    // ...
  },
});
