import {editCar} from "../../services/edit.service";
export default function Car({car,onclicCarDelete, onEditCar}) {

    return (
        <div>
            <p>id - {car.id}, model - {car.model}, price - {car.price}, year - {car.year}</p>
            <button onClick={()=>onclicCarDelete(car.id)}> Delete </button>
            <button onClick={() => onEditCar(car.id)}> Edit </button><hr/>
        </div>
    );
}