import Input from "../../../shared/inputs/input/Input";
import {
  BackgroundImage,
  ConatinerLogin,
  ConatinerLoginScreen,
  LimitedContainer,
  LogoImage,
} from "../styles/loginScreen.styles";

const LoginScreen = () => {
  return (
    <>
      <ConatinerLoginScreen>
        <ConatinerLogin>
          <LimitedContainer>
            <LogoImage src="" />
            <Input title="Usuário" />
            <Input title="Password" type="password" />
          </LimitedContainer>
        </ConatinerLogin>
        <BackgroundImage src="./background.png" />
      </ConatinerLoginScreen>
    </>
  );
};

export default LoginScreen;
