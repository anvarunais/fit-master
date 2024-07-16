import "./Experience.css";
function Experience() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <div className="container">
          <h1 className="experienceheading mt-5 mb-5">Success Stories</h1>
          <div className="row">
            <div className="col-md-4 col-sm-12 mb-5">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                  “Fit Master transformed my eating habits and helped me reach my goals.
                  </p>
                  <h5 className="card-title">Ravi M</h5>
                  {/* <p className="card-subtitle mb-2 text-muted">
                    CEO, Company A
                  </p> */}
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-12 mb-5">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                  “I saw significant results in just a month!”
                  </p>
                  <h5 className="card-title">Anjali P</h5>
                  {/* <p className="card-subtitle mb-2 text-muted">
                    CTO, Company B
                  </p> */}
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-12 mb-5">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                  “The continuous support kept me motivated throughout my journey.”
                  </p>
                  <h5 className="card-title">Kiran L</h5>
                  {/* <p className="card-subtitle mb-2 text-muted">
                    Marketing Director, Company C
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Experience;
