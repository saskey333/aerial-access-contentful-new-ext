import React from 'react';
import '../../../styles/styles.scss';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import imageOne from "../../../images/slider/abs-logo.png"
import imageTwo from "../../../images/slider/sep.png"
import imageThree from "../../../images/slider/xs-logo.png"
import imageFour from "../../../images/slider/skylotec.png"
import imageFive from "../../../images/slider/harken-industrial_logo.png";

const CollectionNew = (props) => {
  const { categories } = props;

  return  (
    <section className="container">

      <h1>Categorieen</h1>
      <div className='product-collections'>
      <a className="categorie_container" href="/">
      <div>
      <h1>Rail systeem</h1>
      <p>Rope Access-rails van Aerial-Access maken het mogelijk dat meerdere rope access medewerkers snel en efficiënt kunnen traverseren zonder de noodzaak van rigging en de-rigging. (abseil rail)</p>
      <a href="">ontdek rail systeem</a>
      <img src="//images.ctfassets.net/8cxl6mpst1xl/3cWv9g6BM83G49kqegbDn8/760704ef3f14c2b93b4be055ef8481cf/railsystem.png" alt=""/>
      </div>
      </a>
      <a className="categorie_container" href="/">
      <div>
      <h1>Anker point
</h1>
      <p>Abseil ankers voor rope access Abseil ankers zijn een veelzijdige oplossing om rope access mogelijk te maken. Het systeem is zo ontworpen dat het aan verschillende oppervlaktestructuren en materialen kan worden bevestigd, om een veilige toegang tot zowel interne als externe ruimten te creëren.</p>
      <a href="">ontdek rail systeem</a>
      <img src="//images.ctfassets.net/8cxl6mpst1xl/3cWv9g6BM83G49kqegbDn8/760704ef3f14c2b93b4be055ef8481cf/railsystem.png" alt=""/>
      </div>
      </a>
      <a className="categorie_container" href="/">
      <div>
      <h1>Rail systeem</h1>
      <p>Rope Access-rails van Aerial-Access maken het mogelijk dat meerdere rope access medewerkers snel en efficiënt kunnen traverseren zonder de noodzaak van rigging en de-rigging. (abseil rail)</p>
      <a href="">ontdek rail systeem</a>
      <img src="//images.ctfassets.net/8cxl6mpst1xl/3cWv9g6BM83G49kqegbDn8/760704ef3f14c2b93b4be055ef8481cf/railsystem.png" alt=""/>
      </div>
      </a>
      <a className="categorie_container" href="/">
      <div>
      <h1>Rail systeem</h1>
      <p>Rope Access-rails van Aerial-Access maken het mogelijk dat meerdere rope access medewerkers snel en efficiënt kunnen traverseren zonder de noodzaak van rigging en de-rigging. (abseil rail)</p>
      <a href="">ontdek rail systeem</a>
      <img src="//images.ctfassets.net/8cxl6mpst1xl/3cWv9g6BM83G49kqegbDn8/760704ef3f14c2b93b4be055ef8481cf/railsystem.png" alt=""/>
      </div>
      </a>
      </div>
      <Carousel slidesPerPage={2}
      slidesPerScroll={2}
      animationSpeed={1500}
      autoPlay={2000}
      offset={50}
      itemWidth={350}
      clickToChange
      centered>

        <img src={imageOne} />
        <img src={imageTwo} />
        <img src={imageThree} />
        <img src={imageFour} />
        <img src={imageFive} />
      </Carousel>
    </section>
  );
};

export default CollectionNew;
