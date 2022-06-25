import { Link } from "react-router-dom"

const Navbar = ()=>{
	return (
		<nav className="navbar fixed-top bg-light">
		  <div className="container">
			<Link to="/">
			<h5 className="navbar-brand main-color">Navbar</h5>
			</Link>
		    
		    <div>
			
				<input className="search-input" type="search" placeholder="Search" aria-label="Search"/>
				
				<button  className=" main-color search-button">
				    <i className="fa-solid fa-magnifying-glass" style={{color: "#9d9999"}}></i>
			    </button>
			    <Link to='/friend_list' className="ml-3 main-color btn bg-maincolor rounded-circle">
					<i className="fa-solid fa-user-group"></i>
					<span className="msg-num">15</span>
			    </Link>
				<Link to='/' className="ml-3 main-color btn bg-maincolor rounded-circle">
				<i className="fa-solid fa-envelope"></i>
				<span className="msg-num">15</span>
			    </Link>
				
				<Link to='/' className="ml-3 main-color btn bg-maincolor rounded-circle">
				    <i className="fa-solid fa-gear"></i>
			    </Link>
			    
		    </div>
		  </div>
		</nav>
		)

}
export default Navbar