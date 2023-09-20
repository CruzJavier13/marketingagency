import { connect } from "react-redux";

function Navbar() {
    return (
        <nav className="w-full py-10 shadow-md fixed">
            Navbar
        </nav>
    );
}

const mapStateToProps = state => ({
    // Mapea aquí las propiedades que necesites desde el estado
});

export default connect(mapStateToProps)(Navbar);