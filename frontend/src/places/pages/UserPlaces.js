import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "LPU",
    description: "University",
    address: "GT ROAD,JALANDHAR",
    location: { lat: 31.2513104, lng: 75.6993612 },
    creatorId: "u1",
    image:
      "https://qph.cf2.quoracdn.net/main-qimg-0143e674cdfe374591a4c880b5d08097-lq",
  },
  {
    id: "p2",
    title: "LPU",
    description: "University",
    address: "GT ROAD,JALANDHAR",
    location: { lat: 31.2513104, lng: 75.6993612 },
    creatorId: "u2",
    image:
      "https://qph.cf2.quoracdn.net/main-qimg-0143e674cdfe374591a4c880b5d08097-lq",
  },
];
const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(
    (place) => place.creatorId === userId
  );
  return <PlaceList places={loadedPlaces} />;
};
export default UserPlaces;
