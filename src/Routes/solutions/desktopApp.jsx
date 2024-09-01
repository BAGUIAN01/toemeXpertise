import React, {useEffect} from 'react';
import { Container } from 'react-bootstrap';

import '../../Styles/solutions_general.css';

import SolutionSectionTitle from './solutionSectionTitle';
import DesktopAppCatch from './desktopAppCatch';
import Navbar from '../../components/Navbar';
import AtomeHero from '../../components/AtomeHero';
import Footer from '../../components/Footer';
import DisplaySolutions from './solutionItems';
import AddTechItems from './solutionTech';
import SoftwareAppTextSection from './desktopApptextSection';
import DisplayImage from './desktopCard';

import { 
  desktopAppSolutionsData, 
  DesktopSolutionMultiTextData,
  Tools,
  DataBaseData,
  CodingData,
  PlateForm
} from '../../components/data/Solutions_desktopAppData';
 



function DesktopAppSolution (){
  const techdata = [
    {title:"Coding", data:CodingData},
    {title:"Tools", data:Tools},
    {title:"PlateForm", data:PlateForm},
    {title:"Data Base", data:DataBaseData},
  ]

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='DesktopAppSolution'>
      <Container fluid>
        <Navbar/>
      </Container>
      
      <Container fluid>
        <AtomeHero
          cName="hero-mid"
          heroImg="/images/solutions/desktopApp/heroImage.jpg"
          title = "Nos Services Logiciels:"
          multiText = {DesktopSolutionMultiTextData}
          btnClass="hide"
        /> 

        <div>
          <DesktopAppCatch/>
          <SolutionSectionTitle title="Faites le bon choix pour votre Business"/>
          <DisplaySolutions solutiondata={desktopAppSolutionsData}/>
          <DisplayImage/>
          <hr></hr>
          <SolutionSectionTitle title="Toeme Software Technologies"/>
          <div id='techarea'>
            {techdata && techdata.map((item,index) => (
              <AddTechItems key={index} title={item.title} data={item.data}/>
            ))} 
          </div>
          <SoftwareAppTextSection/>
        </div>
      </Container>

      <Container fluid>
        <Footer/>
      </Container>
    </div>  
  )
}

export default DesktopAppSolution;