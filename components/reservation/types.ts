export type Reservation = {
  id: string;
  name: string;
  hotelName: string;
  arrivalDate: string;
  departureDate: string;
};

export type ReservationUpdate = (
  cache: any,
  {
    data: { addReservation }
  }: any
) => void;
