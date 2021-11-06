import React from "react";
import Button from "../../styles/GlobalComponents/Button";
import { Section } from "../../styles/GlobalComponents";
import { MdOpenInNew } from "react-icons/md";
import { FRONT_END_URL } from "../utils";

const Blog = () => {
    return (
        <Section>
            <a href={FRONT_END_URL} target={'_blank'}>
                <Button disableHover>Check out blog! <MdOpenInNew style={{ marginLeft: 5 }} /></Button>
            </a>
        </Section>

    )
}

export default Blog