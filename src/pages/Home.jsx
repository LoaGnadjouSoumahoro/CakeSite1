import MAinSection from '../components/MAinSection';
import MainSide from '../components/MainSide';
import MainArticle from '../components/MainArticle';
import '../css/home.css';

const Home = () => {
  return (
    <div className=' layoutHome'>
      <div className='content1 '>
        <MAinSection />
      </div>
      <div className='content2 centered'>
        <MainSide />
      </div>
      <div className='content3 centered'>
        <MainArticle />
      </div>
    </div>
  );
};

export default Home;
