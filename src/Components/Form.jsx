import  { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 5) {
      setError("Por favor verifique su información nuevamente");
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Por favor verifique su información nuevamente");
      return;
    }

    setError("");
    setSuccessMessage(`Gracias ${name}, te contactaremos cuando antes vía mail`);
    console.log({ name, email });  // Simulating the form submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre Completo:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Enviar</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default Form;
