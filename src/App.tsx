import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { PageAbout } from "./pages/PageAbout.tsx";
import { PageInlineStyles } from "./pages/PageInlineStyles.tsx";
import { PageStyledComponents } from "./pages/PageStyledComponents.tsx";

function App() {
	return (
		<>
			<Header />
			<main className="py-4">
				<Routes>
					<Route path="/inline-styles" element={<PageInlineStyles />} />
					<Route path="/styled-components" element={<PageStyledComponents />} />
					<Route path="/about" element={<PageAbout />} />
					<Route index element={<Navigate to="/inline-styles" replace />}/>	
				</Routes>
			</main>
		</>
	);
}

export default App;
