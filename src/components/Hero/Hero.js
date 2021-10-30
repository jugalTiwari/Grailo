import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Image from "next/image";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Grailo
        </SectionTitle>
        <SectionText>
          Fully Functional MVP, Product Launch, Go-To-Market, Real Customer Feedback
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;