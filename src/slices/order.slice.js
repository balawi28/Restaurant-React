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
		orders: [],
	};
}

function createReducers() {
	return {};
}

function createExtraActions() {
	return {
		add: add(),
	};

	function add() {
		return createAsyncThunk(`${name}/add`, async (orderItems) => {
			await axios.post('order', {
				username: localStorage.getItem('username'),
				orderItems,
			});
		});
	}
}

function createExtraReducers() {
	return {
		...add(),
	};

	function add() {
		var { pending, fulfilled, rejected } = extraActions.add;
		return {
			[pending]: (state) => {},
			[fulfilled]: (state, action) => {},
			[rejected]: (state, action) => {},
		};
	}
}

export default orderReducer;
