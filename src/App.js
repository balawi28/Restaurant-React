import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import FoodPage from './components/FoodPage/FoodPage';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Orders from './components/Orders/Orders';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { ingredientActions } from './slices/ingredient.slice';
// import Signup from './components/Signup/Signup';
import Cart from './components/Cart/Cart';
import { dashboardActions, foodActions, menuActions } from './store';
export default function App() {
	// Fetch all required data (async calls).
	const dispatch = useDispatch();
	const foodMenu = useSelector((state) => state.food.foods);
	const { isLoggedIn } = useSelector((state) => state.auth);

	useLayoutEffect(() => {
		dispatch(ingredientActions.get());
		dispatch(foodActions.get());
		dispatch(menuActions.getMenus());
		dispatch(
			dashboardActions.get({
				path: 'menu',
			})
		);
		dispatch(
			dashboardActions.get({
				path: 'food',
			})
		);
	}, [dispatch]);

	return (
		<BrowserRouter>
			<div className='App'>
				<div className='App-Container'>
					<Navbar />
					<Routes>
						<Route path='/' exact element={<Home />} />
						<Route path='/login' exact element={<Login />} />
						{/* <Route path='/signup' exact element={<Signup />} /> */}
						<Route path='/orders' exact element={<Orders />} />
						<Route path='/cart' exact element={<Cart />} />
						<Route
							path='/dashboard'
							exact
							element={
								<ProtectedRoute condition={isLoggedIn}>
									<Dashboard />
								</ProtectedRoute>
							}
						/>
						{foodMenu.map((food) => (
							<Route
								path={'/' + food.name}
								exact
								element={<FoodPage food={food.name} />}
								key={food.name}
							/>
						))}
					</Routes>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}
