import React  from 'react';
import "../Styles/AtomeHero.css";
import TypeWriterEffect from 'react-typewriter-effect';

function AtomeHero(props) {
  const hasMultiText = Array.isArray(props.multiText) && props.multiText.length > 0;
  const hasTitle = typeof props.title === 'string';
   

  return (
    <div className='AtomeHero'>
      <div className={props.cName}>
        <img src={process.env.PUBLIC_URL + props.heroImg} alt="img" />
        <div className="hero-txt">
          {props.title && hasTitle && (
            <TypeWriterEffect
              textStyle={{
                fontSize: "2rem",
                fontWeight: 500,
                WebkitBackgroundClip: "text",
                
              }}
              startDelay={100}
              cursorColor="black"
              text={props.title}
              typeSpeed={300}
              hideCursorAfterText={true}
              loop={true}
            />
          )}
          {props.multiText && hasMultiText && (
            <TypeWriterEffect
              textStyle={{
                fontWeight: 500,
                fontSize: '1.3em',
                padding: "0.5rem 0 2rem 0"
              }}
              startDelay={4000}
              cursorColor="#3F3D56"
              multiText={props.multiText}
              multiTextDelay={1000}
              typeSpeed={300}
              multiTextLoop={false} 
            />
          )}
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
        </div>
      </div>
    </div>
  );
}

export default AtomeHero;