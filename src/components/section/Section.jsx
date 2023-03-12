/* Style */
import { Container } from "./Section.style";

export default function Section({ children }) {
  return <Container data-aos="fade-right">{children}</Container>;
}
