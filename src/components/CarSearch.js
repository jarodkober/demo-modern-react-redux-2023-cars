import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm } from '../store';

function CarSearch() {
	const dispatch = useDispatch();

	const searchTerm = useSelector((state) => {
		return state.cars.searchTerm;
	});

	const handleSearchTermChange = (event) => {
		dispatch(changeSearchTerm(event.target.value));
	};

	return (
		<div className="list-header">
			<h3 className="title is-3">My cars</h3>
			<div className="search field is-horizontal">
				<label className="label">Search</label>
				<input
					className="input"
					onChange={handleSearchTermChange}
					value={searchTerm}
				/>
			</div>
		</div>
	);
}

export default CarSearch;
