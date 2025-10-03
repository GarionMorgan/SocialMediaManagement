import "./Main.css";
import CardInfo from "../CardInfo/CardInfo";
import LogoSection from "../LogoSection/LogoSection.jsx";
import {
  servicePackages,
  alaCarteServices,
  educationalContent,
} from "../../utils/constants.js";
import placeholderLogo from "../../assets/circle_placeholder.jpeg";

function Main() {
  return (
    <main className="main">
      <div className="main__container">
        <div className="main__cards">
          <LogoSection logo={placeholderLogo} logoName="logo placeholder" />
          <div className="main__card">
            {servicePackages.map((pkg, index) => (
              <CardInfo
                key={index}
                title={pkg.title}
                price={pkg.price}
                badge={pkg.badge}
                description={pkg.description}
                features={pkg.features}
              />
            ))}
          </div>
          <LogoSection logo={placeholderLogo} logoName="logo placeholder" />
          <div className="main__card">
            {alaCarteServices.categories.map((service, index) => (
              <CardInfo
                key={index}
                title={service.title}
                features={service.description}
              />
            ))}
          </div>
          <LogoSection logo={placeholderLogo} logoName="logo placeholder" />
          <div className="main__card">
            {educationalContent.map((content, index) => (
              <CardInfo
                key={index}
                title={content.title}
                description={content.description}
                features={content.features}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
