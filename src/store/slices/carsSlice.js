import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
	name: 'cars',
	initialState: {
		cars: [],
		searchTerm: ''
	},
	reducers: {
		addCar(state, action) {
			state.cars.push({
				cost: action.payload.cost,
				id: nanoid(),
				name: action.payload.name
			});
		},
		changeSearchTerm(state, action) {
			state.searchTerm = action.payload;
		},
		removeCar(state, action) {
			const updated = state.cars.filter((car) => {
				return car.id !== action.payload;
			});
			state.cars = updated;
		}
	}
});

export const { addCar, changeSearchTerm, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
