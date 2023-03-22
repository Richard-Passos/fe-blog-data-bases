/* Components */
import { Container } from "./Header.style";
import Link from "next/link";
import { Nav } from "../nav";

/* Logic */
import { useContext } from "react";
import { HeaderContext } from "../layout/Layout";

export default function Header({ links }) {
  const context = useContext(HeaderContext);

  return (
    <>
      <Container className={context ? `disappear` : ""}>
        <div data-aos="slide-down">
          <Link href="https://github.com/Richard-Passos" target="_blank">
            <h2 className="logo">
              <span>{"<"}</span>RichardP<span>{"/>"}</span>
            </h2>
          </Link>
        </div>

        <div data-aos="slide-down">
          <Nav>
            {links.map((link) => (
              <li key={link.href}>
                {link.samePage ? (
                  <a href={link.href} className="item">
                    {link.name}
                  </a>
                ) : (
                  <Link key={link.href} href={link.href} className="item">
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </Nav>
        </div>
      </Container>

      {/* Same Container just to placholder */}
      <Container className="placeholder">
        <div>
          <a href="">
            <h2 className="logo">
              <span>{"<"}</span>RichardP<span>{"/>"}</span>
            </h2>
          </a>
        </div>

        <div>
          <Nav>
            {links.map((link) => (
              <li key={link.name}>
                {
                  <a href="" className="item">
                    {link.name}
                  </a>
                }
              </li>
            ))}
          </Nav>
        </div>
      </Container>
    </>
  );
}
