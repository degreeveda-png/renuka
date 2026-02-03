import React from 'react'
import './Section.css'
import ttd from '../../public/Image/ttd.jpg'
import pic1 from '../../public/Image/pic1.jpg'
import lord from '../../public/Image/lord.jpg'
import dharshan from '../../public/Image/dharshan.jpg'
import acc from '../../public/Image/acc.jpg'
import trusts from '../../public/Image/trusts.jpg'

const Section = () => {
  return (
    <div id="container">
      <section id="about">
        
      <img src={ttd} height="800px" width="1350px" alt="TTD"></img>
      <p><h2>Tirumala Temple</h2>
      "Sri Venkateswara Swamy Temple is one of the most visited temples in the world.
      Tirumala Tirupati Devasthanams (TTD) is an independent trust that manages the administration 
      and operations of the ancient, sacred Venkateswara Temple atop the seven hills of Tirumala in Andhra Pradesh, India. 
      Established in 1933, TTD oversees one of the world's richest and most visited pilgrimage sites,
       which attracts millions of devotees annually to seek blessings from Lord Venkateswara, believed to be a savior in the current Kali Yuga era.
        Beyond facilitating worship, darshan, and the famous Tirupati Laddu prasadam, TTD operates various charitable, educational, and medical institutions, including colleges, hospitals, and homes for the needy, functioning as a massive, multifaceted organization. "</p>
      </section>
      <img src={pic1} height="200px" width="800px" alt="PIC"></img>
      
      <section id="Srivari Seva Services">
        <h2>TTD Services</h2>
        <div class="ttd">
          <div class="card1">
            <p><h4>Sevas</h4>
          *Arjitha sevas<br/>
          *Daily sevas<br/>
          *Weekly sevas  <br/>
          Annual/Periodical sevas</p>
           <img src={dharshan} height="230px" width="250px" alt="DHARSHAN"></img>

          </div>
          <div class="card2">
           <p> <h4>Dharshan</h4>
            *Sarvadharshan<br/>
            *Special Entry Dharshan</p>
            <img src={lord} height="290px" width="250px" alt="LORD"></img>

          </div>
        <div class="card3">
          <p><h4>Accomdation</h4>
          *Accomdation at tirumala<br/>
          *Advance Reservation<br/>
          *Rest Houses & Tariffs</p>
          <img src={acc} height="260px" width="250px" alt="ACC"></img>
        </div>
        <div class="card4">
          <p><h4>Schemes/Trusts</h4>
          *Srivani Trust<br/>
          *S.V.Annaprasadam Trust<br/>
          *Birrd Trust<br/>
          *S.V.Pranadana Trust<br/>
          *S.V.Vidyadana Trust</p>
          <img src={trusts} height="200px" width="250px" alt="TRUSTS"></img>
        </div>
        </div>

        <section id="Information">
          <p><h2>Other Services</h2>
          *Panchagavya Products<br/>
          *Social Activites<br/>
          *Publications<br/>
          *Literary Reasearch<br/></p>
        </section>

      </section>

    </div>
)
}

export default Section
