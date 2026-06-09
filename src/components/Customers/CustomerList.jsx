import {useEffect, useState} from "react"
import { getNonStaffUsers } from "../../services/userService"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getNonStaffUsers().then((customerArray) => {
            setCustomers(customerArray)
        })
    }, [])

    return (
        <div className="customers">
            {customers.map((customerObj) => {
                return (
                    <div key={customerObj.id}>
                        <div>
                            <div>Name</div>
                            <div>{customerObj.fullName}</div>
                        </div>
                        <div>
                            <div>Email</div>
                            <div>{customerObj.email}</div>
                        </div>
                    </div>
                )
            })}
    </div>
)}