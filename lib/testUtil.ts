import casual from "casual";

casual.seed(333);

const mockReservation = () => ({
  arrivalDate: "06/09/2019",
  departureDate: "06/19/2019",
  hotelName: "Hilton Garden Inn",
  id: "j1h23489ydsa9sf8ha",
  name: "Blake"
});

const mockReservationList = () => [
  {
    arrivalDate: "06/09/2019",
    departureDate: "06/19/2019",
    hotelName: "Hilton Garden Inn",
    id: casual.uuid,
    name: "Blake"
  },
  {
    arrivalDate: "06/02/2019",
    departureDate: "06/10/2019",
    hotelName: "Homewood Suites",
    id: casual.uuid,
    name: "Ashlynn"
  },
  {
    arrivalDate: "06/05/2019",
    departureDate: "06/14/2019",
    hotelName: "The Statler Dallas",
    id: casual.uuid,
    name: "Tammy"
  },
  {
    arrivalDate: "06/11/2019",
    departureDate: "06/16/2019",
    hotelName: "Hampton Inn & Suites",
    id: casual.uuid,
    name: "Jessica"
  }
];

export { mockReservation, mockReservationList, casual };
