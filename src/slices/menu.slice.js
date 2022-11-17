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
		menus: [],
		menuItems: [],
	};
}

function createReducers() {
	return {
		logout,
	};

	function logout(state) {
		state.isLoggedIn = false;
		localStorage.removeItem('JWT');
	}
}

function createExtraActions() {
	return {
		getMenus: getMenus(),
	};

	function getMenus() {
		return createAsyncThunk(`${name}/getMenus`, async () => {
			return await axios.get('menu');
		});
	}
}

function createExtraReducers() {
	return {
		...getMenus(),
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
}

export default menuReducer;
