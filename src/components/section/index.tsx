import React, {FC} from 'react';

import { SectionCore } from './SectionStyle';

export interface SectionModel {
    name: string;
    title: string;
    content: string;
}

const Section: FC<SectionModel> = ({name, title, content}) => {
    return(
        <SectionCore id={name}>
            <h1>{title}</h1>
            <p>{content}</p>
        </SectionCore>
    )
}

export default Section;