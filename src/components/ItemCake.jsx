import rectangle12 from '../assets/Rectangle 12.png';

const ItemCake = () => {
  return (
    <>
      <div className='itemCake'>
        <img src={rectangle12} alt='' className='imageCakes' />
        <div className='cakeDescription'>
          <p>French Buttercream</p>
          <div className='cakeNumber'>
            <p>
              <span></span> 4.5
            </p>
            <p>$4.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCake;
