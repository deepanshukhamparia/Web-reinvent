import React, { useContext } from 'react'
import { Routes as Router, Route, Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from './services/authService'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp'; // Remove curly braces around SignUp
import Dashboard from './pages/Dashboard';

type Props = {}

const PrivateRoutes = () => {
    const { authenticated } = useContext(AuthContext)

    if (!authenticated) return <Navigate to='/login' replace />

    return <Outlet />
}

const Routes = (props: Props) => {
    const { authenticated } = useContext(AuthContext)


    return (
        <Router>
            <Route path='/login' element={<SignIn />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route element={<PrivateRoutes />}>
                <Route path='/' element={<Dashboard />} />
            </Route>
        </Router>
    )
}

export default Routes