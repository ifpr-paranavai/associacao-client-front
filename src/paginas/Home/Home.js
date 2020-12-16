import './estilo.css';
import React, { Component } from 'react';

import Noticias from './../../componentes/Noticias/Noticias'
import SobreNos from './../../componentes/SobreNos/SobreNos'
import Contato from './../../componentes/Contato/Contato'

import {Parallax} from 'react-parallax';
class Home extends Component{
      render(){
            return (
                  <>
                        
                        <Parallax
                              blur={{ min: -15, max: 15 }}
                              bgImage= "https://i.ibb.co/tpyq7Gv/DSC-6543.jpg"

                              bgImageAlt="Amaer"
                              strength={200}
                        >
                              <section className="principal py-5" id="sobrenos">
                                    <SobreNos />
                              </section>
                        </Parallax>
                        
                        <section className="fundo-preto py-5 text-center"  id="idnoticias">
                              <Noticias />
                        </section>
                       

                        <Parallax
                              //blur={{ min: -15, max: 15 }}
                              bgImage="https://i.ibb.co/V9NQYS0/DSC-6546.jpg"
                              bgImageAlt="Amaer"
                              strength={-200}
                        >
                              <section className="py-5" id="contato">
                                    <Contato />
                              </section>
                        </Parallax>
                  </>
            )

      }
}

export default Home;
      