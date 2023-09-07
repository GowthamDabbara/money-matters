import ProtectedRoute from "./Components/ProtectedRoute";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import { Routes, Route } from "react-router-dom";
import React, { useRef, createContext, useContext } from "react";
import Userstore from "./Stores/Userstore";

export const UserContext = createContext<Userstore | null>(null);

function App() {
	const userStore: Userstore | null = new Userstore();
	console.log("inside app");
	return (
		<UserContext.Provider value={userStore}>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<ProtectedRoute />}>
					<Route path="/" element={<Dashboard />} />
					{/* <Route exact path="/temp" element={<Dashboard />} /> */}
					{/* <Route exact path="/login" element={<Login />} />
				<Route exact path="/" element={<Home />} />
				<Route exact path="/books" element={<BookShelf />} />
				<Route exact path="/books/:id" element={<BookDetails />} /> */}
				</Route>
				{/* <Route exact path="/login" element={<Login />} />
			<Route exact path="/" element={<Home />} />
			<Route exact path="/books" element={<BookShelf />} />
			<Route exact path="/books/:id" element={<BookDetails />} /> */}
			</Routes>
		</UserContext.Provider>
	);
}

export default App;
