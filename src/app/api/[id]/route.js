// src/app/api/submit/[id]/route.js
import {
    getSubmissionById,
    updateSubmission,
    deleteSubmission,
  } from '@/src/lib/submit';
  
  export async function GET(req, { params }) {
    try {
      const submission = getSubmissionById(params.id);
      if (!submission) return new Response('Not Found', { status: 404 });
      return Response.json(submission);
    } catch {
      return new Response('Error', { status: 500 });
    }
  }
  
  export async function PUT(req, {params }) {
    try {
      const body = await req.json();
      const p= await params;
      const ID=await p.id;
      updateSubmission( ID, body);
      return Response.json({ success: true, message: 'Updated' });
    } catch {
      return new Response('Error updating submission', { status: 500 });
    }
  }
  
  export async function DELETE(req, { params }) {
    try {
      deleteSubmission(params.id);
      return Response.json({ success: true, message: 'Deleted' });
    } catch {
      return new Response('Error deleting submission', { status: 500 });
    }
  }
  