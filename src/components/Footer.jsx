import React from "react";
import { SocialIcon } from 'react-social-icons';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
 

import '../Styles/FooterStyle.css';
import { community, help, others,products } from "./data/Data";


const Footer = () => {
  
    const renderFooterItems = (items) => {
        const Title = items.length > 0 ? items[0].title : '';
        const newList = items.slice(1);
        return (
            <div>
                <h4 style={{paddingBottom:'10px'}}>{Title}</h4>
                {newList.map((item, index) => (
                    <div key={index} style={{display:'block', textAlign:'center'}}>
                        <a style={{textDecoration:'none',color:'wheat'}} href="/">{item.name}</a>
                    </div>
                ))}
            </div>
        )
    };


  return (
    <footer className="footer">
        <div id="footerSocialMedia">
            <div>
                <SocialIcon id="footermediaIcon" url='www.facebook.com' target="_blank" href='/'/>
                <SocialIcon id="footermediaIcon"  url='www.youtube.com' target="_blank" href='/'/>
                <SocialIcon id="footermediaIcon"  url='www.linkedin.com' target="_blank" href='/'/>
                <SocialIcon id="footermediaIcon"  url='www.github.com' target="_blank" href='https://github.com/toemeXpertise'/>
            </div>  
            <div id="ToemeSentence">🤖Let unsleash creativity🤖</div>
            <div>
                <InputGroup className="gap-2">
                    <Form.Control
                    placeholder="@email pour les news"
                    aria-label="email"
                    style={{boxShadow:'none'}}
                    />
                    <Button type="submit" className="bg-[#044444] ">S'abonner</Button>
                </InputGroup>
            </div>
        </div>

        <div id="footerPayload">
            {renderFooterItems(products)}
            {renderFooterItems(help)}
            {renderFooterItems(others)}
            {renderFooterItems(community)}
        </div>

        <hr></hr>

        <div>
            <p> <span>Copyright © 2024 |   ToemeXpertise  | Let unsleash creativity | Tous droits Reservés.</span></p>
        </div>

    </footer>
  );
};

export default Footer;
