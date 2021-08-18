import {useState} from "react";
import {saveCar} from "../../services/car.save.service";

export default function FormAddCar() {
    let [cars, setCars] = useState([]);
    let [formState, setFormState] = useState({model: '', price: '', year: ''});

    let onFormInputChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value});
    }

    let save = (e) => {
        e.preventDefault();
        saveCar({...formState}).then(value => setCars([...cars, value]));

    }

    return (
        <div>
            <form onSubmit={save}>
                    Model Car
                    <input type="text" name={'model'} value={formState.model} onChange={onFormInputChange}/>
                    Price Car
                    <input type="text" name={'price'} value={formState.price} onChange={onFormInputChange}/>
                    Year Car
                    <input type="text" name={'year'} value={formState.year} onChange={onFormInputChange}/>
                <input type="submit" />
            </form>

        </div>
    );
}