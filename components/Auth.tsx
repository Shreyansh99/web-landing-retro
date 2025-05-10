'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)
    
    try {
      if (isSignUp) {
        // Sign up
        const { error } = await supabase.auth.signUp({
          email,
          password,
        })
        
        if (error) throw error
        
        setMessage({
          type: 'success',
          text: 'Check your email for the confirmation link!',
        })
      } else {
        // Sign in
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        
        if (error) throw error
        
        setMessage({
          type: 'success',
          text: 'Signed in successfully!',
        })
      }
    } catch (error: any) {
      setMessage({
        type: 'error',
        text: error.message || 'An error occurred',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {isSignUp ? 'Create an Account' : 'Sign In'}
      </h2>
      
      {message && (
        <div className={`p-3 rounded-md mb-4 ${
          message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {message.text}
        </div>
      )}
      
      <form onSubmit={handleAuth}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full mb-4"
        >
          {loading ? 'Loading...' : isSignUp ? 'Sign Up' : 'Sign In'}
        </button>
      </form>
      
      <div className="text-center">
        <button
          type="button"
          onClick={() => setIsSignUp(!isSignUp)}
          className="text-primary-600 hover:underline"
        >
          {isSignUp ? 'Already have an account? Sign in' : 'Need an account? Sign up'}
        </button>
      </div>
    </div>
  )
}
