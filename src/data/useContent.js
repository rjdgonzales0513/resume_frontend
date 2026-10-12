import { useEffect, useState } from 'react'
import { apiEnabled, bundledContent, fetchContent } from './api.js'

// Returns { content, source, loading }. `source` is 'api' or 'bundled' (fallback when the API
// is disabled or unreachable), and is exposed on <html data-content-source> for debugging/tests.
export function useContent() {
  const [state, setState] = useState(() =>
    apiEnabled
      ? { content: null, source: null, loading: true }
      : { content: bundledContent, source: 'bundled', loading: false },
  )

  useEffect(() => {
    if (!apiEnabled) return
    const controller = new AbortController()
    fetchContent(controller.signal)
      .then((content) => setState({ content, source: 'api', loading: false }))
      .catch((err) => {
        if (controller.signal.aborted) return // unmounted (or StrictMode re-run)
        console.warn('Portfolio API unavailable, using bundled content.', err)
        setState({ content: bundledContent, source: 'bundled', loading: false })
      })
    return () => controller.abort()
  }, [])

  useEffect(() => {
    if (state.source) document.documentElement.dataset.contentSource = state.source
  }, [state.source])

  return state
}
