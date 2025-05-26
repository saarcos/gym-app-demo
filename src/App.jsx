import { Route, Routes } from "react-router-dom"
import Hero from "./components/Hero"
import Login from "./pages/Login"
import Register from "./pages/Register"
import CommonLayout from "./components/layouts/CommonLayout"
import WorkoutGenerator from "./pages/WorkoutGenerator"
import ProtectedRoute from "./components/routing/ProtectedRoute"
import { useAuth } from "./hooks/useAuth"
import { Cog } from "lucide-react"
import PublicRoute from "./components/routing/PublicRoute"
import MyRoutines from "./pages/MyRoutines"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Training from "./pages/Training"

function App() {
  const { loading } = useAuth();
  const queryClient = new QueryClient();
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-muted-foreground bg-gradient-to-r from-black via-slate-900 to-blue-600">
        <Cog className="w-20 h-20 animate-spin opacity-50 mb-2 text-white" />
        <p className="text-sm text-white">Cargando...</p>
      </div>
    );
  }
  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-h-screen flex flex-col bg-gradient-to-r from-black via-slate-900 to-blue-600 text-white text-sm sm:text-base">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route element={<CommonLayout />}>
            <Route path="/generator" element={
              <ProtectedRoute>
                <WorkoutGenerator />
              </ProtectedRoute>
            } />
            <Route path="/myroutines" element={
              <ProtectedRoute>
                <MyRoutines />
              </ProtectedRoute>
            } />
            <Route path="/training/:routineId/:trainingSessionId" element={
              <ProtectedRoute>
                <Training />
              </ProtectedRoute>
            } />
          </Route>
        </Routes>
      </main>
    </QueryClientProvider>
  )
}

export default App
