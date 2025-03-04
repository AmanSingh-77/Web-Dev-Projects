export default function TechStack(){
    return(
        <div className="container-fluid px-4 pt-3">
            {/* Heading */}
            <div className="row justify-content-center mb-3 mb-lg-5">
                <div className="col-lg-4 pt-1 text-center">
                <span className="stack-head fw-bold">TECH STACK</span>
                </div>
            </div>

            {/* ROW - 1 with 4 skills */}
            <div className="row pb-lg-3 px-lg-5">
                <div className="col-lg-3 py-3 px-3">
                <button className="stack-tabs tab-1 rounded-5 w-100">
                    <img
                    className="img-fluid h-75"
                    src="/assets/react-image.png"
                    alt="React icon"
                    />
                    <br />
                    <span className="text-light fw-bold">REACT</span>
                </button>
                </div>

                <div className="col-lg-3 py-3 px-3">
                <button className="stack-tabs tab-3 rounded-5 w-100">
                    <img
                    className="img-fluid h-75"
                    src="/assets/node-pic.png"
                    alt="Node icon"
                    />
                    <br />
                    <span className="text-light fw-bold">NODEjs</span>
                </button>
                </div>

                <div className="col-lg-3 py-3 px-3">
                <button className="stack-tabs tab-5 rounded-5 w-100">
                    <img
                    className="img-fluid h-75 w-75"
                    src="/assets/Js-logo.png"
                    alt="Js icon"
                    />
                    <br />
                    <span className="text-light fw-bold">JAVASCRIPT</span>
                </button>
                </div>

                <div className="col-lg-3 py-3 px-3">
                <button className="stack-tabs tab-7 rounded-5 w-100">
                    <img
                    className="img-fluid h-75 w-50"
                    src="/assets/css-img.png"
                    alt="CSS icon"
                    />
                    <br />
                    <span className="text-light fw-bold">CSS</span>
                </button>
                </div>
            </div>

            {/* ROW - 2 with 4 skills */}
            <div className="row py-lg-3  px-lg-5">
                <div className="col-lg-3 py-3 px-3">
                <button className="stack-tabs tab-2 rounded-5 w-100">
                    <img
                    className="img-fluid h-75"
                    src="/assets/html-img.png"
                    alt="HTML icon"
                    />
                    <br />
                    <span className="text-light fw-bold">HTML</span>
                </button>
                </div>

                <div className="col-lg-3 py-3 px-3">
                <button className="stack-tabs tab-4 rounded-5 w-100">
                    <img
                    className="img-fluid h-75"
                    src="/assets/c-img.png"
                    alt="C++ icon"
                    />
                    <br />
                    <span className="text-light fw-bold">C++</span>
                </button>
                </div>

                <div className="col-lg-3 py-3 px-3">
                <button className="stack-tabs tab-6 rounded-5 w-100">
                    <img
                    className="img-fluid h-75 w-75"
                    src="/assets/mongo-img.png"
                    alt="MongoDB icon"
                    />
                    <br />
                    <span className="text-light fw-bold">MONGODB</span>
                </button>
                </div>
                
                <div className="col-lg-3 py-3 px-3">
                <button className="stack-tabs tab-8 rounded-5 w-100">
                    <img
                    className="img-fluid h-75 w-50"
                    src="/assets/vs-img.png   "
                    alt="Vs code icon"
                    />
                    <br />
                    <span className="text-light fw-bold">TEXT-EDITOR - VS code</span>
                </button>
                </div>
            </div>
        </div>
    )
}