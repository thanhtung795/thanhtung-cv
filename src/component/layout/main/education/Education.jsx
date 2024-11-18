import './style.css';

function Education() {
    return (
        <div className="container-fluid education-container">
            <h1 className="title-education text-center">Education</h1>
            <div className="row content-education m-3 p-3 border border-light border-2 rounded">
                <span className="fs-4 fw-bold">FPT Polytechnic College: </span>
                <span className="fs-4 content-education ms-4 mt-2">06/2022 - Current</span>
                <span className="fs-4 fw-bold">Major: </span>
                <span className="fs-4 content-education ms-4 mt-2">Software Development</span>
                <span className="fs-4"><strong>Current GPA:</strong> 9/10</span>
                <span className="fs-4 content-education ms-4 mt-2">
                    Top 32 Outstanding Students of Spring 2024.
                </span>
                <span className="fs-4 content-education ms-4 mt-2">
                    Top 6 Outstanding Students of Summer 2024.
                </span>
            </div>
            <h1 className="title-education text-center">Awards & Activities</h1>
            <div className="row content-education ms-3 me-3 border border-light border-2 rounded">
                <span className="fs-4 fw-bold">Game Programming Competition: </span>
                <span className="fs-4 content-education mt-2">
                    Developed a game that reached the semifinals.
                </span>
            </div>
        </div>
    );
}

export default Education;
