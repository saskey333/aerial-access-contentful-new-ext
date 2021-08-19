import React from 'react';

const TrainingBlock3 = (props) => {
  const { id } = props;

  return (
    <section className='training-block' id={id}>
      <div className='container'>
        <div className='training-content'>
          <h1>Technical Rope Rescue Team leader</h1>
          <h2>DOEL</h2>
          <p>
          Deelnemers op dit niveau zijn competent om een team aan te sturen dat moet kunnen reageren op een incident waar technische hoogte /diepteredding noodzakelijk is. 5 Dagen intense en realistische scenario- training. Deze cursus heeft GEEN ITRA certificering.
          </p>
          <br />
          <h2>Voor</h2>
          <p>
          Reddings technici die, geacht worden te, functioneren als team leider.
          </p>
          <br />
          <h2>Noodzakelijke voorkennis</h2>
          <p>
          ITRA rope level 3 of vergelijkbaar.
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
              <span class='arrow-horizontal'>{'>>'}</span>€ 980, – excl. BTW.
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
export default TrainingBlock3;
