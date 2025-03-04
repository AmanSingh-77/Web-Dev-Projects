import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
            
                <div className="row">
                    <div className="col">
                        <Link className="navbar-brand nav-link" aria-current="page" to={'/'}>
                            <i class="bi bi-house-fill me-3"></i>
                        </Link>
                    </div>
                </div>
                
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{backgroundColor:'transparent'}}
                >
                <i className="icon-1 bi bi-list"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 me-0">
                    
                        <li className="nav-item me-3">
                        <Link className="nav-link" to={'/about'}>
                            About
                        </Link>
                        </li>

                        <li className="nav-item me-3">
                        <Link className="nav-link" to={'/techStack'}>
                            Tech Stack
                        </Link>
                        </li>

                        <li className="nav-item me-3 dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Dropdown
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                            <a className="dropdown-item" href="#">
                                Action
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                Another action
                            </a>
                            </li>
                            <li>
                            <hr className="dropdown-divider" />
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                Something else here
                            </a>
                            </li>
                        </ul>
                        </li>
                
                    </ul>
                </div>
            </div>
        </nav>
    )
}