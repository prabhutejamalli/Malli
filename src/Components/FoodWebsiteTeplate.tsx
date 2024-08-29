import FrameComponent from "./FrameComponent";
import SpecialsContent from "./SpecialsContent";
import "./food-website-template.css";

const FoodWebsiteTemplate = () => {
  return (
    <div className="food-website-template">
      <main className="desktop-1">
        <FrameComponent />
        <section className="specials-parent">
          <div className="specials">Specials</div>
          <SpecialsContent />
        </section>
      </main>
    </div>
  );
};

export default FoodWebsiteTemplate;