import { defineStore } from 'pinia';

export const useExampleStore = defineStore('ExampleStore', {
  state: () => ({
    example: {
      name: 'Example View ⬅️ Using Pinia 🍍',
    },
  }),
  getters: {
    name: (state) => state.example.name,
  },
  actions: {
    setName(name: string) {
      if (!name) this.example.name = 'Example View ⬅️ Using Pinia 🍍';
      else this.example.name = name;
    },
  },
});
