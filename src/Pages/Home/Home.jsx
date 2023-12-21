import Footer from "../../components/Footer/Footer";
import Container from "../../container/Container/Container";
import Banner from "./Banner";


const Home = () => {
    return (
        <Container>
            <div>
               <Banner></Banner>
               <Footer></Footer>
           </div>
        </Container>
    );
};

export default Home;