'use client'

import { useState } from 'react'
import Link from 'next/link'
import { createSupabaseBrowserClient } from '@/lib/supabase/client'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleGoogleSignIn = async () => {
    setLoading(true)
    setError(null)
    try {
      const supabase = createSupabaseBrowserClient()
      const { error: oAuthError } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/`,
        },
      })

      if (oAuthError) {
        setError(oAuthError.message)
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const supabase = createSupabaseBrowserClient()
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (signInError) {
        setError(signInError.message)
        return
      }

      window.location.href = '/'
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F8F8] text-[#0F0F0F]">
      <div className="w-full max-w-md mx-4 border-2 sm:border-4 border-[#0F0F0F] bg-white shadow-xl">
        <header className="px-6 py-4 border-b-2 border-[#0F0F0F] flex items-center justify-between">
          <Link href="/" className="group">
            <h1 className="font-display text-2xl font-black tracking-tighter group-hover:text-[#5DD62C] transition-colors">
              STRATUM
            </h1>
            <p className="text-[10px] font-semibold tracking-[0.25em] text-[#606060] uppercase hidden sm:block">
              Raw • Bold • Real
            </p>
          </Link>
          <span className="inline-flex items-center px-3 py-1 text-[10px] font-display font-black tracking-[0.25em] border-2 border-[#0F0F0F] bg-[#5DD62C]">
            SIGN IN
          </span>
        </header>

        <main className="px-6 py-6 space-y-4">
          <div className="space-y-1">
            <h2 className="font-display text-xl font-black tracking-tight">
              Welcome back, rebel.
            </h2>
            <p className="text-xs font-body text-[#606060]">
              Log in to track your drops, orders, and preferences.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div className="space-y-2">
              <label className="font-display text-[11px] tracking-[0.2em] uppercase">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border-2 border-[#0F0F0F] bg-[#F8F8F8] text-sm focus:outline-none focus:ring-2 focus:ring-[#5DD62C]"
              />
            </div>

            <div className="space-y-2">
              <label className="font-display text-[11px] tracking-[0.2em] uppercase">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border-2 border-[#0F0F0F] bg-[#F8F8F8] text-sm focus:outline-none focus:ring-2 focus:ring-[#5DD62C]"
              />
            </div>

            {error && (
              <p className="text-xs font-body text-[#D63C3C] border-2 border-[#D63C3C] px-3 py-2 bg-[#FDECEC]">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0F0F0F] text-[#F8F8F8] px-4 py-3 font-display font-black text-xs tracking-[0.2em] border-2 border-[#0F0F0F] hover:bg-[#5DD62C] hover:text-[#0F0F0F] transition-colors disabled:opacity-60"
            >
              {loading ? 'SIGNING IN...' : 'SIGN IN'}
            </button>

            <div className="flex items-center gap-2 text-[10px] text-[#606060] uppercase tracking-[0.2em]">
              <span className="flex-1 h-px bg-[#D0D0D0]" />
              <span>OR</span>
              <span className="flex-1 h-px bg-[#D0D0D0]" />
            </div>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full bg-white text-[#0F0F0F] px-4 py-3 font-display font-black text-xs tracking-[0.2em] border-2 border-[#0F0F0F] hover:bg-[#F8F8F8] transition-colors disabled:opacity-60"
            >
              CONTINUE WITH GOOGLE
            </button>

            <p className="text-xs font-body text-[#606060] text-center">
              New here?{' '}
              <Link
                href="/sign-up"
                className="font-display tracking-[0.2em] text-[10px] uppercase border-b-2 border-[#5DD62C]"
              >
                CREATE ACCOUNT
              </Link>
            </p>
          </form>
        </main>
      </div>
    </div>
  )
}

