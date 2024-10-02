import Header from '../components/Header'
import hysteria from '../assets/hysteria.jpeg'
import roses from '../assets/roses.jpeg'
import blues from '../assets/blues.jpeg'
import hysteria2 from '../assets/hysteria2.jpeg'

const Home = () => {
  return (
    <main className='home'>
       <div className="image-text">
       <div className="images">
       <img src={roses} alt="Garden" />
       <img src={hysteria2} alt="Garden" />
       <img src={hysteria} alt="Garden" />
       <img src={blues} alt="Garden" />
       </div>
       <div className="text">
        <p className="arabic">
        ٱلَّذِينَ ءَامَنُوا۟ وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ ٱللَّهِ ۗ أَلَا بِذِكْرِ ٱللَّهِ تَطْمَئِنُّ ٱلْقُلُوبُ
        </p>
        <p className="english">Those who believe and whose hearts find comfort in the remembrance of Allah. Surely in the remembrance of Allah do hearts find comfort.</p>
        <span className="verse">Qur’an, 13 : 28</span>
       </div>
       </div>
       <Header/>
    </main>
  )
}

export default Home
