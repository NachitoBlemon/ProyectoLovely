import React from 'react';
import Carousel from './Home/Carousel'
import Seccion1 from './Home/Seccion1'

//react-animated-text

import { Random } from 'react-animated-text';

const exampleStyle = {
    display: 'inline-block',
    marginBottom: '5%',
    padding: '2em 0em 0em 0em',
    width: '100%',
    fontSize: '2.5rem',
    textAlign: 'center',
  }

const Home = () => {
    return (
        <div>
            
            <div style={exampleStyle}>
                <Random
                text="¡ OFERTAS POR FIN DE AÑO !"
                effect="jump"
                effectChange={0.1}
                effectDuration={0.5}
                />
            </div>
                
                <Carousel/>
                <Seccion1/>


        </div>
    );
};

export default Home;