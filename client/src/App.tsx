import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./components/RequireAuth";
import { Layout } from "./components/Layout";
import { Unauthorized } from "./pages/Unauthorized";
import { Missing } from "./pages/Missing";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
