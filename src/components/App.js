import { BrowserRouter, Routes, Route } from "react-router-dom"

import { ResetStyle } from "../css/reset"
import { GlobalStyle } from "../css/style"

import Container from '../components/generics/Container'
import Login from "./pages/Index/Login"
import Register from "./pages/Index/Register"

export default function App() {
	return (
		<>
			<ResetStyle />
			<GlobalStyle />
			<Container >
				<BrowserRouter >
					<Routes >
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
					</Routes>
				</BrowserRouter>
			</Container>
		</>
	)
}