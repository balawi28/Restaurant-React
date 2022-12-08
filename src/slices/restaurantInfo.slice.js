import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const name = 'restaurantInfo';
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, reducers, extraReducers });

export const restaurantInfoActions = { ...slice.actions, ...extraActions };
export const restaurantInfoReducer = slice.reducer;

function createInitialState() {
	return {
		isLoading: false,
		restaurantInfo: [],
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
			return await axios.get('restaurantInfo');
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
				state.isLoading = true;
			},
			[fulfilled]: (state, action) => {
				state.isLoading = false;
				state.restaurantInfo = action.payload.data;
			},
			[rejected]: (state, action) => {
				state.isLoading = false;
			},
		};
	}
}

export default restaurantInfoReducer;
