export default function User({item:userItem}) {

    return (
        <div>
            {<h2>{userItem.id} {userItem.name}</h2>}
        </div>
    );
}