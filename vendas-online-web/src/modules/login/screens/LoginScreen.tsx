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
          </LimitedContainer>
        </ConatinerLogin>
        <BackgroundImage src="./background.png" />
      </ConatinerLoginScreen>
    </>
  );
};

export default LoginScreen;
