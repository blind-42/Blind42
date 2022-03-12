import { Link } from 'react-router-dom';
import { TopBar, PageName, Squares } from 'styles/styled';
import {
  AppContainer,
  PageContainer,
  ContentContainer,
  SeoulImg,
  TextWrap,
  LoginButtonWrap,
} from './styled';

function Login() {
  return (
    <>
      <AppContainer>
        <PageContainer>
          <TopBar>
            <PageName>Login</PageName>
            <Squares>
              <div>&#9866;</div>
              <div>&#10064;</div>
              <Link to="/">
                <div>&times;</div>
              </Link>
            </Squares>
          </TopBar>
          <ContentContainer>
            <SeoulImg>
              <img src="images/42seoulLogo.png" alt="42img" />
            </SeoulImg>
            <TextWrap>
              <div>Born to Code?</div>
              <div>
                42Seoul 카뎃만 참여할 수 있습니다.
                <br />
                계정이 존재하는 지 확인해주세요.
              </div>
            </TextWrap>
            <LoginButtonWrap>
              <a
                href={`${process.env.REACT_APP_SERVERIP}/oauth2/authorization/42`}
              >
                <button>로그인</button>
              </a>
            </LoginButtonWrap>
          </ContentContainer>
        </PageContainer>
      </AppContainer>
    </>
  );
}

export default Login;
