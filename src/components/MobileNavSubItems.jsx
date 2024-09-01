import React from 'react';
import { overlaySolutionsData, overlayProductsData} from './data/Data';


const DisplayMobileNavSubItems = ({title}) =>{
  
  const titleMappings = {
    "solutions": overlaySolutionsData,
    "produits": overlayProductsData,
  };
  
  let data = null;
  const lowerCaseTitle = title.toLowerCase();
  if (titleMappings.hasOwnProperty(lowerCaseTitle)) {
    data = titleMappings[lowerCaseTitle];
  }
  

  return (
    <div id='mobileNavSubItemContainer'>
      {data && data.map((item, index) =>(
        <a key={index}  href={item.explore}>
          <img style={{height:'48px', width:'48px', marginRight:'5px'}} src={item.img_url} alt={item.title} />
          <h6>{item.title}</h6>
        </a>
      ))}
    </div>
  );
}

export default DisplayMobileNavSubItems;
