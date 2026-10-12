import * as bundled from './content.js'

// In dev, default to the local FastAPI server. In production builds, the API is used only when
// VITE_API_URL is set; otherwise the site runs fully static from content.js (e.g. GitHub Pages).
const API_URL = import.meta.env.VITE_API_URL ?? (import.meta.env.DEV ? 'http://localhost:8000' : '')
const TIMEOUT_MS = 5000

export const bundledContent = {
  profile: bundled.profile,
  projects: bundled.projects,
  skills: bundled.skills,
}

export const apiEnabled = Boolean(API_URL)

function isContent(data) {
  return (
    data != null &&
    typeof data.profile === 'object' &&
    Array.isArray(data.projects) &&
    Array.isArray(data.skills)
  )
}

export async function fetchContent(signal) {
  const res = await fetch(`${API_URL.replace(/\/$/, '')}/api/v1/content`, {
    signal: AbortSignal.any([signal, AbortSignal.timeout(TIMEOUT_MS)]),
  })
  if (!res.ok) throw new Error(`GET /api/v1/content failed: ${res.status}`)
  const data = await res.json()
  if (!isContent(data)) throw new Error('GET /api/v1/content returned an unexpected shape')
  return data
}
