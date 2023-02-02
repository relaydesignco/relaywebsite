import { ref, Ref } from "vue";
import { useMainStore } from "../stores/index"

const useIntersectionEntry = (color: string) => {
  const store = useMainStore()

  const bgColor = color
  const observedElement : Ref<HTMLElement | null> = ref(null)
  const interOptions = {
    root: null,
    threshold: 0.05,
  }

  const interCallback = function (entries?: IntersectionObserverEntry[]) {
    if (entries) {
      const [entry] = entries;
      if (entry.isIntersecting && observedElement.value) {
        store.setBgVisible(color)
      } else if (!entry.isIntersecting && observedElement.value) {
        store.setBgNotVisible(color)
      }
    }
  }

  const observer = new IntersectionObserver(interCallback, interOptions);

  return {
    observedElement,
    interCallback,
    observer,
  }
}

export default useIntersectionEntry;