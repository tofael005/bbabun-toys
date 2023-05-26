import useTitle from "../Hooks/UseTitleHooks";
import Banner from "../components/Banner";
import Terms from "./Terms";
import Tabss from "../components/Tabs";
import Latest from "./Latest";
import LatestBlog from "./LatestBlog";

const Home = () => {
    useTitle("Home")
    return (
        <div>
           <Banner/>
           <Terms/>
           <Tabss/>
           <Latest/>
           <LatestBlog/>
        </div>
    );
};

export default Home;