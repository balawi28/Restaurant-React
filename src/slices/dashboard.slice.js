import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const name = 'dashboard';
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, reducers, extraReducers });

export const dashboardActions = { ...slice.actions, ...extraActions };
export const dashboardReducer = slice.reducer;

function createInitialState() {
	return {
		isLoading: false,
		isAdded: false,
		isFetched: false,
		isRemoved: false,
	};
}

function createReducers() {
	return {};
}

function createExtraActions() {
	return {
		add: add(),
		get: get(),
		remove: remove(),
	};

	function add() {
		return createAsyncThunk(`${name}/add`, async ({ data, path }) => {
			return await axios.post(path, data);
		});
	}

	function get() {
		return createAsyncThunk(`${name}/get`, async ({ path }) => {
			return await axios.get(path);
		});
	}

	function remove() {
		return createAsyncThunk(`${name}/remove`, async ({ path }) => {
			return await axios.delete(path);
		});
	}
}

function createExtraReducers() {
	return {
		...add(),
		...get(),
		...remove(),
	};

	function add() {
		var { pending, fulfilled, rejected } = extraActions.add;
		return {
			[pending]: (state) => {
				state.isLoading = true;
			},
			[fulfilled]: (state, action) => {
				state.isAdded = true;
				state.isLoading = false;
			},
			[rejected]: (state, action) => {
				state.isAdded = false;
				state.isLoading = false;
			},
		};
	}

	function get() {
		var { pending, fulfilled, rejected } = extraActions.get;
		return {
			[pending]: (state) => {
				state.isLoading = true;
			},
			[fulfilled]: (state, action) => {
				state.isFetched = true;
				let stateName = action.payload.config.url.split('/').pop();
				state[stateName] = action.payload.data;
				state.isLoading = false;
			},
			[rejected]: (state, action) => {
				state.isLoading = false;
				state.isFetched = false;
			},
		};
	}

	function remove() {
		var { pending, fulfilled, rejected } = extraActions.remove;
		return {
			[pending]: (state) => {
				state.isLoading = true;
			},
			[fulfilled]: (state, action) => {
				state.isRemoved = true;
				state.isLoading = false;
			},
			[rejected]: (state, action) => {
				state.isLoading = false;
				state.isRemoved = false;
			},
		};
	}
}

export default dashboardReducer;
