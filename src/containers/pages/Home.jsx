import React from "react";
import Footer from "../../components/navigation/Navbar.jsx";
import Navbar from "../../components/navigation/Footer.jsx";
import Layout from "../../hocs/layouts/Layout.jsx";

function Home(){
    return (
        <Layout>
            <Navbar/>
                <div className="pt-28 bg-blue-500 text-white p-4">
                    Home
                    
                </div>
                <Footer/>
        </Layout>
    )
}

export default Home;