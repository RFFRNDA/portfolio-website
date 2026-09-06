import AboutHeader from "../components/about/AboutHeader";
import ExperienceTimeline from "../components/about/ExperienceTimeline";
import Skills from "../components/about/Skills";
import Certifications from "../components/about/Certifications";
import AboutMe from "../components/about/Biography";
import Education from "../components/about/Education";

function About() {
  return (
    <main>
      <AboutHeader />  
      <AboutMe />   
      <section className="bg-dark-base">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-[3fr_7fr]">
          <Education />
          <ExperienceTimeline />
        </div>
      </section>
      <Skills />
      <Certifications />
    </main>
  );
}

export default About;
