import React from 'react';
import IasLogo from '../../images/logo-ias.png'
const FooterProject = () => {
return (
<section className='footer-project'>
    <div className="container">
        <img className="ias-logo" src={IasLogo} />
        <div className="footer-project-content">
            <h2>
                Partner
            </h2>
            <p>
                Wilt u rope access-projecten veilig en correct uitvoeren?
                <br /><br />
                Ons partner Industrial Access Services ondersteunt u daar professionele bij. Naast het leveren van rope
                access-materialen, leveren zij ook gereedschappen en adviseren zij klanten bij het
                inzetten van het juiste materiaal. Hun jarenlange ervaring garandeert u een deskundig advies. </p>
       <br/> <p>Rentals - Deployment - Consultancy - Special Projects</p>
       <p>+31 6 13 233 199</p>
       <p>info@industrialaccessservices.com <br/>
www.industrialaccessservices.com</p>
    
    
        </div>
        <div></div>
    </div>
</section>
);
};

export default FooterProject;