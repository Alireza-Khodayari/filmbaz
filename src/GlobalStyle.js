import { createGlobalStyle } from "styled-components";
import { pallete } from "./theme";

export const GlobalStyle = createGlobalStyle`
html {
    font-size: 10px;
}
body {
    font-family: 'Lato';
    background-color: ${pallete.bg};
    color: ${pallete.mainColor};
    font-size: 2.4rem;
}
* {
    margin: 0;
    padding: 0;
}
*, *::before, *::after {
    box-sizing: border-box;
}
ul , ol {
    list-style: none;
}
a {
    text-decoration: none;
}
/* a:link {
  color: #FFF;
} */
/* a:active {
    columns: #FFF;
} */
a:visited {
  color: #FFF;
}
.fontSize-24 {
    font-size: 24px;
}
.h-full {
    height:100%;
}
.relative {
    position: relative;
}
.flex {
    display: flex;
}
.space-between {
    justify-content: space-between;
}
.justify-center {
    justify-content: center;
}
.flex-wrap {
    flex-wrap: wrap;
}
.align-center {
    align-items: center;
}
.gap-5 {
    gap: 5px;
}
.gap-10 {
    gap: 10px;
}
.gap-15 {
    gap: 15px;
}
.gap-20 {
    gap: 20px;
}
.gap-40 {
    gap: 40px;
}
`