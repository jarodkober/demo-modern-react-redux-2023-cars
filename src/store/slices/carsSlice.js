import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
	name: 'cars',
	initialState: {
		data: [],
		searchTerm: ''
	},
	reducers: {
		addCar(state, action) {
			state.data.push({
				cost: action.payload.cost,
				id: nanoid(),
				name: action.payload.name
			});
		},
		changeSearchTerm(state, action) {
			state.searchTerm = action.payload;
		},
		removeCar(state, action) {
			const updated = state.data.filter((car) => {
				return car.id !== action.payload;
			});
			state.data = updated;
		}
	}
});

export const { addCar, changeSearchTerm, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
