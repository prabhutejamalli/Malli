import PropTypes from "prop-types";
import "./frame-component.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className="frame-parent">
      <div className="frame-wrapper">
        <div className="menu-parent">
          <div className="menu">Menu</div>
          <div className="lunch-boxes">Lunch boxes</div>
          <div className="platters">Platters</div>
        </div>
      </div>
      <div className="frame-group">
        <div className="frame-container">
          <div className="chefs-special-wrapper">
            <b className="chefs-special">CHEF’S SPECIAL</b>
          </div>
          <div className="freshness-in-every-bite-parent">
            <h1 className="freshness-in-every-container">
              <p className="freshness">{`Freshness `}</p>
              <p className="in-every-bite">in every bite</p>
            </h1>
            <div className="cinnamon-roll-parent">
              <img
                className="cinnamon-roll-icon"
                loading="lazy"
                alt=""
                src="/cinnamon-roll@2x.png"
              />
              <div className="images-removebg-preview-1-parent">
                <img
                  className="images-removebg-preview-1-icon"
                  alt=""
                  src="/imagesremovebgpreview-1@2x.png"
                />
                <img
                  className="images-removebg-preview-2-icon"
                  loading="lazy"
                  alt=""
                  src="/imagesremovebgpreview-2@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lorem-ipsum-dolor-container">
          <p className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet, consectetur `}</p>
          <p className="adipiscing-elit-quo">adipiscing elit. Quo studio.</p>
        </div>
      </div>
      <div className="rectangle-parent">
        <div className="frame-child" />
        <b className="download-recipe">Download Recipe</b>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;