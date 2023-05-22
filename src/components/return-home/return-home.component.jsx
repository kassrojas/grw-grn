import { Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './return-home.styles.scss';

const ReturnHome = () => {
  return (
    <>
      <div className="return-home-container">
        <Link className='return-home-link' to='/'>
          This path does not exist. <br />
          Please visit the homepage <br />
          <CrwnLogo />
        </Link>
      </div>
    </>
  )
};

export default ReturnHome;