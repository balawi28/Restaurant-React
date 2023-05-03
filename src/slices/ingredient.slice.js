import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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
			return [
				{
					name: 'beef',
					kilogramPrice: 65,
				},
				{
					name: 'bread',
					kilogramPrice: 6,
				},
				{
					name: 'bread-bottom',
					kilogramPrice: 3,
				},
				{
					name: 'bread-top',
					kilogramPrice: 3,
				},
				{
					name: 'cheese',
					kilogramPrice: 20,
				},
				{
					name: 'leaf',
					kilogramPrice: 15,
				},
				{
					name: 'lettuce',
					kilogramPrice: 20,
				},
				{
					name: 'mushroom',
					kilogramPrice: 13,
				},
				{
					name: 'onion',
					kilogramPrice: 4,
				},
				{
					name: 'sausage',
					kilogramPrice: 12,
				},
				{
					name: 'tomato',
					kilogramPrice: 5,
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
				state.isAdded = false;
				state.isLoading = true;
			},
			[fulfilled]: (state, action) => {
				state.isAdded = true;
				state.isLoading = false;
				state.ingredients = action.payload;
			},
			[rejected]: (state, action) => {
				state.isAdded = false;
				state.isLoading = false;
			},
		};
	}
}

export default ingredientReducer;
