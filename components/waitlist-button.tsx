"use client"
import { useState } from "react"

export function WaitlistButton({ label, className }: { label: string; className?: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [error, setError] = useState<string | null>(null)

  function validate() {
    if (!name.trim()) return "Please enter your name."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Please enter a valid email."
    if (!role) return "Please select your role."
    return null
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const v = validate()
    if (v) {
      setError(v)
      return
    }
    setError(null)
    setIsSubmitting(true)
    try {
      await new Promise(r => setTimeout(r, 600))
      setIsSuccess(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className={className}>{label}</button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
    <div className="relative z-[101] w-full max-w-md mx-4 rounded-2xl bg-white shadow-xl text-gray-900">
            <div className="relative flex items-center justify-center px-6 py-4 border-b">
              <h3 className="text-lg font-semibold text-center">Join the waitlist</h3>
            </div>

            {!isSuccess ? (
              <form onSubmit={onSubmit} className="px-6 py-5 space-y-4">
                {error && <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md p-2">{error}</div>}
                <div>
      <label className="block text-sm font-medium mb-1 text-gray-700">Name</label>
      <input value={name} onChange={e => setName(e.target.value)} className="w-full rounded-xl border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your name" />
                </div>
                <div>
      <label className="block text-sm font-medium mb-1 text-gray-700">Email</label>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full rounded-xl border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@company.com" />
                </div>
                <div>
      <label className="block text-sm font-medium mb-1 text-gray-700">Role</label>
      <select value={role} onChange={e => setRole(e.target.value)} className="w-full rounded-xl border border-gray-300 bg-white text-gray-900 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500">
                    <option value="">Select a role</option>
                    <option value="CxO">CxO</option>
                    <option value="Analyst">Analyst</option>
                    <option value="Finance">Finance</option>
                    <option value="Sales & Marketing">Sales & Marketing</option>
                    <option value="Operations">Operations</option>
                    <option value="Educator & Researcher">Educator & Researcher</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full rounded-xl bg-indigo-600 text-white py-2 font-semibold hover:bg-indigo-700 disabled:opacity-60">
                  {isSubmitting ? "Submitting..." : "Join waitlist"}
                </button>
              </form>
            ) : (
              <div className="px-6 py-10 text-center">
                <p className="text-lg font-medium mb-6">You’re on the waitlist. We’ll notify you when DataPe is ready!</p>
                <button onClick={() => setIsOpen(false)} className="inline-flex items-center justify-center rounded-xl bg-indigo-600 text-white px-5 py-2 font-semibold hover:bg-indigo-700">Close</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
