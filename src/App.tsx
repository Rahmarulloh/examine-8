import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Pages
import Layout from "./layout/layout";
import Auth from "./pages/authentication";
import Game from "./pages/game";
import Player1 from "./components/player1";
import Player2 from "./components/player2";
import Home from "./pages/home";

function onLogin(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const target = event.target as typeof event.target & {
    username: { value: string };
    password: { value: string };
  };
  const username = target.username.value;
  const password = target.password.value;

  return { username, password };
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/player1" element={<Player1 />} />
      <Route path="/player2" element={<Player2 onLogin={onLogin} />} />
      <Route path="/game" element={<Game />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
