import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";
import { Link } from "../styles/Welcome.styled";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't miss. Head over to my{" "}
        <Link href="https://github.com/shxntanu">GitHub</Link> to view more of
        my projects!
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "aerocode",
    desc: "Code sharing web app without any sign-ups required. Made in Flutter!",
    url: "https://aero-code.web.app/",
  },
  {
    id: 2,
    title: "PageTalk",
    desc: "Ask Questions, gain summaries and take notes from any Document using the power of LLMs!",
    url: "https://github.com/shxntanu/PageTalk",
  },
  {
    id: 3,
    title: "Email Classifier",
    desc: "Email Classification and Rapid Automatic Re-routing with the power of LLMs and Distributed Task Queues. (🏆 Winner at Barclays Hack-O-Hire 2024)",
    url: "https://github.com/shxntanu/email-classifier",
  },
  {
    id: 4,
    title: "Minima-List",
    desc: "Get music recommendations based on the song that's currently occupying your mind!",
    url: "https://github.com/shxntanu/minima-list-ML",
  },
];

export default Projects;