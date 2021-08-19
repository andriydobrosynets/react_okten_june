import {useEffect, useState} from "react";
import {getCars} from "../../services/cars.get.service";
import Car from "../car/Car";
import {deleteCar} from "../../services/delete.service";
import {saveCar} from "../../services/car.save.service";
import {editCar} from "../../services/edit.service";


export default function Cars() {
    let [cars, setCars] = useState([]);
    let [formState, setFormState] = useState({model: '', price: '', year: ''});
    let [flag, setFlag] = useState(true);
    useEffect(() => {
        getCars().then(value => {
            setCars(value);
        });
    }, [flag])

    const onclicCarDelete = (id) => {
        deleteCar(id);
        setCars(cars.filter(value => value.id !== id));
    }

    let onFormInputChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value});
    }

    let save = (e) => {
        e.preventDefault();
        saveCar(formState).then(value => setCars([...cars, value]));
    }

    const onEditCar = (id) => {
        editCar(formState, id).then(value => {
            const find = cars.find(value => value.id === id);
            // Object.assign(find, formState)
            setFlag(!flag)
        })

    }

    return (
        <div>
            <h4>Cars with Database</h4>
            <div style={{display: 'flex', flexDirection: 'column-reverse'}}>
                {
                    cars.map(car => {
                        return (
                            <Car
                                key={car.id}
                                car={car}
                                onclicCarDelete={onclicCarDelete}
                                onEditCar={onEditCar}
                            />
                        )
                    })
                }
                <form onSubmit={save}>
                    Model Car
                    <input type="text" name={'model'} value={formState.model} onChange={onFormInputChange}/>
                    Price Car
                    <input type="text" name={'price'} value={formState.price} onChange={onFormInputChange}/>
                    Year Car
                    <input type="text" name={'year'} value={formState.year} onChange={onFormInputChange}/>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    );
}