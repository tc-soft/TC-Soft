import React from 'react';
import {useParams} from "react-router-dom";
import Header from '../components/Header';
import InstructionsInfo from '../components/Instructions/InstructionsInfo';
import Instruction1 from '../components/Instructions/Instructions/Instruction01/Instruction01';
import Instruction2 from '../components/Instructions/Instructions/Instruction02/Instruction02';
import Instruction3 from '../components/Instructions/Instructions/Instruction03/Instruction03';

import Footer from '../components/Footer';
import '../styles/pages/Instructions.scss';

function InstructionsPage() {
  let { id } = useParams();
  return (
    <React.Fragment>
        <Header />
          
        {(() => {
          switch (id) {
            case 'Instruction01': return (<Instruction1 />)
            case 'Instruction02': return (<Instruction2 />)
            case 'Instruction03': return (<Instruction3 />)
            default: return (<InstructionsInfo />)
          }
        })()}     
        
        <Footer />
    </React.Fragment>
  );
}

export default InstructionsPage;
