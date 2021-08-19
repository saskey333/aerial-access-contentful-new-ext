import React from 'react';

const TrainingBlock2 = (props) => {
  const { id } = props;

  return (
    <section className='training-block' id={id}>
      <div className='container'>
        <div className='training-content'>
          <h1>ITRA/EUSR</h1>
          <h2>DOEL</h2>
          <p>
          Deelnemers op dit niveau kunnen, als onderdeel van een team en onder leiding van een teamleader, reageren op een incident waar technische hoogte redding is genoodzaakt. Deelnemers beheersen de basis manoeuvres met een stretcher op hoogte en basis rope access technieken voor bereikbaarheid en behandeling van een patiënt. Deze cursus wordt gegeven conform ITRA en EUSR leerdoelen.
          </p>
          <br />
          <h2>Voor</h2>
          <p>
          Reddingsteams die reageren op onbekende en complexe incidenten op hoogte en uit diepte.
          </p>
          <br />
          <h2>Noodzakelijke voorkennis</h2>
          <p>
          Geen
          </p>
        </div>
        <div className='training-details'>
          <h2>Details</h2>
          <div className='works'>
            <span>
              <span class='arrow-horizontal'>{'>>'}</span>10 dagen, inclusief
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
              <span class='arrow-horizontal'>{'>>'}</span>5 dagen training op de trainingslocatie, 4 dagen scenario-training op realistische locaties en
1 dag examen
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
              <span class='arrow-horizontal'>{'>>'}</span>€ 2000, – excl. BTW.
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
export default TrainingBlock2;
