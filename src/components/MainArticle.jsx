import rectangle12 from '../assets/Rectangle 12.png';
import rectangle13 from '../assets/Rectangle 13.png';
import rectangle14 from '../assets/Rectangle 14.png';

import { Rectangle } from '@mui/icons-material';
import ItemCake from './ItemCake';

const MainArticle = () => {
  return (
    <div className='cakeContainer'>
      <div className='cakeList-title'>
        <h3>Popular cakes</h3>
      </div>
      <div className='cakeList'>
        <ItemCake nameCake='Fench Buttercream' fotoCake={rectangle12} />
        <ItemCake nameCake='Brownie Chunks' fotoCake={rectangle13} />
        <ItemCake nameCake='Chocolate Drizzle' fotoCake={rectangle14} />
      </div>
    </div>
  );
};

export default MainArticle;
