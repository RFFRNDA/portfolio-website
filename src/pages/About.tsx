import AboutHeader from "../components/AboutHeader";
import Biography from "../components/Biography";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";

function About() {
  return (
    <main>
      <AboutHeader />
      <Biography />
      <ExperienceTimeline />
      <Skills />
      <Certifications />
    </main>
  );
}

export default About;
