import React, {useEffect} from 'react';
import { Container } from 'react-bootstrap';

import '../../Styles/solutions_general.css';

import SolutionSectionTitle from './solutionSectionTitle';
import WebsiteCatch from './websiteCatch';
import Navbar from '../../components/Navbar';
import AtomeHero from '../../components/AtomeHero';
import Footer2 from '../../components/Footer2';
import DisplaySolutions from './solutionItems';
import AddTechItems from './solutionTech';
import WebsiteTextSection from './websitetextSection';

import { 
  websitesSolutionsData,
  websiteSolutionMultiTextData,
  CssFrameworkData,
  JsFrameworkData,
  StateManagementData,
  BackendData,
  DataBaseData,
  Api_CPData,
  AuthentificationData,
  CloudData,
  versionControlData,
  TestingMonitoringData,
  servelessCMSData,
  SEO_PO_Data
} from '../../components/data/Solutions_websiteData';




function WebSiteSolution (){
  const techdata = [
    {title:"CSS Framework", data:CssFrameworkData},
    {title:"JS Framework", data:JsFrameworkData},
    {title:"State Handling", data:StateManagementData},
    {title:"API CP", data:Api_CPData},
    {title:"Backend", data:BackendData},
    {title:"Data Base", data:DataBaseData},
    {title:"Version CTL & CI/CD", data:versionControlData},
    {title:"Authentification", data:AuthentificationData},
    {title:"Cloud", data:CloudData},
    {title:"Testing & Monitoring", data:TestingMonitoringData},
    {title:"CMS & Serverless Computing", data:servelessCMSData},
    {title:"SEO & PO", data:SEO_PO_Data}
  ]

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className='WebSiteSolution'>
      <Container fluid>
        <Navbar/>
      </Container>
      
      <Container fluid>
        <AtomeHero
          cName="hero-mid"
          heroImg="/images/solutions/website/heroImage.png"
          title = "Nos Services Webs:"
          multiText = {websiteSolutionMultiTextData}
          btnClass="hide"
        /> 

        <div>
          <WebsiteCatch/>
          <SolutionSectionTitle title="Faites le bon choix pour votre Business"/>
          <DisplaySolutions solutiondata={websitesSolutionsData} con/>
          <hr></hr>
          <SolutionSectionTitle title="Toeme Web Technologies"/>
          <div id='techarea'>
            {techdata && techdata.map((item,index) => (
              <AddTechItems key={index} title={item.title} data={item.data}/>
            ))} 
          </div>
           <WebsiteTextSection/>
        </div>
      </Container>

      <Container fluid>
        <Footer2/>
      </Container>
    </div>  
  )
}

export default WebSiteSolution;