import React from 'react';

const TrainingBlock6 = (props) => {
  const { id } = props;

  return (
    <section className='training-block' id={id}>
      <div className='container'>
        <div className='training-content'>
          <h1>Scenario training voor reddingsteams</h1>
          <h2>DOEL</h2>
          <p>
          Wij bieden hoogte-reddingsteams de mogelijkheid om hun kennis op peil te houden en naar een hoger niveau te tillen. Dit doen we door middel van realistische scenario training.

          </p>
          <br />
          <h2>Voor</h2>
          <p>
          Reeds bestaande hoogte-reddingsteams.
          </p>
          <br />
          <h2>Noodzakelijke voorkennis</h2>
          <p>
          Opleiding tot rescue technician.
          </p>
        </div>
        <div className='training-details'>
          <h2>Details</h2>
          <div className='works'>
            <span>
              <span class='arrow-horizontal'>{'>>'}</span>Aantal dagen in overleg
            </span>
          </div>
          <div className='works'>
            <span>
              <span class='arrow-horizontal'>{'>>'}</span>Alle trainingsdagen op de trainingslocatie of verschillende buiten locaties
            </span>
          </div>
          <div className='works'>
            <span>
              <span class='arrow-horizontal'>{'>>'}</span>Prijs op aanvraag
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
export default TrainingBlock6;
