import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginView } from '../auth';
import { AdminRoutes } from '../vacunacion/routes/AdminRoutes';
export const AppRouter = () => {
  return (
    <Routes>
        <Route path="login" element={<LoginView />} />
        <Route path="admin/employes/*" element={ <AdminRoutes />} />
        <Route path="/" element={<Navigate to="login" />} />
    </Routes>
  )
}