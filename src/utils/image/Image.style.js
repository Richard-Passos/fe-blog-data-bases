/* Style */
import ImageNext from "next/image";

/* Logic */
import styled from "styled-components";

export const MyImage = styled(ImageNext)`
  width: ${({ width }) => width / 10}rem;
  max-width: 100%;
  height: ${({ height }) => height / 10}rem;
  max-height: 100vw;
  border-radius: 1rem;
`;
