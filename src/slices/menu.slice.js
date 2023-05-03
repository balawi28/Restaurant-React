import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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
			return [
				{
					id: 1,
					title: 'halloween',
					visible: true,
					menuItems: [
						{
							id: 1,
							menu: 1,
							food: 'burger',
							title: 'scary burger',
							basePrice: 9,
							visible: true,
						},
						{
							id: 4,
							menu: 1,
							food: 'hotdog',
							title: 'scary hotdog',
							basePrice: 16,
							visible: true,
						},
						{
							id: 2,
							menu: 1,
							food: 'pizza',
							title: 'scary pizza',
							basePrice: 16,
							visible: true,
						},
					],
				},
			];
		});
	}

	function getFoods() {
		return createAsyncThunk(`${name}/getFoods`, async () => {
			return [
				{
					name: 'burger',
					basePrice: 11.99,
				},
				{
					name: 'hotdog',
					basePrice: 3.99,
				},
				{
					name: 'pizza',
					basePrice: 24.99,
				},
			];
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
				state.menus = action.payload;
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
				state.foods = action.payload;
			},
			[rejected]: (state, action) => {
				state.isLoading = false;
				state.isAdded = false;
			},
		};
	}
}

export default menuReducer;
