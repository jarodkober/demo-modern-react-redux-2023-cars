import { useDispatch, useSelector } from 'react-redux';
import { addCar, changeCost, changeName } from '../store';

function CarForm() {
	const dispatch = useDispatch();

	const { cost, name } = useSelector((state) => {
		return {
			cost: state.form.cost,
			name: state.form.name
		};
	});

	const handleCostChange = (event) => {
		const carCost = parseInt(event.target.value) || 0;

		dispatch(changeCost(carCost));
	};

	const handleNameChange = (event) => {
		dispatch(changeName(event.target.value));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		dispatch(
			addCar({
				cost,
				name
			})
		);
	};

	return (
		<div className="car-form panel">
			<h4 className="subtitle is-3">Add Car</h4>
			<form onSubmit={handleSubmit}>
				<div className="field-group">
					<div className="field">
						<label className="label">Name</label>
						<input
							className="input is-expanded"
							onChange={handleNameChange}
							value={name}
						/>
					</div>
					<div className="field">
						<label className="label">Cost</label>
						<input
							className="input is-expanded"
							onChange={handleCostChange}
							type="number"
							value={cost || ''}
						/>
					</div>
				</div>
				<div className="field">
					<button className="button is-link">Submit</button>
				</div>
			</form>
		</div>
	);
}

export default CarForm;
