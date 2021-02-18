import Slider from "./Slider";
import Header from "./Header";
import background from "../images/homebg.jpg";

function Home() {
  document.body.style.background = "url(" + background + ")";

  return (
    <div className="container my-3">
      <Header />
      <div className="dark_bg">
        <Slider
          title="Popular"
          link="3/movie/popular?api_key=064a095d09fe3dff6f8350dae42af935&language=fr"
        />
        <Slider
          title="Top rated"
          link="3/movie/top_rated?api_key=064a095d09fe3dff6f8350dae42af935&language=fr"
        />
      </div>
    </div>
  );
}

export default Home;
