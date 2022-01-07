import ICarpark from "./Interfaces/InterfaceCarpark";

const Carpark = (carpark: ICarpark) => {
  return (
    <div>
      <h1>I'm a carpark.</h1>
      <p>{carpark.carpark_no}</p>
    </div>
  );
};

export default Carpark;
