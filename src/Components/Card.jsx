import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes

const Card = ({ name, username, id }) => {
  const addFav = () => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favs.some((fav) => fav.id === id)) {
      favs.push({ name, username, id });
      localStorage.setItem("favorites", JSON.stringify(favs));
    }
  };

  const defaultImage = "src/Source/images/doctor.jpg";

  return (
    <div className="card">
      <img src={defaultImage} alt={name} className="imgDoctor" />
      <h3>
        {name} - {username}
      </h3>
      <Link to={`/dentist/${id}`} className="linkToDetail">
        View Details
      </Link>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

// Add PropTypes for validation
Card.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
