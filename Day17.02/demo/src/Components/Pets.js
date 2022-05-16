import { Link } from "react-router-dom";

export default function Pets(props) {
  console.log(props);
  return (
    <>
      {props.data.map((pet) => {
        return (
          <Link to={`/pet/${pet.id}`} key={pet.id}>
            <div>
              <h2>{pet.name}</h2>
              <img src={pet.url} alt={pet.name} />
            </div>
          </Link>
        );
      })}
    </>
  );
}

<Link to="/">Home</Link>;
