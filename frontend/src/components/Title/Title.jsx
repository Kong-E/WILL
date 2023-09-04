import { Root, TitleTypo, SubtitleTypo } from "./styled";

export const Title = ({ title, subtitle }) => {
  return (
    <Root>
      <TitleTypo>{title}</TitleTypo>
      <SubtitleTypo>{subtitle}</SubtitleTypo>
    </Root>
  );
};
