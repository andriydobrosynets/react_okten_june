import {useEffect, useState} from "react";
import {getCars} from "../../services/cars.get.service";
import Car from "../car/Car";
export default function Cars() {
    let [cars, setCars] = useState([]);

    useEffect(() => {
        getCars().then(value => {
            setCars([...value]);
        });
    }, [])
     return (
        <div>

            <h4>Cars with Database</h4>
            {
                cars.map(car =>
                    <Car
                        key={car.id}
                        car={car}
                    />)
            }
        </div>
    );
}