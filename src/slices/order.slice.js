import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const name = 'order';
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, reducers, extraReducers });

export const orderActions = { ...slice.actions, ...extraActions };
export const orderReducer = slice.reducer;

function createInitialState() {
	return {
		isLoading: false,
		isAdded: false,
		orders: [],
	};
}

function createReducers() {
	return {};
}

function createExtraActions() {
	return {
		get: get(),
		cancel: cancel(),
	};

	function get() {
		return createAsyncThunk(`${name}/get`, async () => {
			return await axios.get(name);
		});
	}

	function cancel() {
		return createAsyncThunk(
			`${name}/cancel`,
			async (id, { rejectWithValue }) => {
				try {
					return await axios.put(`order/${id}`);
				} catch (err) {
					return rejectWithValue(err.response.data);
				}
			}
		);
	}
}

function createExtraReducers() {
	return {
		...get(),
		...cancel(),
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
				state.orders = action.payload.data;
			},
			[rejected]: (state, action) => {
				state.isAdded = false;
				state.isLoading = false;
			},
		};
	}

	function cancel() {
		var { pending, fulfilled, rejected } = extraActions.cancel;
		return {
			[pending]: (state) => {
				state.isLoading = true;
			},
			[fulfilled]: (state, action) => {
				state.isLoading = false;
			},
			[rejected]: (state, action) => {
				state.isLoading = false;
				alert(action.payload.error);
			},
		};
	}
}

export default orderReducer;
