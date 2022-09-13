import "./card-list.style.css";
import Card from "../card/card-component";

const CardList = ({ users }) => (
  <div className="card-list">
    {users.map((user) => {
      return <Card user={user} />;
    })}
  </div>
);

export default CardList;
