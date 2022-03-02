export const Why = (props) => {
    return (
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
            <div className="about-text">
                <h2>Why we invest in <span className="text-orange">CCTV ?</span></h2>
                <p>{props.data ? props.data.paragraph : "loading..."}</p>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/why/whyweinvest.jpg" className="img-responsive" alt="" />{" "}
            </div>
          </div>
        </div>
      </div>
    );
  };
  