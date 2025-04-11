import { Toaster } from "sonner";
import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes";

function App() {

  return (
    <AuthProvider>
      <AppRoutes/>
      <Toaster richColors={true} visibleToasts={2} />
    </AuthProvider>
  )
}

export default App
