/**
 * AuthGate component - simple client-side password gate for demo access
 *
 * Note: This is intentionally minimal and client-only. It is NOT secure for production.
 * For production use, replace with server-side authentication or a third-party auth provider.
 */

import React, { useEffect, useState } from 'react'
import { Lock } from 'lucide-react'

/**
 * Props for AuthGate
 */
interface AuthGateProps {
  /** Children to render when authenticated */
  children: React.ReactNode
}

/**
 * DEMO_PASSWORD - default demo password.
 * Change this value before sharing. For real security, implement server auth.
 */
const DEMO_PASSWORD = 'amaranth2026'

/**
 * AuthGate component - shows a password screen until the correct password is entered.
 *
 * This stores a simple flag in sessionStorage to persist within the browser session.
 */
export default function AuthGate({ children }: AuthGateProps): JSX.Element {
  const [isAuthed, setIsAuthed] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('amaranth_authed') === '1'
    } catch {
      return false
    }
  })
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  /**
   * handleSubmit - validate the entered password and set auth state
   */
  function handleSubmit(e?: React.FormEvent) {
    if (e) e.preventDefault()
    setError(null)
    setLoading(true)
    // Simulate light delay for UX
    setTimeout(() => {
      setLoading(false)
      if (password === DEMO_PASSWORD) {
        try {
          sessionStorage.setItem('amaranth_authed', '1')
        } catch {
          // ignore storage errors
        }
        setIsAuthed(true)
      } else {
        setError('密码不正确。若需共享预览，请联系站点管理员。')
      }
    }, 450)
  }

  /**
   * handleLogout - clear session auth (debugging / admin)
   */
  function handleLogout() {
    try {
      sessionStorage.removeItem('amaranth_authed')
    } catch {
      // ignore
    }
    setIsAuthed(false)
    setPassword('')
    setError(null)
  }

  // If already authenticated, render children.
  if (isAuthed) {
    return <>{children}</>
  }

  // Otherwise render the password gate UI.
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#FFF9F3] to-white px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center gap-4">
          <div className="rounded-full w-12 h-12 bg-gradient-to-br from-[#FDE8D0] to-[#F9C99B] flex items-center justify-center shadow">
            <span className="font-serif text-xl font-semibold text-[#7A3F24]">A</span>
          </div>
          <div>
            <div className="text-lg font-semibold text-[#6B3A21]">Amaranth — Preview Access</div>
            <div className="text-xs text-slate-500">请输入访问密码以查看预览（仅演示用）</div>
          </div>
        </div>

        <form className="mt-6" onSubmit={handleSubmit}>
          <label className="text-sm text-slate-600">访问密码</label>
          <div className="mt-2 flex gap-2">
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="输入密码"
              className="flex-1 p-3 rounded-md border border-transparent shadow-sm"
              autoFocus
            />
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 rounded-md bg-[#C66C2E] text-white font-medium shadow disabled:opacity-60 flex items-center gap-2"
            >
              <Lock size={16} />
              {loading ? '验证中...' : '进入'}
            </button>
          </div>
        </form>

        {error && <div className="mt-3 text-sm text-rose-600">{error}</div>}

        <div className="mt-4 text-xs text-slate-500">
          提示：此保护仅为演示用。若需生产级访问控制，我可以帮你接入后端认证或第三方服务（Auth0 / Clerk / Firebase 等）。
        </div>

        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={() => {
              // quick guest fallback for demo (optional)
              try {
                sessionStorage.setItem('amaranth_authed', '1')
                setIsAuthed(true)
              } catch {
                setError('无法设置会话存储。')
              }
            }}
            className="text-sm text-slate-600 underline"
          >
            以访客方式预览（不推荐）
          </button>

          <button onClick={handleLogout} className="text-sm text-slate-600 underline">
            清除状态
          </button>
        </div>
      </div>
    </div>
  )
}
