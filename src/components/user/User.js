import Address from "../address/Address";
import Company from "../company/Company";
export default function User({i, users}) {
    if (i > users.length) return <h2>This is user undefined!</h2>
    const {id, name, username,email, address,phone,website ,company, geo} = users[i];
    return (
        <div>
            <h4>{id}<br/>
                {name}<br/>
                {username}<br/>
                {email}<br/>
            </h4>
            <Address address={address}/>
            <h4>Phone - {phone}</h4>
            <h4>Website - {website}</h4>
            <Company company ={company}/><br/>
            <hr/>


        </div>
    );
}