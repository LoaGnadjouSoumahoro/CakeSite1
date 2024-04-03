const MAinSection = () => {
  return (
    <div className='mainSection'>
      <h1 className='title-home title-home-black '>Ollie's</h1>
      <h1 className='title-home ros-color'>Cup Cakes</h1>
      <br />
      <p>
        Cras porttitor massa ut turpis viverra venenatis. Cras auctor magna ut augue accumsan ultrices. Maecenas vel
        nulla at enim facilisis laoreet. Sed mollis venenatis diam vitae dignissim. Sed orci sapien, viverra ac
        vestibulum a, molestie et nibh. Pellentesque leo purus, ornare vel urna at, placerat feugiat leo. Nunc in luctus
        nisi, vitae iaculis felis. Maecenas a viverra massa.
      </p>
      <br />
      <input type='text' placeholder='Enter Zipcode nearest store' />
      <br />
      <br />
      <br />
      <div className='mainHome-button '>
        <button>Delivery</button>
        <p>or</p>
        <button className='color-black'>Pickup</button>
      </div>
    </div>
  );
};

export default MAinSection;
