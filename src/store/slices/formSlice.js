import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
	name: 'form',
	initialState: {
		cost: 0,
		name: ''
	},
	reducers: {
		changeCost(state, action) {
			state.cost = action.payload;
		},
		changeName(state, action) {
			state.name = action.payload;
		}
	}
});

export const { changeCost, changeName } = formSlice.actions;
export const formReducer = formSlice.reducer;
