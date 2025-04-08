import Hero from '../components/Hero';
import FeatureList from '../components/FeatureList';
import Box from '@mui/material/Box';
import ContentImage from '../components/ContentImage';

const Home = () => {
    return (
        <Box>
            <Hero images={[{ src: "https://1.vikiplatform.com/c/40536c/562332ede9.jpg?x=b", alt: "connection" }, { src: "https://media.zenfs.com/en/comingsoon_net_477/b241e239d05a566ecdd036400c7481a9", alt: "queen of tears" }, { src: "https://i.ytimg.com/vi/5ee9fMX7HNg/maxresdefault.jpg", alt: "the wild robot" }]} />
            <FeatureList listName="Featured Movies" type="movie"/>
            <FeatureList listName="Featured TV Shows" type="tvshow" />
            <ContentImage src="https://i.postimg.cc/X72Jx2yH/business-concept-relaxation-in-working-time-drinking-coffee-taking-a-break-on-clean-light-blue-offic.jpg" alt="stream from different devices" />
            <ContentImage src="https://cdn.playcasino.co.za/filters:format(webp)/filters:quality(40)/fit-in/960x350/1740559397/oscars-2025-winz-promotion.jpg" alt="oscars 2025" />
        </Box>
    );
}

export default Home;