import { connect } from "react-redux";
function Footer(){
    return(
        <footer className="underline shadow-md">
            Footer
        </footer>
    );
}

const mapStateToProp = state => ({
    
});


export default connect(mapStateToProp) (Footer);