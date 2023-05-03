import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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
			return [
				{
					label: 'about us',
					data: 'We are the best restaurant in the whole world',
					iconFilename: 'about.svg',
				},
				{
					label: 'email',
					data: 'mosab@gmail.com',
					iconFilename: 'email.svg',
				},
				{
					label: 'location',
					data: 'Al-masyon, Ramallah, PO Box 23253',
					iconFilename: 'location.svg',
				},
				{
					label: 'phone',
					data: '+972-596-813-4721',
					iconFilename: 'phone.svg',
				},
			];
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
				state.restaurantInfo = action.payload;
			},
			[rejected]: (state, action) => {
				state.isLoading = false;
			},
		};
	}
}

export default restaurantInfoReducer;
