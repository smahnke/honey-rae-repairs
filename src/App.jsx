import { CustomerList } from "./components/Customers/CustomerList.jsx"
import { TicketList } from "./components/Tickets/TicketList.jsx"
import { EmployeeList } from "./components/Employees/EmployeeList.jsx"
import {Routes} from "react-router-dom"
import { NavBar } from "./components/Nav/NavBar.jsx"

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
        <Route path="tickets" element={<TicketList/>}/>
        <Route path="customers" element={<CustomerList/>} />
      </Route>
    </Routes>
  )
}

// export const App = () => {
//   return <div className="welcome">Welcome to your first React Application!</div>
// }
