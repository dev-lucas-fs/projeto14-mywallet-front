import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import AuthProvider from "../../Context/AuthContext";
import SignIn from "../../Pages/Auth/SignIn";
import SignUp from "../../Pages/Auth/SignUp";
import Home from "../../Pages/Home";
import Deposit from "../../Pages/Home/Cashflow/Deposit";
import Outflow from "../../Pages/Home/Cashflow/Outflow";
import ProtectedRoute from "../../Utils/ProtectedRoute";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f3f3f3;
`;

export default function App() {
  return (
    <AuthProvider>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/outflow" element={<Outflow />} />
              <Route path="/deposit" element={<Deposit />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </AuthProvider>
  );
}
