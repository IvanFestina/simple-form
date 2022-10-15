import React, { useState } from 'react';

import styled from 'styled-components';

type SelectPropsType = {};

// const StyledSelect = styled.select`
//   width: 100%;
//   height: 50px;
//   border: #e3e3e3 solid 2px;
//   border-radius: 8px;
//   option {
//     color: black;
//     background: white;
//     display: flex;
//     height: 50px;
//     white-space: pre;
//     min-height: 20px;
//     padding: 0px 2px 1px;
//     border-radius: 8px;
//   }
// `;
//
// const Select = () => {
//   return (
//     <StyledSelect>
//       <optgroup label="Cash">
//         <option>Cash</option>
//       </optgroup>
//     </StyledSelect>
//   );
// };

// export default Select;

const Main = styled('div')`
  width: 100%;
`;

const DropDownContainer = styled('div')`
  width: 10.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled('div')`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  width: 100%;
  height: 50px;
  border: #e3e3e3 solid 2px;
  border-radius: 8px;
`;

const DropDownListContainer = styled('div')`
  position: absolute;
  z-index: 100;
  width: 10.5em;
`;

const DropDownList = styled('ul')`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled('li')`
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    color: #fd9e46;
  }
`;

const options = ['Mangoes', 'Apples', 'Oranges'];

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: any) => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>{selectedOption || 'Mangoes'}</DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map(option => (
                <ListItem onClick={() => onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
};

export default Select;
