import React from 'react'
import Sec3img1 from '../assets/sofa.jpg'
import Sec3img2 from '../assets/dining.jpg'
import Sec3img3 from '../assets/Bed.jpg'
import Sec5img1 from '../assets/Group4.png'
import Sec5img2 from '../assets/Vector.png'
import Sec6RightImg1 from '../assets/Sec6RightImg1.jpg'
import Sec6RightImg2 from '../assets/Sec6RightImg2.png'
import Sec6RightImg3 from '../assets/Sec6RightImg3.jpg'
import Section1 from './Section1'
import Section2 from './section2/Section2'
import Section3 from './Section3/Section3'
import Section4 from './section4/section4'
import Section5 from './section5/Section5'
import Section6 from './section6/Section6'

const Home = () => {

    const sec2Crad = [
    {
      title:'Quality Craftsmanship',
      desc:'Our furniture is crafted with attention to detail and built to last, ensuring durability and timeless style.'
    },
    {
      title:'Wide Selection',
      desc:'We offer a diverse range of furniture styles and designs to suit every taste and preference.'
    },
    {
      title:'Customer Satisfaction',
      desc:'We prioritize customer satisfaction by providing excellent service and support throughout your shopping experience.'
    }
  ]

  const sec3Cards = [
    {
      img:Sec3img1,
      title:'Modern Furniture',
      desc:'Experience comfort and style with our modern sofa, perfect for any living room.',
      price:'$1,299.99'
    },
    {
      img:Sec3img2,
      title:'Modern Dining Table',
      desc:'Gather around our modern dining table, designed for both function and elegance in your dining space.',
      price:'$899.99'
    },
    {
      img:Sec3img3,
      title:'Modern Bed',
      desc:'Sleep in comfort with our modern bed, designed for both style and functionality.',
      price:'$1,499.99'
    }
  ]


  const sec4Cards = [
    {
      num:'20+',
      text:'Years Experience'
    },
    {
      num:486,
      text:'Happy Clients'
    },
    {
      num:'150+',
      text:'Projects Completed'
    }
  ]

  const sec5Card = [
    {
      img: Sec5img1,
      text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, delectus odio inventore architecto incidunt molestias commodi consequuntur, porro ea veniam animi voluptas voluptate necessitatibus at obcaecati, voluptatum corrupti libero totam.',
      logo:Sec5img2,
      name:'John Doe'
    },
    {
      img: Sec5img1,
      text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, delectus odio inventore architecto incidunt molestias commodi consequuntur, porro ea veniam animi voluptas voluptate necessitatibus at obcaecati, voluptatum corrupti libero totam.',
      logo:Sec5img2,
      name:'Jacob Jones'
    },
    {
      img: Sec5img1,
      text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, delectus odio inventore architecto incidunt molestias commodi consequuntur, porro ea veniam animi voluptas voluptate necessitatibus at obcaecati, voluptatum corrupti libero totam.',
      logo:Sec5img2,
      name:'Savannath Nguyen'
    }
  ]


  const sec6Products =[
    {
      img: Sec6RightImg1,
      tips:'Tips and Trick',
      desc:'6 Ways to give your home minimalistic vibes',
      logo: Sec5img2,
      name:'By Jerremy Jean'
    },
    {
      img: Sec6RightImg2,
      tips:'Tips and Trick',
      desc:'6 Ways to give your home minimalistic vibes',
      logo: Sec5img2,
      name:'By Jerremy Jean'
    },
    {
      img: Sec6RightImg3,
      tips:'Tips and Trick',
      desc:'6 Ways to give your home minimalistic vibes',
      logo: Sec5img2,
      name:'By Jerremy Jean'
    }
  ]





  return (
    <div>
      
      <Section1/>
      <Section2 sec2Crad = {sec2Crad}/>
      <Section3 sec3Cards = {sec3Cards}/>
      <Section4 sec4Cards = {sec4Cards}/>
      <Section5 sec5Card = {sec5Card}/>
      <Section6 sec6Products ={sec6Products} />

    </div>
  )
}

export default Home
