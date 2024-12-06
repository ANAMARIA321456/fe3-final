import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams(); // Get the id parameter from the URL
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    // Fetch dentist data from the API based on the id
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setDentist(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!dentist) {
    return <div>Loading...</div>; // Display loading message while data is being fetched
  }

  
  return (
    <div className="dentist-detail">
      <h1>{dentist.name}</h1>
      <p>
        <strong>Email:</strong> {dentist.email}
      </p>
      <p>
        <strong>Phone:</strong> {dentist.phone}
      </p>
      <p>
        <strong>Website:</strong>{" "}
        <a
          href={`https://${dentist.website}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {dentist.website}
        </a>
      </p>
    </div>
  );
};

export default Detail;
