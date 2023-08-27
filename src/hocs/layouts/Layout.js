import { connect } from "react-redux";

function Layout({ children }) {
  // Usar desestructuración para acceder a "children"
  return <div>{children}</div>;
}

const mapStateToProps = (state) => {
  return {
    // Aquí debes mapear propiedades del estado a propiedades del componente
    // Por ejemplo: propName: state.someProperty
  };
};

export default connect(mapStateToProps, {})(Layout);
