// lib/contact.ts
export type ContactSubmission = {
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

export const CONTACT_STORE: ContactSubmission[] = [];

export async function saveSubmission(data: ContactSubmission) {
  CONTACT_STORE.unshift(data);
}
