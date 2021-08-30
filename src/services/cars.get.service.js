const getCars = () => {
    return fetch("http://91.201.233.14/api/v1/cars")
        .then(value => value.json());
}

export {getCars};