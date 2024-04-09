import Head from "next/head";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Experiences from "../../components/Experiences";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Link from "next/link";
import { Experience, PageInfo, Project, Skill, Social } from "../../typings";
import { fetchPageInfo } from "../../utils/fetchPageInfo";
import { fetchExperiences } from "../../utils/fetchExperiences";
import { fetchSkills } from "../../utils/fetchSkills";
import { fetchProjects } from "../../utils/fetchProjects";
import { fetchSocials } from "../../utils/fetchSocials";
import home from "../../images/logo/home.png";

export default async function Page() {
  const data = await getData();
  console.log(data.props.projects);
  return (
    <div className="bg-[#534293] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FFFF00]">
      <Head>
        <title>An&apos;s Portfolio</title>
      </Head>

      {/*Header*/}
      <Header socials={data.props.socials} />
      {/*Hero*/}
      <section id="hero" className="snap-start">
        <Hero pageInfo={data.props.pageInfo} />
      </section>
      {/*About*/}
      <section id="about" className="snap-center">
        <About pageInfo={data.props.pageInfo} />
      </section>
      {/*Experience*/}
      <section id="experiences" className="snap-center">
        <Experiences experiences={data.props.experiences} />
      </section>
      {/*Skills*/}
      <section id="skills" className="snap-start">
        <Skills skills={data.props.skills} />
      </section>
      {/*Projects*/}
      <section id="projects" className="snap-start">
        <Projects projects={data.props.projects} />
      </section>
      {/*Contact Me*/}
      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursot-pointer">
          <div className="flex items-center justify-end pr-5">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src={home.src}
              alt=""
            ></img>
          </div>
        </footer>
      </Link>
    </div>
  );
}

async function getData() {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
  };
}
