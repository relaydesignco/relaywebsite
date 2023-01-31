import { defineStore } from "pinia"

export type RootState = {
  bgColor: string,
};

export const useMainStore = defineStore({
  id: "mainStore",
  state: () => ({
      bgColor: 'black',
  } as RootState),
  actions: {
    setBgColor(color: string) {
      this.bgColor = color
    },
  },
});