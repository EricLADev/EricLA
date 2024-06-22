
import Header from "@components/header";
import Resume from "@components/resume";
import Sounds from "@components/sounds";
import Contact from "@components/contact";
import Nav from "@components/nav";
import Footer from "@components/footer";
import Projects from "@components/projects";

import SmoothScrolling from "@components/smoothScrolling";
import Loading from "@app/loading";
import {Suspense} from "react";

//import SmoothScroll from "@components/SmoothScroll";

const Home = () => {

    return (
        <Suspense fallback={<Loading />}>
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
        </Suspense>
    );
};

export default Home;