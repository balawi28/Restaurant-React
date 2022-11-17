import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { authReducer } from './slices/auth.slice';
import { cartReducer } from './slices/cart.slice';
import { dashboardReducer } from './slices/dashboard.slice';
import { foodReducer } from './slices/food.slice';
import { ingredientReducer } from './slices/ingredient.slice';
import { menuReducer } from './slices/menu.slice';
import { orderReducer } from './slices/order.slice';
import { orderDraftReducer } from './slices/orderDraft.slice';

export * from './slices/auth.slice';
export * from './slices/cart.slice';
export * from './slices/dashboard.slice';
export * from './slices/food.slice';
export * from './slices/menu.slice';
export * from './slices/order.slice';
export * from './slices/orderDraft.slice';

const store = configureStore({
	reducer: {
		auth: authReducer,
		cart: cartReducer,
		dashboard: dashboardReducer,
		food: foodReducer,
		menu: menuReducer,
		order: orderReducer,
		orderDraft: orderDraftReducer,
		ingredient: ingredientReducer,
	},
	middleware: [thunk],
});

export default store;
