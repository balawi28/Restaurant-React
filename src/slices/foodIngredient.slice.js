import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const name = 'foodIngredient';
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, reducers, extraReducers });

export const foodIngredientActions = { ...slice.actions, ...extraActions };
export const foodIngredientReducer = slice.reducer;

function createInitialState() {
	return {
		isLoading: false,
		isAdded: false,
		foodIngredients: [],
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
					id: 1,
					food: {
						name: 'burger',
						basePrice: 11.99,
					},
					ingredient: {
						name: 'tomato',
						kilogramPrice: 5,
					},
					weight: 0.2,
					addable: true,
					positioning: 0,
					imageDirectory: 'tomato.svg',
				},
				{
					id: 2,
					food: {
						name: 'burger',
						basePrice: 11.99,
					},
					ingredient: {
						name: 'lettuce',
						kilogramPrice: 20,
					},
					weight: 0.1,
					addable: true,
					positioning: 0,
					imageDirectory: 'lettuce.svg',
				},
				{
					id: 3,
					food: {
						name: 'burger',
						basePrice: 11.99,
					},
					ingredient: {
						name: 'onion',
						kilogramPrice: 4,
					},
					weight: 0.1,
					addable: true,
					positioning: 0,
					imageDirectory: 'onion.svg',
				},
				{
					id: 4,
					food: {
						name: 'burger',
						basePrice: 11.99,
					},
					ingredient: {
						name: 'mushroom',
						kilogramPrice: 13,
					},
					weight: 0.1,
					addable: true,
					positioning: 0,
					imageDirectory: 'mushroom.svg',
				},
				{
					id: 5,
					food: {
						name: 'burger',
						basePrice: 11.99,
					},
					ingredient: {
						name: 'cheese',
						kilogramPrice: 20,
					},
					weight: 0.2,
					addable: true,
					positioning: 0,
					imageDirectory: 'cheese.svg',
				},
				{
					id: 6,
					food: {
						name: 'burger',
						basePrice: 11.99,
					},
					ingredient: {
						name: 'leaf',
						kilogramPrice: 15,
					},
					weight: 0.1,
					addable: true,
					positioning: 0,
					imageDirectory: 'leaf.svg',
				},
				{
					id: 7,
					food: {
						name: 'burger',
						basePrice: 11.99,
					},
					ingredient: {
						name: 'bread-top',
						kilogramPrice: 3,
					},
					weight: 0.15,
					addable: false,
					positioning: -1,
					imageDirectory: 'burger-bread-top.svg',
				},
				{
					id: 8,
					food: {
						name: 'burger',
						basePrice: 11.99,
					},
					ingredient: {
						name: 'beef',
						kilogramPrice: 65,
					},
					weight: 0.2,
					addable: true,
					positioning: 1,
					imageDirectory: 'burger-beef.svg',
				},
				{
					id: 9,
					food: {
						name: 'burger',
						basePrice: 11.99,
					},
					ingredient: {
						name: 'bread-bottom',
						kilogramPrice: 3,
					},
					weight: 0.15,
					addable: false,
					positioning: 2,
					imageDirectory: 'burger-bread-bottom.svg',
				},
				{
					id: 10,
					food: {
						name: 'hotdog',
						basePrice: 3.99,
					},
					ingredient: {
						name: 'lettuce',
						kilogramPrice: 20,
					},
					weight: 0.1,
					addable: true,
					positioning: 0,
					imageDirectory: 'lettuce.svg',
				},
				{
					id: 11,
					food: {
						name: 'hotdog',
						basePrice: 3.99,
					},
					ingredient: {
						name: 'cheese',
						kilogramPrice: 20,
					},
					weight: 0.2,
					addable: true,
					positioning: 0,
					imageDirectory: 'cheese.svg',
				},
				{
					id: 12,
					food: {
						name: 'hotdog',
						basePrice: 3.99,
					},
					ingredient: {
						name: 'sausage',
						kilogramPrice: 12,
					},
					weight: 0.1,
					addable: true,
					positioning: 1,
					imageDirectory: 'sausage.png',
				},
				{
					id: 13,
					food: {
						name: 'hotdog',
						basePrice: 3.99,
					},
					ingredient: {
						name: 'bread',
						kilogramPrice: 6,
					},
					weight: 0.15,
					addable: false,
					positioning: 2,
					imageDirectory: 'hotdog-bread.png',
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
				state.foodIngredients = action.payload;
			},
			[rejected]: (state, action) => {
				state.isAdded = false;
				state.isLoading = false;
			},
		};
	}
}

export default foodIngredientReducer;
