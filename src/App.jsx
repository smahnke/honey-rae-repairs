import { CustomerList } from "./components/Customers/CustomerList.jsx"
import { TicketList } from "./components/Tickets/TicketList.jsx"
import { EmployeeList } from "./components/Employees/EmployeeList.jsx"
import {Routes, Outlet, Route } from "react-router-dom"
import { NavBar } from "./components/Nav/NavBar.jsx"
import { Welcome } from "./components/Welcome/Welcome.jsx"
import { CustomerDetails } from "./components/Customers/CustomerDetails.jsx"

export const App = () => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <>
            <NavBar/>
            <Outlet/>
          </>
        }
      >
        <Route index element={<Welcome />}/>
        <Route path="tickets" element={<TicketList/>}/>
        <Route path="employees" element={<EmployeeList/>} />
        <Route path="customers">
          <Route index element={<CustomerList/>} />
          <Route path=":customerId" element={<CustomerDetails />} />
        </Route>
      </Route>
    </Routes>
  )
}

// export const App = () => {
//   return <div className="welcome">Welcome to your first React Application!</div>
// }
