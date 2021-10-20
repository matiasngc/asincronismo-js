const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Funcionó')
        } else {
            reject('No funcionó')
        }
    })
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err))

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('Todo salió bien')
            }, 2000);
        } else {
            const error = new Error('Algo salió mal')
            reject(error)
        }
    })
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => {console.error(err)})

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results', response)
    })
    .catch(err => {
        console.error(err)
    })
    