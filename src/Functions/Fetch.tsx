import ICarpark from "../components/Interfaces/InterfaceCarpark";

export const fetchCarparkAvailability = (
  location: string,
  setFilteredCarparks: React.Dispatch<React.SetStateAction<any[]>>
) => {
  fetch(`https://api.data.gov.sg/v1/transport/carpark-availability`).then(
    (response) => {
      response.json().then((data) => {
        const result = data.items[0].carpark_data;
        fetchCarparks(location, result, setFilteredCarparks);
      });
    }
  );
};

/** Takes in a user given location. */
export const fetchCarparks = (
  location: string,
  allCarparks: any[],
  setFilteredCarparks: React.Dispatch<React.SetStateAction<ICarpark[]>>
) => {
  // this regex removes all that is not alphanumeric and space character
  const filteredLocation = location.toUpperCase().replace(/[^A-Z0-9 ]/, "");
  fetch(
    `https://data.gov.sg/api/action/datastore_search?resource_id=139a3035-e624-4f56-b63f-89ae28d4ae4c&q=jurong`
  ).then((response) => {
    response
      .json()
      .then((data) => {
        const carparksFromAPI: any[] = data.result.records;
        const carparksFormatted: ICarpark[] = [];
        carparksFromAPI.forEach((carpark) => {
          const mapping = allCarparks.find(
            (c) => c.carpark_number === carpark.car_park_no
          );
          if (mapping) {
            // only returns if we can find from the first API
            const mapping2 = mapping.carpark_info[0];
            const result = {
              carpark_no: carpark.car_park_no,
              lot_type: mapping2.lot_type,
              lots_total: mapping2.total_lots,
              lots_available: mapping2.lots_available,
              address: carpark.address,
              free_parking: carpark.free_parking,
              night_parking: carpark.night_parking,
            };
            carparksFormatted.push(result);
          }
        });
        setFilteredCarparks(carparksFormatted);
      })
      .catch((error) => console.log(error));
  });
};
