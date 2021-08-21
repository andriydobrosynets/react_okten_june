export default function Car({car}) {
    return (

        <div>
            <p>{car.id} model - {car.model}, price - {car.price}, year - {car.year}</p><hr/>
        </div>
    );
}