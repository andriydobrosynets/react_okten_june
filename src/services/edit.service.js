export const editCar = (obj, id) => {

   return fetch(`http://91.201.233.14/api/v1/cars/${id}`, {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then(value => console.log(value))

}