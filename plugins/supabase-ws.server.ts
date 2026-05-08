import ws from 'ws'

export default defineNuxtPlugin(() => {
  // Polyfill WebSocket for Node.js < 22 (used by Supabase Realtime)
  if (!globalThis.WebSocket) {
    globalThis.WebSocket = ws as unknown as typeof WebSocket
  }
})
