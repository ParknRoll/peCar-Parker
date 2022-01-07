export const fetchAvailability = () => {
  return fetch("https://api.data.gov.sg/v1/transport/carpark-availability")
    .then((response) => response.json())
    .then((data) => console.log(data));
};
