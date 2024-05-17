import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>visitor</User>@<WebsiteName>terminal.shxntanu.tech</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;