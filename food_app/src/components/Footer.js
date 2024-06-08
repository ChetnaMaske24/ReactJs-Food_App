import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMeia'>
            <InstagramIcon />
            <FacebookIcon />
            <YouTubIcon />
            <TwitterIcon />
            <LinkedInIcon />
        </div>
        <p>Created by Chetna Maske : 2024 </p>
      
    </div>
  )
}

export default Footer
