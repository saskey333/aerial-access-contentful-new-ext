import React from 'react';
import uniqueId from 'lodash/uniqueId';

const Project = (props) => {
  const {
    id,
    title,
    images,
    image,
    activities,
    shortDescription: { content: shortDescriptionContent },
    longDescription: { content: longDescriptionContent },
  } = props;

  const {
    file: { url: imageSrc },
  } = image || { file: { url: '' } };

  return (
    <section className='project-block' id={id}>
      <div className='project-block--container container'>
        <div className='project-block--textImage project-element'>
          <h2>{title}</h2>
          <p>{shortDescriptionContent}</p>
          <br />
          <p className="thin">{longDescriptionContent}</p>
          <br />
          <a className="link_contact" href="/contact/">Wij informeren u graag over de mogelijkheden. Neem daarom geheel vrijblijvend contact met ons op. </a>
          
        </div>
        <div className='project-block--text project-element'>
          {/* <p>{longDescriptionContent}</p> */}
          {imageSrc ? <img src={imageSrc} /> : <></>}
        </div>
        <div className='project-block--work project-element'>
          {activities && activities.length ? (
            <>
              <h3>Werkzaamheden</h3>
              <br className='mobile-hide' />
              {activities.map((activity) => (
                <div key={uniqueId()} className='works'>
                  <span>
                    <span className='arrow-horizontal'>{'>>'}</span>
                    {activity}
                  </span>
                </div>
              ))}
              {images && images.length ? (
                <div className='works-icons'>
                  {images.map(({ file: { url: src } }) => (
                    <img key={uniqueId()} src={src} alt='' />
                  ))}
                </div>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
