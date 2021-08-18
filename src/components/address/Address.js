import Geo from "../geo/Geo";

export default function Address({address}) {
    const {street, suite, city, zipcode,geo} = address;
    return (
        <div>
            <h3>Street - {street}</h3>
            <p>Suite - {suite}</p>
            <p>City - {city}</p>
            <p>Zipcode - {zipcode}</p>
            {<Geo geo={geo}/>}
        </div>
    );
}