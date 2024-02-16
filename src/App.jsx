import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SignIn from "./pages/SignIn"
import Callback from "./pages/Callback"
import Layout from "./layout/Layout"


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/callback" element={<Callback />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
