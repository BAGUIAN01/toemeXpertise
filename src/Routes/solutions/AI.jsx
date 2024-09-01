import React, {useEffect} from 'react';
import { Container } from 'react-bootstrap';

import '../../Styles/solutions_general.css';

import SolutionSectionTitle from './solutionSectionTitle';
import AICatch from './AICatch';
import Navbar from '../../components/Navbar';
import AtomeHero from '../../components/AtomeHero';
import Footer from '../../components/Footer';
import DisplaySolutions from './solutionItems';
import AddTechItems from './solutionTech';
 
import { 
  aiAndDataScienceSolutionsData,
  AIAndDataScienceServices,
  data_Predictivemodeling,
  data_Machine_Learning,
  data_Deep_Learning,
  data_NLP,
  data_Computer_vision,
  data_Pattern_recognition,
  data_Sentiment_analysis,
  data_Big_Data_Analysis,
  data_Data_visualization,
} from '../../components/data/Solutions_AIData';



 
function AISolution (){
  const techdata = [
    {title:"Predictive modeling", data:data_Predictivemodeling},
    {title:"Machine Learning", data:data_Machine_Learning},
    {title:"Deep Learning", data:data_Deep_Learning},
    {title:"NLP & LLM", data:data_NLP},
    {title:"Computer vision", data:data_Computer_vision},
    {title:"Pattern recognition", data:data_Pattern_recognition},
    {title:"Sentiment analysis", data:data_Sentiment_analysis},
    {title:"Big Data analysis", data:data_Big_Data_Analysis},
    {title:"Data_visualization", data:data_Data_visualization},
  ]

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className='AISolution'>
      <Container fluid>
        <Navbar/>
      </Container>
      
      <Container fluid>
        <AtomeHero
          cName="hero-mid"
          heroImg="/images/solutions/ai-data-science/heroImage.jpg"
          title = "Nos services AI-DataScience:"
          multiText = {AIAndDataScienceServices}
          btnClass="hide"
        /> 

        <div>
          <AICatch/>
          <SolutionSectionTitle title="Faites le bon choix pour votre Business"/>
          <DisplaySolutions solutiondata={aiAndDataScienceSolutionsData} con/>
          <hr></hr>
          <SolutionSectionTitle title="Toeme AI Technologies"/>
          <div id='techarea'>
            {techdata && techdata.map((item,index) => (
              <AddTechItems key={index} title={item.title} data={item.data}/>
            ))} 
          </div>
        </div>
      </Container>

      <Container fluid>
        <Footer/>
      </Container>
    </div>  
  )
}

export default AISolution;