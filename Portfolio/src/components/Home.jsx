import Navbar from "./Navbar";

export default function Home(){
    return(

        <>
            <div className="main container-fluid ps-lg-5">

                <div className="row">
                    <div className="col-12 d-flex flex-column mb-3">
                        <div className="home-div row mb-4 pt-4 pt-lg-0">
                            <div className="col-lg-12 first_name">Amanpreet</div>
                            <div className="col-lg last_name">Singh</div>
                        </div>
                
                        <div className="sub-head row">
                            <div className="col-lg desc">I build things for the web.</div>
                        </div>

                        <div className="row social-icons-row mt-lg-5 mt-4">
                            
                            <div className="col-lg-4 col-7 social-icons-col d-flex flex-row justify-content-between">
                            <a href="https://www.linkedin.com/in/amanpreet-singh-857b11221/" target="_blank">
                                <i className="bi bi-linkedin social-icons l-one"></i>
                            </a>

                            <a href="https://github.com/AmanSingh-77" target="_blank">
                                <i className="bi bi-github social-icons l-two"></i>
                            </a>

                            <a href="https://www.instagram.com/aman._.030/" target="_blank">
                                <i className="bi bi-instagram social-icons r-one"></i>
                            </a>

                            <a href="https://x.com/AmanSingh423" target="_blank">
                                <i className="bi bi-twitter-x social-icons r-two"></i>
                            </a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}