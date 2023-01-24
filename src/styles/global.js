import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
  color: ${({theme}) => theme.COLORS.WHITE};
  -webkit-font-smoothing: antialiased;
}

body, input, button, textarea {
  font-family: 'Montserrat', sans-serif;
  font-size:  12px;
  outline: none;
}
`;