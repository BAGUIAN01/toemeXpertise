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
import MobileAppTextSection from './mobileApptextSection';
import { 
  mobileAppSolutionsData, 
  mobileSolutionMultiTextData,
  Tools,
  DataBaseData,
  PlateForm
} from '../../components/data/Solutions_mobileAppData';
 



function MobileAppSolution (){
  const techdata = [
    {title:"Tools", data:Tools},
    {title:"PlateForm", data:PlateForm},
    {title:"Data Base", data:DataBaseData},
  ]

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className='MobileAppSolution'>
      <Container fluid>
        <Navbar/>
      </Container>
      
      <Container fluid>
        <AtomeHero
          cName="hero-mid"
          heroImg="/images/solutions/mobileApp/heroImage.jpg"
          title = "Nos Services Mobiles:"
          multiText = {mobileSolutionMultiTextData}
          btnClass="hide"
        /> 

        <div>
          <DesktopAppCatch/>
          <SolutionSectionTitle title="Faites le bon choix pour votre Business"/>
          <DisplaySolutions solutiondata={mobileAppSolutionsData}/>
          <hr></hr>
          <SolutionSectionTitle title="Toeme Mobile Technologies"/>
          <div id='techarea'>
            {techdata && techdata.map((item,index) => (
              <AddTechItems key={index} title={item.title} data={item.data}/>
            ))} 
          </div>
          <MobileAppTextSection/>
        </div>
      </Container>

      <Container fluid>
        <Footer/>
      </Container>
    </div>  
  )
}

export default MobileAppSolution;