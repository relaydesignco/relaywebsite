import { defineStore } from "pinia"

export type RootState = {
  bgColor: string,
  bgColors: string[],
};

export const useMainStore = defineStore({
  id: "mainStore",
  state: () => ({
      bgColor: '',
      bgColors: [],
  } as RootState),
  actions: {
    setBgColor(color: string) {
      this.bgColor = color
    },
    setBgVisible(color: string) {
      this.bgColors.push(color)
      this.bgColor = this.bgColors[this.bgColors.length - 1]
    },
    setBgNotVisible(color: string) {
      const idx = this.bgColors.indexOf(color)
      if (idx > -1) {
        console.log(idx)
        this.bgColors.splice(idx, 1)
        this.bgColor = this.bgColors[this.bgColors.length - 1]
      }
    }
  },
});