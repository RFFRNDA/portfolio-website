import Hero from "../components/home/Hero";
import AboutMePreview from "../components/home/AboutMePreview";
import CompetencyCard from "../components/home/CompetencyCard";
import ExperiencePreview from "../components/home/ExperiencePreview";
import FeaturedProjects from "../components/home/FeaturedProjects";

function Home() {
  return (
    <main>
      <Hero />
      <AboutMePreview />
      <CompetencyCard />
      <ExperiencePreview />
      <FeaturedProjects />
    </main>
  );
}

export default Home;