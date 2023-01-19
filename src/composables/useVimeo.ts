import { onMounted } from 'vue'

export function useVimeo() {
  onMounted(() => {
    let vimeoScript = document.createElement('script')
    vimeoScript.setAttribute('src', 'https://player.vimeo.com/api/player.js')
    document.head.appendChild(vimeoScript)
  });
}