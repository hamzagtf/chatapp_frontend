const SearchUser = ()=>{
	return (
		<div className="search-user mt-3">
			<form>
				<button className="btn bg-white">
					<i className="fa-solid fa-magnifying-glass"></i>
				</button>
				<input type="text" placeholder="search" className="form-control" />

			</form>
			
		</div>

		)
}

export default SearchUser;