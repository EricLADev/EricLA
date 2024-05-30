
import Header from "@components/header";
import Resume from "@components/resume";
import Sounds from "@components/sounds";
import Contact from "@components/contact";
import Nav from "@components/nav";
import Footer from "@components/footer";
import Projects from "@components/projects";

import SmoothScrolling from "@components/smoothScrolling";

//import SmoothScroll from "@components/SmoothScroll";

const Home = () => {

    return (
        <SmoothScrolling>
            <Nav />
            {/*<SmoothScroll>*/}
                <main className="app">
                    <Header />
                    <Projects />
                    <Resume />
                    {/*<Sounds />*/}
                    <Contact />
                </main>
            {/*</SmoothScroll>*/}
            <Footer />
        </SmoothScrolling>
    );
};

export default Home;