'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [pending, setPending] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setMsg(null);
    setErrors({});

    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const data = await res.json();
      setErrors(data.errors || {});
    } else {
      const data = await res.json();
      setMsg(data.message);
      (e.target as HTMLFormElement).reset();
    }
    setPending(false);
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 max-w-xl space-y-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          name="name"
          className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 focus:ring-2 focus:ring-amber-400"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          name="email"
          type="email"
          className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 focus:ring-2 focus:ring-amber-400"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea
          name="message"
          rows={5}
          className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 focus:ring-2 focus:ring-amber-400"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="rounded-lg bg-amber-500 px-5 py-2 text-sm font-semibold text-white hover:bg-amber-600 disabled:opacity-60"
      >
        {pending ? 'Sending...' : 'Send message'}
      </button>

      {msg && <p className="text-sm font-medium text-green-700 mt-2">{msg}</p>}
    </form>
  );
}
