const  editCar= ({id}) => {

    fetch(`http://195.72.146.25/api/v1/cars/${id}`, {
        method: 'PUT',
        body: JSON.stringify(id),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

export {editCar}