import "./HomeStyle.css";

function Home() {
    return (
        <div className="landingPageContainer">
            <div className="introContainer">
                <span className="landingPageIntroText">Hello, my name is</span>
                <span className="landingPageMainText">Manpreet Singh</span>
                <span className="landingPageInfoText">Most people call me Manny</span>
            </div>

            <span className="landingPageSubText">I'm building things for mobile and the web.</span>

            <span className="landingPageDescriptionText">
                I'm a software engineer with experience in Front-End development.
                Always open to learning new things, and constantly improving myself.
            </span>
        </div>
    )
}

export default Home;