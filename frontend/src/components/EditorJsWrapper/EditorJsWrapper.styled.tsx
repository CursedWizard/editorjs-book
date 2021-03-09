/**
 * EditorJsWrapper styled container
 *
 * @author: exode <info@exode.ru>
 */

import styled from 'styled-components';

export const EditorJsWrapperContainer = styled.div`
height: 100%;

& * .ce-delimiter::before {
  color: ${({theme}) => theme.colors.blue100};
}
&& * .codex-editor__redactor {
  padding-bottom: 1.5em !important;
}

& * .codex-editor {
  /* padding: 0em 1.5em; */
  padding-bottom: 1.5em 1.5em;
  margin-top: 60px;
}

&  * {
  /* color: #21242c; */
  /* color: black; */
}

& * ul {
    list-style: none;
}

& * ul li::before {

  content: "";
  display: block;
  position: absolute;
  margin-top: 0.35em;
  /* top: 1rem; */
  left: 1.2em;
  width: 8px;
  height: 8px;
  background-color: ${({theme}) => theme.colors.sundown100};
  border-radius: 50%;
  transform: translateY(50%);
  /* box-shadow: 0 4px 9px -1px #FF8D3C; */

}
  
`;
