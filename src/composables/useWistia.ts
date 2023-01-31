import { onMounted } from 'vue'

export function useWistia() {
  onMounted(() => {
    let videoScript = document.createElement('script')
    videoScript.setAttribute('src', 'https://fast.wistia.net/assets/external/E-v1.js')
    document.head.appendChild(videoScript)
  });
}
