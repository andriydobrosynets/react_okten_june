import {editCar} from "../../services/edit.service";
export default function Car({car,onclicCarDelete}) {

    const onclicCarEdit =(id)=>{
        editCar(id)
    }
    return (
        <div>
            <p>id - {car.id}, model - {car.model}, price - {car.price}, year - {car.year}</p>
            <button onClick={()=>onclicCarDelete(car.id)}> Delete </button>
            <button onClick={onclicCarEdit}> Edit </button><hr/>
        </div>
    );
}