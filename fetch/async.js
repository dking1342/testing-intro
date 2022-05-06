import axios from "axios"

const fetchUser = () => {
    return axios
        .get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => "error")
}

export {
    fetchUser
}