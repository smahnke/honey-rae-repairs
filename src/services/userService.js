export const getNonStaffUsers = () => {
    return fetch("http://localhost:8088/users?staff=false")
        .then(res => res.json())
}