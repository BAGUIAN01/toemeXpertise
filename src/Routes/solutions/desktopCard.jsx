import { Image } from 'react-bootstrap';
import '../../Styles/solutions_general.css';

function DisplayImage() {
  return (
    <div id='desktopSolutionImage'>
        <div className="image-container">
            <Image src="/images/solutions/desktopApp/ERP.png" roundedCircle style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
        </div>
        <div className="image-container">
            <Image src="/images/solutions/desktopApp/sgbd.png" roundedCircle style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
        </div>
        <div className="image-container">
            <Image src="/images/solutions/desktopApp/ss.png" roundedCircle style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
        </div>
    </div>   
  );
}

export default DisplayImage;
