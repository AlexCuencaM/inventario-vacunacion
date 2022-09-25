import { AppRouter } from "./router/AppRouter"

const user = {
    id: 1,
    roleId: 1,
    username: "Admin",
    password: null
}

function App() {
  return (
    <AppRouter/>
  )
}

export default App
