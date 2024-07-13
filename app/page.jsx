
import Header from "@components/header";
import Resume from "@components/resume";
import Sounds from "@components/sounds";
import Contact from "@components/contact";
import Nav from "@components/nav";
import Projects from "@components/projects";
import SmoothScrolling from "@components/smoothScrolling";
import SplashScreen from "@components/splashscreen";

const Home = async () => {

    await new Promise(resolve => setTimeout(resolve,2000));

    return (
        <>
            <SplashScreen />
            <SmoothScrolling>
                <Nav />
                <main className="app">
                    <Header />
                    <Projects />
                    <Resume />
                    {/*<Sounds />*/}
                    <Contact />
                </main>
            </SmoothScrolling>
        </>
    );
};

export default Home;