import React from 'react';

const TrainingBlock5 = (props) => {
  const { id } = props;

  return (
    <section className='training-block' id={id}>
      <div className='container'>
        <div className='training-content'>
          <h1>Advanced Confined Space Rescue</h1>
          <h2>DOEL</h2>
          <p>
          Deelnemers op dit niveau kunnen, als onderdeel van een team en onder leiding van een team leader, reageren op complexe incidenten in besloten ruimten waar men te maken kan krijgen met een slechte atmosfeer. Deelnemers zijn in staat onafhankelijke adembescherming te gebruiken, mechanische ventilatie dan wel afzuiging aan te leggen en technische touwsystemen op te bouwen om een patiënt te kunnen bevrijden en behandelen. Een grote verscheidenheid aan gas en meetapparatuur zal aan bod komen evenals het opstellen van risicoanalyses, risicomanagement en het opstellen van een reddingsplan.
          </p>
          <br />
          <h2>Voor</h2>
          <p>
          Reddingsteams die moeten kunnen reageren op onbekende en risicovolle besloten ruimte reddingen.
          </p>
          <br />
          <h2>Noodzakelijke voorkennis</h2>
          <p>
          ITRA rope level 3 of vergelijkbaar en een geldig certificaat gebruik onafhankelijke adembescherming.
          </p>
        </div>
        <div className='training-details'>
          <h2>Details</h2>
          <div className='works'>
            <span>
              <span class='arrow-horizontal'>{'>>'}</span>5 dagen
            </span>
          </div>
          <div className='works'>
            <span>
              <span class='arrow-horizontal'>{'>>'}</span>Inclusief materiaal, lunch en bewijs van deelname
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
              <span class='arrow-horizontal'>{'>>'}</span>€ 1400, – excl. BTW.
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
export default TrainingBlock5;
