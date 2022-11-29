import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const name = 'auth';
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, reducers, extraReducers });

export const authActions = { ...slice.actions, ...extraActions };
export const authReducer = slice.reducer;

function createInitialState() {
	return {
		isLoading: false,
		isLoggedIn: false,
		username: localStorage.getItem('username'),
	};
}

function createReducers() {
	return {
		logout,
	};

	function logout(state) {
		state.isLoggedIn = false;
		localStorage.removeItem('JWT');
		localStorage.removeItem('username');
		//axios.defaults.headers.common['Authorization'] = undefined;
	}
}

function createExtraActions() {
	return {
		login: login(),
	};

	function login() {
		return createAsyncThunk(
			`${name}/login`,
			async ({ username, password }) => {
				return {
					response: await axios.post('login', { username, password }),
					username,
				};
			}
		);
	}
}

function createExtraReducers() {
	return {
		...login(),
	};

	function login() {
		var { pending, fulfilled, rejected } = extraActions.login;
		return {
			[pending]: (state) => {
				state.isLoading = true;
			},
			[fulfilled]: (state, { payload }) => {
				state.isLoading = false;
				state.isLoggedIn = true;
				let token = payload.response.headers.authorization;
				localStorage.setItem('JWT', token);
				localStorage.setItem('username', payload.username);
			},
			[rejected]: (state) => {
				state.isLoading = false;
			},
		};
	}
}

export default authReducer;
