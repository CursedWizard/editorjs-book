/**
 * NavigationSidePanel styled container
 *
 * @author: exode <info@exode.ru>
 */

import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	box-shadow: 0px -16px white;
  transition: all 0.3s ease-in-out;

  * {
    box-sizing: border-box;
  }
  
`;

type ContentContainerTypes = {
  marginShift: number;
}

export const ContentContainer = styled.div<ContentContainerTypes>`
  position: relative;
  margin-top: 1em;
  padding: 1em;
  margin-left: ${(p) => p.marginShift}px;
  width: calc(100% - ${(p) => p.marginShift}px);
  transition: all 0.3s ease-in-out;

& .MuiAppBar-positionFixed {
  left: ${(p) => p.marginShift}px;
  width: calc(100% - ${(p) => p.marginShift}px);
  transition: all 0.3s ease-in-out;
}

& .MuiAppBar-colorPrimary {
  background-color: ${({theme}) => theme.colors.blue80};
}
`

