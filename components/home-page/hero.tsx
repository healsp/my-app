import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  const env = process.env.APP_ENV

  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image 
          src="/images/site/IMG_3847.JPG" 
          alt="An image" 
          width={300} 
          height={300} />
      </div>
      <h1>Hi, Im Max</h1>
      <h2>env is... {env}</h2>
      <p>I blog about brabrabra</p>
    </section>
  )
}

export default Hero;