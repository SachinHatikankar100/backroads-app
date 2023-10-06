import React from 'react'
import Title from '../components/Title'
import { services } from '../Data'
const Services = () => {
  return (
    <div><section class="section services" id="services">
    <Title title='our ' subtitle='services'/>
    <div class="section-center services-center">
        {services.map((service)=>{
            const {id,icon,title,text}=service;
            return(
                    <article class="service" id={id}>
                        <span class="service-icon"><i class={icon}></i></span>
                        <div class="service-info">
                        <h4 class="service-title">{title}</h4>
                        <p class="service-text">
                            {text}
                        </p>
                        </div>
                    </article>
            )
        })}
      
    </div>
  </section></div>
  )
}

export default Services