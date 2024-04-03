import { StarOutlineRounded } from '@mui/icons-material';
import rectangle12 from '../assets/Rectangle 12.png';

const ItemCake = ({ nameCake, fotoCake }) => {
  return (
    <>
      <div className='itemCake'>
        <img src={fotoCake} alt='' className='imageCakes' />
        <div className='cakeDescription'>
          <p>{nameCake}</p>
          <div className='cakeNumber'>
            <p>
              <span className='icon-star'>
                <StarOutlineRounded />
              </span>
              4.5
            </p>
            <p className='price'>$4.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCake;
