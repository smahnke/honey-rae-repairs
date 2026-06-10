export const getNonStaffUsers = () => {
    return fetch("http://localhost:8088/users?staff=false")
        .then(res => res.json())
}

export const getStaffUsers = () => {
    return fetch("http://localhost:8088/users?staff=true")
        .then(res => res.json())
}