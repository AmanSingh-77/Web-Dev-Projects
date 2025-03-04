export default function About(){
    return(
        <>
            <div className="container-fluid pt-2">

                {/* Heading */}
                <div className="row pb-3 mb-3">
                    <div className="col-lg-12 d-flex justify-content-center">
                    <span className="about-head fw-bolder">ABOUT ME</span>
                    </div>
                </div>

                {/* Text Container */}
                <div className="container about-box border border-none rounded-5 p-5 ">
                    <div className="row">
                        <div className="col-lg-12 d-flex">
                            <span className="fs-2  text-wrap text-break">
                            Hi, I'm <strong>Amanpreet Singh</strong>, a passionate MERN stack
                            developer with a knack for problem-solving and analytical thinking. I
                            hold a B.Tech degree in Computer Science and Engineering from Guru
                            Nanak Dev University Regional Campus, Jalandhar. I enjoy building
                            dynamic web applications, exploring design aesthetics, and
                            continuously improving my coding skills.
                            <br /> When I'm not coding, you’ll find me shooting hoops on the
                            basketball court or vibing to my favorite music.
                            <br />
                            Let's connect and create something amazing together!
                            </span>
                        </div>

                        <div className="row pt-5">
                            <div className="col-lg text-center fs-5 text-wrap text-break ">
                                <span>Check out my socials to know more about me </span>
                                <a
                                    className="about-icons mx-1"
                                    href="https://www.instagram.com/aman._.030/"
                                    target="_blank"
                                >
                                    <i className="bi bi-instagram social-icons" />
                                </a>

                                <a
                                    className="about-icons"
                                    href="https://www.linkedin.com/in/amanpreet-singh-857b11221/"
                                    target="_blank"
                                >
                                    <i className="bi bi-linkedin social-icons" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>    
        </>
    )
}