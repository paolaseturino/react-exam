export const getEmployees = () => {
    fetch('https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/paola_corral')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err.message)
    })
}

export const addEmployess = (name: string, lastName: String, birthDate: Date) => {
    fetch('https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/paola_corral',
         {method: 'POST',
            body: JSON.stringify({
                name: name,
                lastName: lastName,
                birthDate: birthDate.toString()
            }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("ok");
        
    })
    .catch((err) => {
        console.log(err.message);
        
    })
}
