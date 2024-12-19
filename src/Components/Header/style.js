import styled from "styled-components";
import { pallete } from "../../theme";

export const Style = styled.div`
    .header-container {
        width: 100%;
        padding: 0 104px;
        .header {
            margin-top: 37px;
            backdrop-filter: blur(20px);
            border-radius: ${pallete.defaultRadius};
            .left {
                .logo {
                    img {
                        width: 92px;
                        height: auto;
                    }
                }
                .menu {
                    ul {
                        li {
                            a {
                                padding: 5px 10px;
                                color: ${pallete.mainColor};
                            }
                        }
                    }
                }
            }
            .right {
                ul {
                    gap: 32px;
                    li {
                        i {
                            color: ${pallete.secondaryColor};
                        }
                    }
                }
            }
        }
    }
`