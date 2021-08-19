import React from 'react';

const TrainingBlock = (props) => {
  const { id } = props;

  return (
    <section className='training-block' id={id}>
      <div className='container'>
        <div className='training-content'>
          <h1>itra direct entry level 3</h1>
          <h2>DOEL</h2>
          <p>
            Deelnemers op dit niveau kunnen, als onderdeel van een team en onder
            leiding van een teamleader, reageren op een incident waar technische
            hoogte redding is genoodzaakt. Deelnemers beheersen de basis
            manoeuvres met een stretcher op hoogte en basis rope access
            technieken voor bereikbaarheid en behandeling van een patiënt.
          </p>
          <br />
          <h2>Voor</h2>
          <p>
            Reddingsteams die reageren op onbekende en complexe incidenten op
            hoogte en uit diepte.
          </p>
          <br />
          <h2>Noodzakelijke voorkennis</h2>
          <p>
            ITRA rope level 1 & 2 of aantoonbare kennis van hoogte redding en/of
            rope access (minimaal level 2).
          </p>
        </div>
        <div className='training-details'>
          <h2>Details</h2>
          <div className='works'>
            <span>
              <span class='arrow-horizontal'>{'>>'}</span>6 dagen, inclusief
              examen
            </span>
          </div>
          <div className='works'>
            <span>
              <span class='arrow-horizontal'>{'>>'}</span>Inclusief:
              student-lidmaatschap ITRA, materiaal en lunch
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
              <span class='arrow-horizontal'>{'>>'}</span>€ 1250, – excl. BTW.
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
export default TrainingBlock;
