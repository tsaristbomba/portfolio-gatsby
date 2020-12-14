import styled from "styled-components";
import { primary, secondary, tertiary } from "../../data/colors";

export const PlaylistsContainer = styled.div`
  background: ${primary};
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 160px);
`;
export const PlaylistsWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;
export const PlaylistsTextWrapper = styled.div`
  width: 100%;
`;
export const PlaylistsH1 = styled.h1`
  color: ${secondary};
  font-size: 18px;
  font-weight: bolder;
`;
export const PlaylistsP = styled.p`
  color: ${tertiary};
`;
