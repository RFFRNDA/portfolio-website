import Hero from "../components/Hero";
import AboutMePreview from "../components/AboutMePreview";
import CompetencyCard from "../components/CompetencyCard";
import ExperiencePreview from "../components/ExperiencePreview";
import FeaturedProjects from "../components/FeaturedProjects";

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