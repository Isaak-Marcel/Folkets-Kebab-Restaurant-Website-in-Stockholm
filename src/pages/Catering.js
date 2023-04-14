import React from 'react';
import HittaOss from '../components/HittaOss';
import GridOfImages from '../components/GridOfImages';
import { Helmet } from 'react-helmet-async';


function Catering() {
  const images = [];
  const importAll = (r) => r.keys().forEach(key => images.push({ url: r(key), alt: '' }));
  importAll(require.context('../Assets/images/Catering/', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className='button-aboutUs-cont'>
      <Helmet>
          <title>Catering</title>
          <meta name="description" content="Vi erbjuder cateringtjänster för alla typer av evenemang. Vi tillhandahåller en mängd olika menyer som passar alla smaker och budgetar." />
          <link rel="canonical" href="/catering"/>
      </Helmet>
      <h1>Catering</h1>
      <p className='om-oss-p' style={{fontWeight: 'normal', marginBottom: '30px'}}>Folkets Kebab erbjuder cateringtjänster för alla typer av evenemang. Vi tillhandahåller en mängd olika menyer som passar alla smaker och budgetar. Vårt team av erfarna kockar och personal är dedikerade att ge dig den bästa matupplevelsen och service. Kontakta oss för mer information om hur vi kan hjälpa dig att göra ditt nästa evenemang minnesvärt.</p>
      <HittaOss />
      <div>
        <GridOfImages images={images} />
      </div>
    </div>
  )
}

export default Catering;
