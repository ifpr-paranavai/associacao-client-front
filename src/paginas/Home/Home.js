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
                         <section className="fundo-preto py-5" id="sobrenos">
                              <SobreNos />
                        </section>
                        <Parallax
                              blur={{ min: -15, max: 15 }}
                             // bgImage="https://scontent.fmgf6-1.fna.fbcdn.net/v/t1.0-9/39409339_1910707798997487_917810807230693376_n.jpg?_nc_cat=102&ccb=2&_nc_sid=e3f864&_nc_ohc=n28bEkKX-KcAX8Id6HL&_nc_ht=scontent.fmgf6-1.fna&oh=dcc3b67be0e9dd251981721e46a93f48&oe=5FDA4661"
                              bgImage="https://cdn.pixabay.com/photo/2017/09/07/14/33/cloud-2725520_960_720.jpg"

                              bgImageAlt="Amaer"
                              strength={-200}
                        >
                              <section className="py-5 text-center"  id="idnoticias">
                                    <Noticias />
                              </section>
                        </Parallax>
                        
                       

                        <Parallax
                              //blur={{ min: -15, max: 15 }}
                              bgImage="https://scontent.fmgf6-1.fna.fbcdn.net/v/t1.0-9/39389913_1910707792330821_2245948891407056896_n.jpg?_nc_cat=102&ccb=2&_nc_sid=e3f864&_nc_ohc=LOA9ugbuX4EAX8MjOol&_nc_ht=scontent.fmgf6-1.fna&oh=bc7c9c532469eec4e055771fff3336c2&oe=5FD88022"
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
      