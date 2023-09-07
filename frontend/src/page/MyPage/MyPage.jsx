import { Root } from './styled';
import { useRecoilValue } from 'recoil';
import { UserState } from '../../stores/login-store';

export const MyPage = () => {
  const user = useRecoilValue(UserState);

  return <Root>{user ? <div>{user.username}님 환영합니다.</div> : <div>로그인이 필요합니다.</div>}</Root>;
};
