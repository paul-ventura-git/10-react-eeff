import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";

import Layout from        "./views/pages/Layout";
import Home from          "./views/pages/Home";
import LibroDiario from       "./views/pages/LibroDiario";
import ProductView from   "./views/pages/ProductView";
import CrudUser from      "./views/pages/CrudUser";
import CrudProduct from   "./views/pages/CrudProduct";
import NoPage from        "./views/pages/NoPage";
import Login from         "./views/pages/Login";

import { useLoginContext } from './context/LoginContext';

/**
 * Wrapper component for ROUTES THAT ARE VISIBLE ONLY FOR LOGGED IN USERS.
 * @param {*} param0 
 * @returns 
 */
const LoggedInRoute = ({
  isLoggedIn,
  redirectPath = '/login',
  children,
}) => {
  if(!isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
}

/**
 * Wrapper component for ROUTES THAT ARE VISIBLE ONLY FOR ALLOWED USERS.
 * @param {*} param0 
 * @returns 
 */
const ProtectedRoute = ({
  isAllowed,
  redirectPath = '/home',
  children,
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};

function App() {
  const { user } = useLoginContext();
  return (
    <div className="App">      
        <BrowserRouter>        
          <Routes>          
            <Route path="login" element={<Login />} />
            <Route element={<LoggedInRoute isLoggedIn={user.username} />}>
              <Route path="/" element={<Layout/>}>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route element={<ProtectedRoute isAllowed={user.username} />}>
                  <Route path="librodiario" element={<LibroDiario />} />
                  <Route path="productview" element={<ProductView />} />
                </Route>
                <Route 
                  path="cruduser" 
                  element={
                    <ProtectedRoute
                      redirectPath="/home"
                      isAllowed={user.username && user.permissions.includes('editor')}
                    >
                      <CrudUser />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="crudproduct" 
                  element={
                    <ProtectedRoute
                      redirectPath="/home"
                      isAllowed={user.username && user.permissions.includes('editor')}
                    >
                      <CrudProduct />
                    </ProtectedRoute>
                  } 
                />            
                <Route path="*" element={<NoPage />} />
              </Route> 
            </Route>

          </Routes>
        </BrowserRouter>      
    </div>
  );
}

export default App;
