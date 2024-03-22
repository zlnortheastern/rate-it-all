import NavBar from "../fragments/NavBar";
import PropTypes from "prop-types";
import Footer from "../fragments/Footer";

export default function BaseTemplate({children}) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

BaseTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};