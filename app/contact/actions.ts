'use server';

import { z } from 'zod';
import { saveSubmission } from '@/lib/contact';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ActionState = {
  ok: boolean;
  message?: string;
  errors?: Record<string, string[]>;
};

export async function submitContact(
  prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  const values = {
    name: String(formData.get('name') || ''),
    email: String(formData.get('email') || ''),
    message: String(formData.get('message') || ''),
  };

  const result = schema.safeParse(values);
  if (!result.success) {
    return { ok: false, errors: result.error.flatten().fieldErrors };
  }

  await saveSubmission({ ...result.data, createdAt: new Date().toISOString() });
  return { ok: true, message: 'Thank you! We received your message.' };
}
