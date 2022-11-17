import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const name = 'ingredient';
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, reducers, extraReducers });

export const ingredientActions = { ...slice.actions, ...extraActions };
export const ingredientReducer = slice.reducer;

function createInitialState() {
	return {
		isLoading: false,
		isAdded: false,
		ingredients: [],
	};
}

function createReducers() {
	return {};
}

function createExtraActions() {
	return {
		get: get(),
	};

	function get() {
		return createAsyncThunk(`${name}/get`, async () => {
			return await axios.get(name);
		});
	}
}

function createExtraReducers() {
	return {
		...get(),
	};

	function get() {
		var { pending, fulfilled, rejected } = extraActions.get;
		return {
			[pending]: (state) => {
				state.isAdded = false;
				state.isLoading = true;
			},
			[fulfilled]: (state, action) => {
				state.isAdded = true;
				state.isLoading = false;
				state.ingredients = action.payload.data;
			},
			[rejected]: (state, action) => {
				state.isAdded = false;
				state.isLoading = false;
			},
		};
	}
}

export default ingredientReducer;
