// src/lib/db.js
import Database from 'better-sqlite3';
import path from 'path';

const db = new Database(path.resolve(process.cwd(), 'submissions.db'));

// Create table if not exists
db.exec(`
  CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT,
    lastName TEXT,
    email TEXT,
    password TEXT,
    age INTEGER,
    dateOfBirth TEXT,
    dateOfSubmission TEXT
  )
`);

export default db;
