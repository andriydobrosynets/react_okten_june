export default function Company({company}) {
    console.log(company);
    const {name, catchPhrase, bs} = company;
    return (
        <div>
            <h5>Company name - {name}</h5>
            <p>catchPhrase - {catchPhrase}</p>
            <p>bs - {bs}</p>
        </div>
    );
}