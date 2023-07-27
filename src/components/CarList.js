import { useSelector } from 'react-redux';

function CarList() {
	const cars = useSelector((state) => {
		return state.cars.data;
	});

	const renderedCars = cars.map((car) => {
		return (
			<div
				className="panel"
				key={car.id}
			>
				<p>
					{car.name} - ${car.cost}
				</p>
			</div>
		);
	});

	return (
		<div className="car-list">
			{renderedCars}
			<hr />
		</div>
	);
}

export default CarList;
