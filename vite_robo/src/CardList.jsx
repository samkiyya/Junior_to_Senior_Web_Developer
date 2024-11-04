import Card from "./Card.jsx";

const CardList = ({ robots }) => {
  // Assume that robots is an array of objects with id, name, and email properties
  const cardArray = robots.map((user, index) => {
    return (
      <Card key={index} id={user.id} name={user.name} email={user.email} />
    );
  });
  return <div>{cardArray}</div>;
};
export default CardList;
