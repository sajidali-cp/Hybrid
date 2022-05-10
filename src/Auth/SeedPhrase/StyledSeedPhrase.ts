import styled from "styled-components";
import { ReactComponent as Copy } from "../../assets/icons/copy.svg";
import { ReactComponent as Check } from "../../assets/icons/Icon awesome-check.svg";
import { ThemeMode } from "../../enums";

export const Heading = styled.h1`
  color: ${({ theme }) => theme.sideBarPrimary};
  font-size: 2.25rem;
  text-align: center;
`;
export const PhraseWrapper = styled.div`
  background: #f3f3f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  padding: 2rem 3rem;
  margin: 10px 0;
  width: 100%;
  /* min-height: 16.25rem; */
`;

export const StyledTextarea = styled.textarea`
  background: #f3f3f3;
  border-radius: 8px;
  padding: 20px;
  margin: 10px 0;
  width: 100%;
  resize: none;
  outline: none;
  border: none;
  min-height: 120px;
`;

export const Paragraph = styled.p`
  line-height: 26px;
  text-align: center;
  width: 80%;
  word-break: break-word;
  margin: 10px;
`;

export const SeedList = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  color: ${({ theme }) => theme.defaultText};
`;

export const SeedListItem = styled.li`
  display: flex;
  width: 30%;
  height: fit-content;
  cursor: pointer;
  padding: 0.4rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) =>
    theme.themeMode === ThemeMode.Light ? theme.bgPrimary : theme.bgSecondary};
  color: ${({ theme }) => theme.defaultText};
  p {
    text-align: center;
  }
`;

export const ListNumber = styled.div`
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.primaryButton.backGround};
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

export const CopyIcon = styled(Copy)`
  margin-right: 5px;
  min-width: 12px;
  min-height: 14;
`;

export const CheckIcon = styled(Check)`
  margin-right: 5px;
  min-width: 12px;
  min-height: 14;
`;

export const CheckBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  column-gap: 20px;
  margin: 15px 0;
  line-height: 1rem;
`;
export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  width: 1rem;
  height: 1rem;
  min-width: 1rem;
  min-height: 1rem;
`;
export const Label = styled.label`
  font-size: 0.9rem;
`;
