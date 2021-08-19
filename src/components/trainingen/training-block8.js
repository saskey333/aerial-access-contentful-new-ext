import React from 'react';

const TrainingBlock8 = (props) => {
  const { id } = props;

  return (
    <section className='training-block' id={id}>
      <div className='container'>
        <div className='training-content'>
          <h1>AHD en Highline workshop België</h1>
          <h2>DOEL</h2>
          <p>
          In deze 3 daagse workshop verkennen we de grenzen van verschillende AHD en Highline systemen, dit in een Belgische steengroeve.
          </p>
          <br />
          <h2>Voor</h2>
          <p>
          Ervaren rope rescue en rope access technician.
          </p>
          <br />
          <h2>Noodzakelijke voorkennis</h2>
          <p>
          ITRA rope level 3, advanced AHD of vergelijkbaar.
          </p>
        </div>
        <div className='training-details'>
          <h2>Details</h2>
          <div className='works'>
            <span>
              <span class='arrow-horizontal'>{'>>'}</span>3 dagen
            </span>
          </div>
          <div className='works'>
            <span>
              <span class='arrow-horizontal'>{'>>'}</span>Inclusief materiaal
            </span>
          </div>
          <div className='works'>
            <span>
              <span class='arrow-horizontal'>{'>>'}</span>Exclusief reis, verblijf en maaltijden
            </span>
          </div>
          <div className='works'>
            <span>
              <span class='arrow-horizontal'>{'>>'}</span>Alle trainingsdagen op locatie in België
            </span>
          </div>
          <div className='works'>
            <span>
              <span class='arrow-horizontal'>{'>>'}</span>€ 600
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
export default TrainingBlock8;
