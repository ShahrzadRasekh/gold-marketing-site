import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const { name = '', email = '', message = '' } = body;

  const errors: Record<string, string> = {};
  if (name.trim().length < 2)
    errors.name = 'Name must be at least 2 characters';
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
    errors.email = 'Enter a valid email';
  if (message.trim().length < 10)
    errors.message = 'Message must be at least 10 characters';

  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    message: 'Thank you! We received your message.',
  });
}
