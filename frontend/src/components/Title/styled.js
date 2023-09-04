import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  width: 100%;
  height: 181px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #f0f0f0;
`;

export const TitleTypo = styled.div`
  color: #000;
  text-align: center;
  font-family: Noto Sans KR;
  font-weight: ${(props) => props.weight || 700};
  line-height: normal;
  font-size: 48px;
`;

export const SubtitleTypo = styled(TitleTypo)`
  font-size: 20px;
`;
