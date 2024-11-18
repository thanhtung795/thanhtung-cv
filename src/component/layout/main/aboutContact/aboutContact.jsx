import Contact from "./Contact/Contact";
import Position from "./position/Position";
import'./style.css';
function AboutContact() {
    return (
        <div className="container-fluid background-container  " style={{ height: "635px" }}>
            <div className="title-about">
                <h1 className="title-content text-center content">About & Contact</h1>
            </div>
            <div className="row d-flex justify-content-center  content " style={{ height: "100%" }} >
                <div className="col-sm-6 ">
                    <Position />
                </div>
                <div className="col-sm-6  ">
                    <Contact />
                </div>
            </div>
        </div>
    );
}
export default AboutContact;