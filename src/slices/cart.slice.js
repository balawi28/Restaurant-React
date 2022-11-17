import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { clamp } from 'lodash';

const name = 'cart';
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, reducers, extraReducers });

export const cartActions = { ...slice.actions, ...extraActions };
export const cartReducer = slice.reducer;

function createInitialState() {
	return {
		min: 1,
		max: 99,
		count: 0,
		cart: [],
	};
}

function createReducers() {
	return {
		increment,
		add,
		remove,
		incrementQuantity,
		decrementQuantity,
		changeQuantity,
	};

	function increment(state) {
		state.count += 1;
	}

	function add(state, { payload }) {
		state.cart = [...state.cart, payload];
		state.count += 1;
	}

	function remove(state, { payload }) {
		let cartCopy = [...state.cart]; // make a separate copy of the array
		cartCopy.splice(payload, 1);
		state.cart = cartCopy;
		state.count += -1;
	}

	function incrementQuantity(state, { payload }) {
		state.cart[payload].quantity = clamp(
			state.cart[payload].quantity + 1,
			state.min,
			state.max
		);
	}

	function decrementQuantity(state, { payload }) {
		state.cart[payload].quantity = clamp(
			state.cart[payload].quantity - 1,
			state.min,
			state.max
		);
	}

	function changeQuantity(state, { payload }) {
		console.log(payload);
		state.cart[payload.id].quantity = clamp(
			payload.quantity,
			state.min,
			state.max
		);
	}
}

function createExtraActions() {
	return {
		getcart: getcart(),
		postCart: postCart(),
	};

	function getcart() {
		return createAsyncThunk(`${name}/getcart`, async () => {
			return await axios.get('cartItem');
		});
	}

	function postCart() {
		return createAsyncThunk(`${name}/postCart`, async (orderItems) => {
			await axios.post('order', {
				username: localStorage.getItem('username'),
				orderItems,
			});
		});
	}
}

function createExtraReducers() {
	return {
		...getcart(),
		...postCart(),
	};

	function getcart() {
		var { pending, fulfilled, rejected } = extraActions.getcart;
		return {
			[pending]: (state) => {
				state.isLoading = true;
			},
			[fulfilled]: (state, action) => {
				state.isLoading = false;
				state.iscartRetrieved = true;
				let cart = action.payload.data;
				cart.filter((item) => item.visible);
				state.cart = cart;
			},
			[rejected]: (state, action) => {
				state.isLoading = false;
				state.iscartRetrieved = false;
			},
		};
	}

	function postCart() {
		var { pending, fulfilled, rejected } = extraActions.postCart;
		return {
			[pending]: (state) => {},
			[fulfilled]: (state, action) => {},
			[rejected]: (state, action) => {},
		};
	}
}

export default cartReducer;
