import React from "react";
import MAinSection from "../components/MAinSection";
import MainSide from "../components/MainSide";
import MainArticle from "../components/MainArticle";
const Home = () => {
  return (
    <div className="home">
      <h1>
        <React.Fragment>
          <section>
            <div className="layout">
              <div className="content1 centered">
                <MAinSection />
              </div>
              <div className="content2 centered">
                <MainSide />
              </div>
              <div className="content3 centered">
                <MainArticle />
              </div>
            </div>
          </section>
        </React.Fragment>
      </h1>
    </div>
  );
};

export default Home;
