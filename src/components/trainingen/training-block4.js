import React from 'react';

const TrainingBlock4 = (props) => {
  const { id } = props;

  return (
    <section className='training-block' id={id}>
      <div className='container'>
        <div className='training-content'>
          <h1>Rope Rescue Medic + ITLS</h1>
          <h2>DOEL</h2>
          <p>
          Deelnemers op dit niveau kunnen reageren op medische incidenten en patiënten behandelen op moeilijk bereikbare en /of afgelegen plaatsen. Deelnemers zijn in staat patiënten te stabiliseren en immobiliseren voor transport en overdracht aan medische hulpverlening. Het concept is niet nieuw en wel bekend in de tactische wereld. In samenwerking met PPA International, een toonaangevend opleidingscentrum mbt tot tactische medische trainingen, hebben we een hyperrealistische training ontwikkeld als aanvulling op International Trauma Life Support.
          </p>
          <br />
          <h2>Voor</h2>
          <p>
          Technical rope rescue technici, confined space rescue technici en rope access technici.
          </p>
          <br />
          <h2>Noodzakelijke voorkennis</h2>
          <p>
          ITRA rope level 1 & 2 of aantoonbare kennis als rope rescue technicus of rope access technicus (minimaal level 2) en geldig EHBO diploma inclusief BLS en AED.

          </p>
        </div>
        <div className='training-details'>
          <h2>Details</h2>
          <div className='works'>
            <span>
              <span class='arrow-horizontal'>{'>>'}</span>7 dagen, inclusief
              examen
            </span>
          </div>
          <div className='works'>
            <span>
              <span class='arrow-horizontal'>{'>>'}</span>Inclusief materiaal, lunch en ITLS certificaat;
            </span>
          </div>
          <div className='works'>
            <span>
              <span class='arrow-horizontal'>{'>>'}</span>Alle trainingsdagen
              vinden plaats op de trainingslocatie
            </span>
          </div>
          <div className='works'>
            <span>
              <span class='arrow-horizontal'>{'>>'}</span>Geldigheid certificaat
              3 jaar
            </span>
          </div>
          <div className='works'>
            <span>
              <span class='arrow-horizontal'>{'>>'}</span>€ 1200, – excl. BTW.
            </span>
          </div>
          <a href='/contact/' className='sign-up-training'>
            Inschrijven
          </a>
        </div>
      </div>
    </section>
  );
};
export default TrainingBlock4;
