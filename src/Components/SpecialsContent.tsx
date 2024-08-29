import PropTypes from "prop-types";
import "./specials-content.css";

const SpecialsContent = ({ className = "" }) => {
  return (
    <div className="istockphoto-1338280922-170667a-parent">
      <img
        className="istockphoto-1338280922-170667a-icon"
        alt=""
        src="/istockphoto1338280922170667aremovebgpreview-1@2x.png"
      />
      <div className="ellipse-parent">
        <img className="frame-item" alt="" src="/ellipse-2@2x.png" />
        <img
          className="strawberry-on-white-background-icon"
          loading="lazy"
          alt=""
          src="/strawberryonwhitebackgroundtorepresentstrawberrytongueremovebgpreview-1@2x.png"
        />
        <img
          className="strawberry-on-white-background-icon1"
          alt=""
          src="/strawberryonwhitebackgroundtorepresentstrawberrytongueremovebgpreview-2@2x.png"
        />
        <img
          className="strawberry-on-white-background-icon2"
          alt=""
          src="/strawberryonwhitebackgroundtorepresentstrawberrytongueremovebgpreview-3@2x.png"
        />
      </div>
      <img
        className="sushi-chopsticks-27304150-remo-icon"
        loading="lazy"
        alt=""
        src="/sushichopsticks27304150removebgpreview-1@2x.png"
      />
      <div className="vector-parent">
        <img className="frame-inner" alt="" src="/ellipse-1.svg" />
        <img
          className="group-icon"
          loading="lazy"
          alt=""
          src="/group-2@2x.png"
        />
        <img className="vector-icon" loading="lazy" alt="" src="/vector.svg" />
      </div>
    </div>
  );
};

SpecialsContent.propTypes = {
  className: PropTypes.string,
};

export default SpecialsContent;