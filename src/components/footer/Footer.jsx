import React from 'react'

const Footer = () => {
  return (
    <div className='pt-20 pb-10 '>
      <div>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14137.349372883471!2d85.3201194!3d27.6450328!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1752f0ac748d%3A0x3f909c4f87313a16!2sHimalayan%20Fitness%20%26%20Gym!5e0!3m2!1sen!2snp!4v1704603099398!5m2!1sen!2snp'
          width='100%'
          height='480'
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'
        ></iframe>
        <div className='text-center text-sm italic pt-16'>
         <p>
          All rights reserved by © Mandip creative 2023
         </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
