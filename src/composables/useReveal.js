import { onMounted, onBeforeUnmount } from 'vue'

export function useReveal(rootRef, options = {}) {
  let observer = null

  const onIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in')
        observer.unobserve(entry.target)
      }
    })
  }

  onMounted(() => {
    const root = rootRef.value
    if (!root) return
    if (typeof IntersectionObserver === 'undefined') {
      root.querySelectorAll('.reveal, .reveal--stagger').forEach((el) => el.classList.add('in'))
      return
    }
    observer = new IntersectionObserver(onIntersect, {
      threshold: options.threshold ?? 0.12,
      rootMargin: options.rootMargin ?? '0px 0px -8% 0px'
    })
    root.querySelectorAll('.reveal, .reveal--stagger').forEach((el) => observer.observe(el))
  })

  onBeforeUnmount(() => {
    if (observer) observer.disconnect()
  })
}
