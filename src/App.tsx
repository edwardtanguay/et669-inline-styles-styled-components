import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { PageWelcome } from "./pages/PageWelcome.tsx";
import { PageInfo } from "./pages/PageInfo.tsx";
import { PageAbout } from "./pages/PageAbout.tsx";

function App() {
	return (
		<>
			<Header />
			<main className="py-4">
				<Routes>
					<Route path="/welcome" element={<PageWelcome />} />
					<Route path="/info" element={<PageInfo />} />
					<Route path="/about" element={<PageAbout />} />
					<Route index element={<Navigate to="/welcome" replace />}/>	
				</Routes>
			</main>
		</>
	);
}

export default App;
