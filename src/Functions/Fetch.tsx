export const fetchAvailability = async () => {
  const response = await fetch(
    "https://api.data.gov.sg/v1/transport/carpark-availability"
  );
  const data = await response.json();
  console.log(data.items[0].carpark_data);
  return data.items[0].carpark_data;
};

export const fetchInformation = async () => {
  const response = await fetch(
    "https://data.gov.sg/api/action/datastore_search?resource_id=139a3035-e624-4f56-b63f-89ae28d4ae4c"
  );
  const data = await response.json();
  console.log(data);
  return data.result;
};
