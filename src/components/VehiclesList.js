import {useState,useEffect} from "react";
import axios from 'axios';

const Vehicle = () => {
    const [vehicles,setVehicles] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:5000/vehicels")
        .then(response=>{
            setVehicles(response.data);
        })
        .catch(error=>{
            console.log('There was an error fetching the vehicles data!',error);
        })
    },[])

    return (
        <div className="container mt-4">
            <h2>Vehicles List</h2>
            <div className="row">
                {
                    vehicles.map(eachVehicle => (
                        <div className="col-md-4" key={eachVehicle.id}>
                            <div className="card">
                                <img src={eachVehicle.image} className="card-img-top" height={250} alt={eachVehicle.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{eachVehicle.name}</h5>
                                    <p className="card-text">Price : {eachVehicle.price}</p>
                                    <p className="card-text">Mileage : {eachVehicle.mileage} miles</p>
                                    <p className="card-text">Seats : {eachVehicle.seats}</p>
                                    <p className="card-text">Color : {eachVehicle.color}</p>
                                    <p className="card-text">Fuel : {eachVehicle.fuel}</p>
                                    <p className="card-text">Gear : {eachVehicle.gear}</p>
                                    <p className="card-text">Description : {eachVehicle.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Vehicle;

 


