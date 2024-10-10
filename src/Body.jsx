import React from 'react'
import './Body.css'
import photo from './Photo'
const Body = () => {
  return (
    <div className='body'>
       <center><img src={Photo} height={200}width={200} ></img></center>
       <h4><p>"Black Clover" is set in a world where magic determines social status and power. The story follows Asta and Yuno, two orphans raised in a church, who aspire to become the Wizard King, the strongest magic knight. While Yuno is a prodigious magic user, Asta is born without any magical ability, but he compensates with physical strength and a rare anti-magic sword. Despite their differences, they compete to achieve their goal, facing various threats and challenges along the way. The series blends action, friendship, and the pursuit of dreams.</p>
    <p>Asta – The protagonist born without magic, wielding anti-magic powers, and determined to become the Wizard King.</p>
    <p>Asta's childhood rival, gifted with immense magical talent, and also striving to be the Wizard King </p></h4>
    </div>
  )
}

export default Body;