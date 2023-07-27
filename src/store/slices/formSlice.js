import { createSlice } from '@reduxjs/toolkit';
import { addCar } from './carsSlice';

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
	},
	extraReducers(builder) {
		builder.addCase(addCar, (state, action) => {
			state.name = '';
			state.cost = 0;
		});
	}
});

export const { changeCost, changeName } = formSlice.actions;
export const formReducer = formSlice.reducer;
