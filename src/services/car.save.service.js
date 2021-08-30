let saveCar = (car) => {
    return fetch("http://91.201.233.14/api/v1/cars", {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
}

export {saveCar};