// src/app/api/submit/route.js
import { saveSubmission, getAllSubmissions } from '@/src/lib/submit';

export async function POST(req) {
  try {
    const body = await req.json();
    // console.log(body);
    saveSubmission(body);
    return Response.json({ success: true, message: 'Created' });
  } catch (err) {
    return new Response('Error creating submission', { status: 500 });
  }
}

export async function GET() {
  try {
    const submissions = getAllSubmissions();
    let x=Response.json(submissions);
    // console.log(submissions);
    return x;

  } catch (err) {
    return new Response('Error fetching submissions', { status: 500 });
  }
}
