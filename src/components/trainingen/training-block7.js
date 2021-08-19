import React from 'react';

const TrainingBlock7 = (props) => {
  const { id } = props;

  return (
    <section className='training-block' id={id}>
      <div className='container'>
        <div className='training-content'>
          <h1>Rope Rescue Medic trainingsdag</h1>
          <h2>DOEL</h2>
          <p>
          Het peil houden van je Rope Rescue Medic vaardigheden onder begeleiding van een (medisch) gecertificeerde trainer. Eén-daagse training om alles weer even te oefenen.          </p>
          <br />
          <h2>Voor</h2>
          <p>
          Personen met Rope Rescue Medic + ITLS certificaat of vergelijkbaar.          </p>
          <br />
          <h2>Noodzakelijke voorkennis</h2>
          <p>
          Rope Rescue Medic + ITLS certificaat of vergelijkbaar.
          </p>
        </div>
        <div className='training-details'>
          <h2>Details</h2>
          <div className='works'>
            <span>
              <span class='arrow-horizontal'>{'>>'}</span>1 dag
            </span>
          </div>
          <div className='works'>
            <span>
              <span class='arrow-horizontal'>{'>>'}</span>Inclusief materiaal en lunch
            </span>
          </div>
          <div className='works'>
            <span>
              <span class='arrow-horizontal'>{'>>'}</span>Training vind plaats op de trainingslocatie
            </span>
          </div>
          <div className='works'>
            <span>
              <span class='arrow-horizontal'>{'>>'}</span>€ 200,-
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
export default TrainingBlock7;
