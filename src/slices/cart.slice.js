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
		cartTotal: 0,
		cart: [],
		anonymousUser: { name: '', address: '', mobile: '' },
	};
}

function createReducers() {
	return {
		add,
		remove,
		incrementQuantity,
		decrementQuantity,
		changeQuantity,
		setAnonymousUser,
	};

	function add(state, { payload }) {
		state.cart = [...state.cart, payload];
		state.cartTotal += payload.orderTotal * payload.quantity;
	}

	function remove(state, { payload }) {
		let cartCopy = [...state.cart];
		let removedElement = cartCopy.splice(payload, 1);
		state.cart = cartCopy;
		state.cartTotal -=
			removedElement[0].orderTotal * removedElement[0].quantity;
	}

	function incrementQuantity(state, { payload }) {
		let newQuantity = clamp(
			state.cart[payload].quantity + 1,
			state.min,
			state.max
		);

		if (newQuantity !== state.cart[payload].quantity)
			state.cartTotal += state.cart[payload].orderTotal;

		state.cart[payload].quantity = newQuantity;
	}

	function decrementQuantity(state, { payload }) {
		let newQuantity = clamp(
			state.cart[payload].quantity - 1,
			state.min,
			state.max
		);

		if (newQuantity !== state.cart[payload].quantity)
			state.cartTotal -= state.cart[payload].orderTotal;

		state.cart[payload].quantity = newQuantity;
	}

	function changeQuantity(state, { payload }) {
		let newQuantity = clamp(payload.quantity, state.min, state.max);
		if (newQuantity !== state.cart[payload.id].quantity)
			state.cartTotal +=
				state.cart[payload.id].orderTotal *
				(newQuantity - state.cart[payload.id].quantity);

		state.cart[payload.id].quantity = newQuantity;
	}

	function setAnonymousUser(state, { payload }) {
		state.anonymousUser = {
			...state.anonymousUser,
			[payload.property]: payload.value,
		};
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
		return createAsyncThunk(
			`${name}/postCart`,
			async ({ cart, anonymousUser }, { rejectWithValue }) => {
				try {
					return await axios.post('order', {
						shippingInfo: anonymousUser,
						orderItems: cart,
					});
				} catch (err) {
					return rejectWithValue(err.response.data);
				}
			}
		);
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
			[fulfilled]: (state, action) => {
				alert(action.payload);
			},
			[rejected]: (state, action) => {
				alert(action.payload.errors);
			},
		};
	}
}

export default cartReducer;
