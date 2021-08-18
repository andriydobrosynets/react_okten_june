const getCars = () => {
    return fetch("http://195.72.146.25/api/v1/cars")
        .then(value => value.json());
}

export {getCars};