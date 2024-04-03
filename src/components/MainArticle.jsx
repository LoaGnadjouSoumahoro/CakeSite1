// import rectangle13 from '../assets/Rectangle 13.png';
// import rectangle14 from '../assets/Rectangle 14.png';

import ItemCake from './ItemCake';

const MainArticle = () => {
  return (
    <div>
      <h3>Popular cakes</h3>
      <div className='cakeList'>
        <ItemCake />
        <ItemCake />
        <ItemCake />
      </div>
    </div>
  );
};

export default MainArticle;
