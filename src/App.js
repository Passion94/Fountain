import Navbar from "./Navbar";
import Banner1 from "./Banner1";
import Livechatsection from "./Livechatsection";
import Topcategories from "./Topcategories";
import Weareexperts from "./Weareexperts";
import Explore from "./Explore";
import Ouronlineexams from "./Ouronlineexams";
import Popularexaminations from "./Popularexaminations";
import Form from "./Form";
import Feauturedcompetition from "./Feauturedcompetition";
import Getpublicaction from "./Getpublicaction";
import Recentpublication from "./Recentpublication";
import Review from "./Review";
import Footer from "./Footer";

function App() {
  return (

      <div className="">
    <div className="banner">
      <Navbar/>
      <Banner1/>
      </div>
      <Livechatsection/>
      <Topcategories/>
      <Weareexperts/>
      <Explore/>
      <Ouronlineexams/>
      <Popularexaminations/>
      <Form/>
      <Feauturedcompetition/>
      <Getpublicaction/>
      <Recentpublication/>
      <Review/>
      <Footer/>
    </div>
    
  );
}

export default App;
