import Card from "./Card";

const AllCards = ({ data }) => {
  return (
    <div className="allCards foggybg ">
      {data.items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};
export default AllCards;
