import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Carrinho } from "./pages/Carrinho"
import { Produto } from "./pages/Produto"
import { Contato } from "./pages/Contato"
import { ListaContatos } from "./pages/ListaContatos"
import { DetalhesContato } from "./pages/DetalhesContato"

export const Rotas = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />
        <Route
          path="/carrinho"
          element={<Carrinho />}
        />
        <Route
          path="/produto/"
          element={<Produto />}
        />
        <Route
          path="/produto/:id"
          element={<Produto />}
        />
        <Route
          path="/Contato"
          element={<Contato />}
        />
        <Route
        path="/ListaContatos"
        element={<ListaContatos />}
        />
        <Route
          path="/DetalhesContato/:id"
          element={<DetalhesContato />}
        />
      </Routes>
    </BrowserRouter>
    </>
  )
}
