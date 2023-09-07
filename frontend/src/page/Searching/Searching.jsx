import { 
  Root,Title,
  ContentContainer,
  Name,
  ButtonContainer,
  Button,
  NameContainer,
  CodeContainer,
  Code
 } from "./styled";

export const Searching = () => {
  return (
    <Root>
       <Title
        title="유언장 검색하기"
        subtitle="가족의 유언장이 보관되어 있는지 확인해보세요."/>
        <ContentContainer>
          <NameContainer>
            <Name>
            이름 
          </Name>
          </NameContainer>

          <CodeContainer>
            <Code>
              주민번호
            </Code>
          </CodeContainer>

          <ButtonContainer>
            <Button>
              검색하기
            </Button>
          </ButtonContainer>

        </ContentContainer>
    </Root>
  );
};
