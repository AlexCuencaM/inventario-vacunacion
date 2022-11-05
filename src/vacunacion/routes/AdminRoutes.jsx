import { Navigate, Route, Routes } from 'react-router-dom';
import UserAdapter from '../../domain/Users/UserAdapter';
import Navbar from '../../ui/Navbar';
import { EmployesView } from '../pages/EmployesView';
import { NewEmployedView } from '../pages/NewEmployedView';
const userFromDB = {
    id: 1,
    roleId: 1,
    username: "Admin",
    password: null
}

const user = new UserAdapter().createFromDB(userFromDB);
export const AdminRoutes = () => {
  return (
        <Navbar user={user}>
            <Routes>
                <Route path="all" element={<EmployesView />} />
                <Route path="create" element={<NewEmployedView />} />
                <Route path="/" element={<Navigate to="all" />} />
            </Routes>
        </Navbar>
  )
}