import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import "./PlaceList.css";
const PlaceList = (props) => {
  if (!props.places.length) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Places Found.Maybe Create One?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }
  return (
    <ul className="place-list">
      {props.places.map((place) => (
        <PlaceItem key={place.id} place={place} />
      ))}
    </ul>
  );
};
export default PlaceList;
