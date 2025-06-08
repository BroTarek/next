"use client";
import { useEffect, useState } from "react";

export default function CRUDPage() {
  const [submissions, setSubmissions] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    FirstName: "",
    LastName: "",
    email: "",
    password: "",
    age: "",
    dateOfBirth: "",
    dateOfSumbision: new Date().toISOString(),
  });

  // Fetch all submissions
  const fetchData = async () => {
    const res = await fetch("/api/submit");
    if (res.ok) {
      const data = await res.json();
      setSubmissions(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = formData.id ? "PUT" : "POST";
    const endpoint = formData.id ? `/api/${formData.id}` : "/api/submit";
    console.log(formData);
    await fetch(endpoint, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setFormData({
      id: "",
      FirstName: "",
      LastName: "",
      email: "",
      password: "",
      age: "",
      dateOfBirth: "",
      dateOfSumbision: new Date().toISOString(),
    });

    fetchData();
  };
  
  const handleEdit = (s) => {
    setFormData({
      id: s.id,
      FirstName: s.firstName,
      LastName: s.lastName,
      email: s.email,
      password: s.password,
      age: s.age,
      dateOfBirth: s.dateOfBirth,
      dateOfSumbision: s.dateOfSumbision,
    });
  };

  // Delete row
  const handleDelete = async (id) => {
    await fetch(`/api/${id}`, {
      method: "DELETE",
    });
    fetchData();
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">CRUD Form</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="hidden"
          value={formData.id}
          onChange={(e) => setFormData({ ...formData, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="First Name"
          value={formData.FirstName}
          onChange={(e) => setFormData({ ...formData, FirstName: e.target.value })}
          className="border p-1"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={formData.LastName}
          onChange={(e) => setFormData({ ...formData, LastName: e.target.value })}
          className="border p-1"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="border p-1"
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="border p-1"
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          className="border p-1"
          required
        />
        <input
          type="date"
          value={formData.dateOfBirth}
          onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
          className="border p-1"
        />
        <button type="submit" className="bg-blue-500 text-white px-3 py-1">
          {formData.id ? "Update" : "Submit"}
        </button>
      </form>

      <h2 className="text-lg font-semibold mt-6">Submissions</h2>
      <table className="table-auto w-full border mt-2">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2">First</th>
            <th className="border px-2">Last</th>
            <th className="border px-2">Email</th>
            <th className="border px-2">Age</th>
            <th className="border px-2">DOB</th>
            <th className="border px-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((s) => (
            <tr key={s.id}>
              <td className="border px-2">{s.firstName}</td>
              <td className="border px-2">{s.lastName}</td>
              <td className="border px-2">{s.email}</td>
              <td className="border px-2">{s.age}</td>
              <td className="border px-2">{s.dateOfBirth}</td>
              <td className="border px-2">
                <button onClick={() => handleEdit(s)} className="text-blue-600 mr-2">Edit</button>
                <button onClick={() => handleDelete(s.id)} className="text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
