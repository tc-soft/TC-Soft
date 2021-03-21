import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as InstructionDoc1 } from '../../images/instructionDoc1.svg';
import { ReactComponent as IconDownload } from '../../images/iconDownload.svg';
import { ReactComponent as IconBook } from '../../images/iconBook1.svg';

const Instruction1 = ({title, date, name, description, link}) => (
    <React.Fragment>
        <article className="instruction">
            
            <div className="instruction__icon1">
                <InstructionDoc1/>
            </div>

            <div className="instruction__box1">
                <div className="instruction__header1">
                    <span>{title}</span>
                    <span>Data publikacji: {date}</span>
                </div>

                <div className="instruction__box2">
                    <div className="instruction__box2Txt1">
                        <h3>{name}</h3>
                    </div>

                    <div className="instruction__box2Line"></div>

                    <p className="instruction__box2Info">
                        {description}
                    </p>
                </div>

                <div className="instruction__box3">
                    
                    <Link to={link}>
                        <IconBook className="instruction__box3IconBook"/>
                    </Link>

                    <IconDownload className="instruction__box3IconDownload"/>
                </div>
            </div>

        </article>
    </React.Fragment>
)

export default Instruction1;