import React from 'react'
import Title from '../components/Title'
import { tours } from '../Data'
const Tours = () => {
  return (
    <div>
        <section class="section" id="tours">
      
      <Title title='featured ' subtitle='tours'/>
      <div class="section-center featured-center">
        {tours.map((tour)=>{
            const{id,img,date,title,text,location,duration,cost}=tour;
            return(
                
                <article class="tour-card" id={id}>
          <div class="tour-img-container">
            <img src={img} class="tour-img" alt="" />
            <p class="tour-date">{date}</p>
          </div>
          <div class="tour-info">
            <div class="tour-title">
              <h4>{title}</h4>
            </div>
            <p>
              {text}
            </p>
            <div class="tour-footer">
              <p>
                <span><i class="fas fa-map"></i></span> {location}
              </p>
              <p>{duration}</p>
              <p>{cost}</p>
            </div>
          </div>
        </article>
            )
        })}
        
      </div>
    </section>
    </div>
  )
}

export default Tours