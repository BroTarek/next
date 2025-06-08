// src/lib/submit.js
import db from './db.js';

export function saveSubmission(data) {
  const stmt = db.prepare(`
    INSERT INTO submissions (
      firstName, lastName, email, password, age, dateOfBirth, dateOfSubmission
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  stmt.run(
    data.FirstName,
    data.LastName,
    data.email,
    data.password,
    data.age,
    data.dateOfBirth,
    data.dateOfSumbision
  );
}

export function getAllSubmissions() {
  return db.prepare(`SELECT * FROM submissions`).all();
}

export function getSubmissionById(id) {
  return db.prepare(`SELECT * FROM submissions WHERE id = ?`).get(id);
}

export function updateSubmission(id, data) {
  const stmt = db.prepare(`
    UPDATE submissions
    SET firstName = ?, lastName = ?, email = ?, password = ?, age = ?, dateOfBirth = ?, dateOfSubmission = ?
    WHERE id = ?
  `);

  stmt.run(
    data.FirstName,
    data.LastName,
    data.email,
    data.password,
    data.age,
    data.dateOfBirth,
    data.dateOfSumbision,
    id
  );
}

export function deleteSubmission(id) {
  db.prepare(`DELETE FROM submissions WHERE id = ?`).run(id);
}
