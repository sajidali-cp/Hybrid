import React from "react";
import styled from "styled-components";
import { ReactComponent as Back } from "../../../assets/icons/back.svg";
import { ReactComponent as Add } from "../../../assets/icons/add.svg";
import { ReactComponent as Edit } from "../../../assets/icons/edit.svg";
import theme from "../../../theme";
import useRouterHook from "../../../hooks/useRouterHook";
import { DeleteIconWrapper } from "../../Modals/AddAssetsModal/StyledAddAssetsModal";
const BackIcon = styled(Back)`
  margin-right: 1.5rem;
  width: 1.5rem;
  height: 1.5rem;

  cursor: pointer;
  ${({ theme }) => `
    path{
      fill:${theme.defaultText}
    }  
  `}
`;

const AddIcon = styled(Add)`
  width: 1.5rem;
  cursor: pointer;
  ${({ theme }) => `
    path{
      fill:${theme.defaultText}
    }  
  `}
`;

const EditIcon = styled(Edit)`
  width: 1.2rem;
  cursor: pointer;
  ${({ theme }) => `
    path{
      // fill:${theme.defaultText}
    }  
  `}
`;

const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

interface Props {
  heading: string;
  handleAdd?: () => void;
  showBack?: boolean;
  editIcon?: boolean;
}

export default function RightSectionHeading({
  heading,
  handleAdd,
  showBack,
  editIcon,
}: Props) {
  const { handleNavigate } = useRouterHook();
  return (
    <RowWrapper>
      <Wrapper>
        {showBack && (
          <BackIcon
            onClick={(e) => {
              e.preventDefault();
              handleNavigate({ delta: -1 });
            }}
          />
        )}
        <h2>{heading}</h2>
      </Wrapper>
      {!editIcon && handleAdd && <AddIcon onClick={handleAdd} />}
      {editIcon && (
        <DeleteIconWrapper onClick={handleAdd}>
          <EditIcon />
        </DeleteIconWrapper>
      )}
    </RowWrapper>
  );
}
