import Contact from "../sections/home/Contact";
import Experience from "../sections/home/Experience";
import Hero from "../sections/home/Hero";
import ShowcaseSection from "../sections/home/ShowcaseSection";
import BlogPreview from "../sections/home/Blogs";
import MediaPreview from "../sections/home/YoutubeChannel";

const App = () => (
  <>
    <Hero />
    <ShowcaseSection />
    <Experience />
    <MediaPreview />
    <BlogPreview />
    <Contact />
  </>
);

export default App;