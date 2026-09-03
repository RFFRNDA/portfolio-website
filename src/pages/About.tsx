import AboutHeader from "../components/about/AboutHeader";
import ExperienceTimeline from "../components/about/ExperienceTimeline";
import Skills from "../components/about/Skills";
import Certifications from "../components/about/Certifications";

function About() {
  return (
    <main>
      <AboutHeader />
      <ExperienceTimeline />
      <Skills />
      <Certifications />
    </main>
  );
}

export default About;
