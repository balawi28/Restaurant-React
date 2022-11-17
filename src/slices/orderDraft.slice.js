import { createSlice } from '@reduxjs/toolkit';
import { clamp } from 'lodash';

const name = 'orderDraft';
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, reducers, extraReducers });

export const orderDraftActions = { ...slice.actions, ...extraActions };
export const orderDraftReducer = slice.reducer;

function createInitialState() {
	return {
		min: 1,
		max: 99,
		burger: { ingredients: [], orderTotal: 0, quantity: 1, basePrice: 0 },
	};
}

function createReducers() {
	return {
		add,
		remove,
		changeQuantity,
		incrementQuantity,
		decrementQuantity,
		setBasePrice,
	};

	function add(state, { payload }) {
		// Increment the order total
		state[payload.food].orderTotal += payload.price;

		// Check if the ingredient exists
		for (let ingredient of state[payload.food].ingredients)
			if (ingredient.name === payload.name) {
				ingredient.quantity += 1;
				return;
			}

		// Add the ingredient it if it doesn't exist
		state[payload.food].ingredients = [
			...state[payload.food].ingredients,
			{ name: payload.name, quantity: 1 },
		];
	}

	function remove(state, { payload }) {
		state[payload.food].orderTotal -= payload.price;

		for (let ingredient of state[payload.food].ingredients)
			if (ingredient.name === payload.name) ingredient.quantity -= 1;
	}

	function changeQuantity(state, { payload }) {
		state[payload.food].quantity = clamp(
			payload.quantity,
			state.min,
			state.max
		);
	}

	function incrementQuantity(state, { payload }) {
		state[payload.food].quantity = clamp(
			state[payload.food].quantity + 1,
			state.min,
			state.max
		);
	}

	function decrementQuantity(state, { payload }) {
		state[payload.food].quantity = clamp(
			state[payload.food].quantity - 1,
			state.min,
			state.max
		);
	}

	function setBasePrice(state, { payload }) {
		state[payload.name].basePrice = payload.basePrice;
	}

	function initialize(state, { payload }) {
		state[payload.name].basePrice = payload.basePrice;
	}
}

function createExtraActions() {
	return {};
}

function createExtraReducers() {
	return {};
}

export default orderDraftReducer;
