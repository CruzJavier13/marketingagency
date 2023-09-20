import React from "react";
import Footer from "../../components/navigation/Navbar.jsx";
import Navbar from "../../components/navigation/Footer.jsx";
import Layout from "../../hocs/layouts/Layout.jsx";

function Home(){
    return (
        <Layout>
            <Footer/>
            <main className="container mx-auto p-4 ">
                {/* Contenido de la aplicación */}
            </main>
            <Navbar/>
        </Layout>
    )
}

export default Home;