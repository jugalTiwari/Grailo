import Button from "../../styles/GlobalComponents/Button";
import {Section} from "../../styles/GlobalComponents";
import React from "react";
import {FRONT_END_URL} from "../utils";

const Blog = () => {
    return (
       <Section>
           <a href={FRONT_END_URL} target={'_blank'}>
               <Button disableHover>Check out blog!</Button>
           </a>
       </Section>

    )
}

export default  Blog