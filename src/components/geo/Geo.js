export default function Geo({geo}) {
    console.log(geo);
    const {lat, lng} = geo;
    return (
        <div>
            <h3>
                <p>{lat}</p>
                <p> {lng}</p>
            </h3>

        </div>
    );
}