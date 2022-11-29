import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const name = 'menu';
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, reducers, extraReducers });

export const menuActions = { ...slice.actions, ...extraActions };
export const menuReducer = slice.reducer;

function createInitialState() {
	return {
		isLoading: false,
		isAdded: false,
		foods: [],
		menus: [],
		menuItems: [],
	};
}

function createReducers() {
	return {};
}

function createExtraActions() {
	return {
		getMenus: getMenus(),
		getFoods: getFoods(),
	};

	function getMenus() {
		return createAsyncThunk(`${name}/getMenus`, async () => {
			return await axios.get('menu');
		});
	}

	function getFoods() {
		return createAsyncThunk(`${name}/getFoods`, async () => {
			return await axios.get('availableFood');
		});
	}
}

function createExtraReducers() {
	return {
		...getMenus(),
		...getFoods(),
	};

	function getMenus() {
		var { pending, fulfilled, rejected } = extraActions.getMenus;
		return {
			[pending]: (state) => {
				state.isLoading = true;
			},
			[fulfilled]: (state, action) => {
				state.isLoading = false;
				state.isAdded = true;
				state.menus = action.payload.data;
			},
			[rejected]: (state, action) => {
				state.isLoading = false;
				state.isAdded = false;
			},
		};
	}

	function getFoods() {
		var { pending, fulfilled, rejected } = extraActions.getFoods;
		return {
			[pending]: (state) => {
				state.isLoading = true;
			},
			[fulfilled]: (state, action) => {
				state.isLoading = false;
				state.isAdded = true;
				state.foods = action.payload.data;
			},
			[rejected]: (state, action) => {
				state.isLoading = false;
				state.isAdded = false;
			},
		};
	}
}

export default menuReducer;
