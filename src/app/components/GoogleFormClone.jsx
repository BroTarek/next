"use client";

const GoogleFormClone = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch("../api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="FirstName">First Name:</label>
      <input
        type="text"
        id="FirstName"
        name="FirstName"
        required
        maxLength={100}
      />
      <br />

      <label htmlFor="LastName">Last Name:</label>
      <input
        type="text"
        id="LastName"
        name="LastName"
        required
        maxLength={100}
      />
      <br />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <br />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" required />
      <br />

      <label htmlFor="age">Age:</label>
      <input type="number" id="age" name="age" required />
      <br />

      <label htmlFor="dateOfBirth">Date of Birth:</label>
      <input
        id="dateOfBirth"
        name="dateOfBirth"
        type="date"
        defaultValue={new Date().toISOString().split("T")[0]}
      />
      <br />

      <input
        type="hidden"
        id="dateOfSubmission"
        name="dateOfSubmission"
        value={new Date().toISOString()}
      />

      <fieldset>
        <legend>Gender:</legend>
        <label>
          <input type="radio" name="gender" value="Male" /> Male
        </label>
        <br/>
        <label>
          <input type="radio" name="gender" value="Female" /> Female
        </label>
        <br/>
        <label>
          <input type="radio" name="gender" value="Other" /> Other
        </label>
      </fieldset>

      <label htmlFor="city">City:</label>
      <select name="City" id="city" defaultValue="Alex">
        <option value="Giza">Giza</option>
        <option value="Alex">Alex</option>
        <option value="Porto">Porto</option>
      </select>
      <br />

      <button type="submit">Send</button>
    </form>
  );
};

export default GoogleFormClone;
