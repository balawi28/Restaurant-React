import _ from 'lodash';
import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Cart from './components/Cart/Cart';
import Dashboard from './components/Dashboard/Dashboard';
import EmptyPage from './components/EmptyPage/EmptyPage';
import FoodPage from './components/FoodPage/FoodPage';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Orders from './components/Orders/Orders';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Signup from './components/Signup/Signup';
import { ReactComponent as WarningIcon } from './icons/warning.svg';
import { ingredientActions } from './slices/ingredient.slice';
import {
	dashboardActions,
	foodActions,
	foodIngredientActions,
	menuActions,
	orderActions,
	orderDraftActions,
} from './store';

export default function App() {
	// Fetch all required data (async calls).
	const dispatch = useDispatch();
	const { foods } = useSelector((state) => state.food);
	const { isLoggedIn } = useSelector((state) => state.auth);

	useLayoutEffect(() => {
		dispatch(ingredientActions.get());
		dispatch(menuActions.getMenus());
		dispatch(foodActions.get());
		dispatch(foodIngredientActions.get());
		dispatch(dashboardActions.get({ path: 'menu' }));
		dispatch(dashboardActions.get({ path: 'food' }));
		dispatch(orderActions.get());
	}, [dispatch]);

	useLayoutEffect(() => {
		dispatch(orderDraftActions.initializeFoods(foods));
	}, [dispatch, foods]);

	return (
		<BrowserRouter>
			<div className='App'>
				<div className='App-Container'>
					<Navbar />
					<Routes>
						<Route path='' exact element={<Home />} />
						<Route path='login' exact element={<Login />} />
						<Route path='signup' exact element={<Signup />} />
						<Route path='orders' exact element={<Orders />} />
						<Route path='cart' exact element={<Cart />} />
						<Route
							path='dashboard'
							exact
							element={
								<ProtectedRoute condition={isLoggedIn}>
									<Dashboard />
								</ProtectedRoute>
							}
						/>
						{_.map(foods, (food) => (
							<Route
								path={food.name}
								exact
								element={<FoodPage foodName={food.name} />}
								key={food.name}
							/>
						))}
						<Route
							path='*'
							element={
								<EmptyPage
									title={`404`}
									buttonText='Go back to safety'
									Icon={WarningIcon}
									navigateURL={'/'}
								/>
							}
						/>
					</Routes>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}
