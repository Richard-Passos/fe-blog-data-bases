/* Style */
import colors from "@/styles/colors";

/* Logic */
import styled from "styled-components";

export const Container = styled.section`
  padding: 1rem;
  margin-bottom: 3rem;
  font-size: 2rem;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  .invert-colors {
    background-color: ${colors.secondary};
    color: ${colors.primary};
  }

  ::before {
    content: "";
    width: 20%;
    height: 0.1rem;
    background-color: ${colors.secondary};

    position: absolute;
    bottom: -1rem;
    right: 40%;
    z-index: 1;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    text-indent: 1rem;
    line-height: 1.5;
  }

  img {
    margin: 0 auto;
  }

  .s-container {
    margin-top: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .m-container {
    padding: 2rem;
    margin-top: 1rem;
    border-radius: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .text-link {
    text-decoration: underline;
  }

  .text-image {
    margin: 0.5rem 0;
  }

  .list {
    padding-left: 3rem;
    list-style: circle;

    .item {
      font-size: 0.8em;
      line-height: 1.2;

      :not(:last-child) {
        margin-bottom: 0.5rem;
      }
    }
  }
`;

export const SectionDemonstration = styled(SectionContainer)`
  position: relative;

  :not(:last-of-type) {
    ::before {
      content: "";
      width: 20%;
      height: 0.1rem;
      background-color: ${colors.secondary};

      position: absolute;
      bottom: -1rem;
      right: 40%;
      z-index: 1;
    }
  }

  small {
    font-size: 0.8em;
  }

  .container {
    border: 0.1rem dashed ${colors.secondary};
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    & > * {
      :first-child {
        padding: 2rem 1rem 0;
        text-align: center;
      }

      padding: 0 1rem;
    }
  }

  .explaning {
    padding: 1rem 2rem;
    color: ${colors.primary};
    background-color: ${colors.secondary};
    border: 0.1rem solid ${colors.primary};
    border-radius: 2rem;
  }
`;
