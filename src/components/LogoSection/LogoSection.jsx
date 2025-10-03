import "./LogoSection.css";

function LogoSection({ logo, logoName }) {
  return (
    <div className="logo-section__content">
      <img src={logo} alt={logoName} className="logo-section__logo" />
    </div>
  );
}
export default LogoSection;
