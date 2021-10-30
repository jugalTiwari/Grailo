import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { AiOutlineDeploymentUnit } from 'react-icons/ai'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      We have range of technologies to suit wide variety of requirements. Starting from the Design to the Deployment, we provide all types of solutions, that best fits with you.
    </SectionText>
    <List>
      <ListItem>
          <picture>
            <DiReact size="3rem" />
          </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <AiOutlineDeploymentUnit size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Deployment</ListTitle>
          <ListParagraph>
            Experience with <br />
            Deployment Tools
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
