import React from 'react'
import './portfolio.css'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'


const portfolio = () => {
  return (
    <section id="portfolio">
      <h5> Projets réalisés récemment </h5>
      <h2> Portfolio </h2>

      <div className="container portfolio_container">
        <article className="portfolio_items">
          <div className="portfolio_item_img">
            <img src={img1} alt="portfolio image illustration travail"/>
          </div>
            <h3> Site audiovisuelle </h3>
            <div>
              <a href="https://github.com/nixiz0/Visuelium-V2" target="_blank" className='btn'> Accéder au code </a>
              <a href="https://www.youtube.com/watch?v=vtHYmkFKj2Y&t=77s&ab_channel=HeyInitium" target="_blank" className='btn btn-primary'> Démo création </a>
            </div>
        </article>
        <article className="portfolio_items">
          <div className="portfolio_item_img">
            <img src={img2} alt="portfolio image illustration travail"/>
          </div>
            <h3> Quiz en ligne </h3>
            <div>
              <a href="https://github.com/nixiz0/QuizItium" target="_blank" className='btn'> Accéder au code </a>
              <a href="https://www.youtube.com/watch?v=OCrmBF25Wbw&t=1s&ab_channel=HeyInitium" target="_blank" className='btn btn-primary'> Démo création </a>
            </div>
        </article>
        <article className="portfolio_items">
          <div className="portfolio_item_img">
            <img src={img3} alt="portfolio image illustration travail"/>
          </div>
            <h3> Outils pour dev front-end </h3>
            <div>
              <a href="https://github.com/nixiz0/Outils-CSS" target="_blank" className='btn'> Accéder au code </a>
              <a href="https://www.youtube.com/watch?v=fWQoyMghZig&t=3s&ab_channel=HeyInitium" target="_blank" className='btn btn-primary'> Démo création </a>
            </div>
        </article>
        <article className="portfolio_items">
          <div className="portfolio_item_img">
            <img src={img4} alt="portfolio image illustration travail"/>
          </div>
            <h3> Salle de sport </h3>
            <div>
              <a href="https://github.com/nixiz0/ECF-Athletice-Sports" target="_blank" className='btn'> Accéder au code </a>
              <a href="https://www.youtube.com/watch?v=I1t2emU6pe4&t=78s&ab_channel=HeyInitium" target="_blank" className='btn btn-primary'> Démo création </a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio