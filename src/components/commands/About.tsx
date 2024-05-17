import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Shantanu Wable</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a full-stack developer</HighlightAlt> based in Pune, India.
      </p>
      <p>      
          I am a full stack Web Developer, primarily using the MERN Stack. <br/>
          I have a strong foundation in Frontend development in React using Redux, Zustand and ContextAPI. <br/>
          I also have good experience in Backend development using ExpressJS, Flask & Django <br/>
          and also have dabbled in server-side technologies like Celery, message queues like RabbitMQ, <br/>
          and Large Language Models like Llama2, Mixtral and DistilBERT.
      </p>
    </AboutWrapper>
  );
};

export default About;
