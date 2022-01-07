import ICarpark from "../components/Interfaces/InterfaceCarpark";

/** Takes in a user given location. */
export const fetchCarparks = (
  location: string,
  setCarparks: React.Dispatch<React.SetStateAction<ICarpark[]>>
) => {
  // this regex removes all that is not alphanumeric and space character
  const filteredLocation = location.toUpperCase().replace(/[^A-Z0-9 ]/, "");
  fetch(
    `https://data.gov.sg/api/action/datastore_search?resource_id=139a3035-e624-4f56-b63f-89ae28d4ae4c&limit=5&q=${filteredLocation}`
  )
    .then((response) => {
      response.json().then((data) => {
        const carparksFromAPI = data.result.records;
        const carparksFormatted: ICarpark[] = carparksFromAPI.map(
          (carpark: {
            car_park_no: string;
            address: string;
            free_parking: string;
            night_parking: string;
          }): ICarpark => {
            return {
              carpark_no: carpark.car_park_no,
              lot_type: "unknown",
              lots_total: 0,
              lots_available: 0,
              address: carpark.address,
              free_parking: carpark.free_parking,
              night_parking: carpark.night_parking,
            };
          }
        );
        console.log(carparksFormatted); // TODO: remove this console.log
        setCarparks(carparksFormatted);
      });
    })
    .catch();
};
