const deleteCar = (id) => {
    console.log(id);
    return fetch(`http://195.72.146.25/api/v1/cars/${id}`, {
        method: 'DELETE'
    })
}

export {deleteCar}