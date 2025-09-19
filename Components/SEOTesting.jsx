import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../Utils/api';

const SEOTesting = () => {
    const navigate = useNavigate();

    
  return (
    <div>
        <h1>This is for SEO testing...</h1>

        <button
            onClick={() => navigate('/sell-old-test-deletion')}
        >
            Check Brand SEO ...
        </button>
    </div>
  )
}

export default SEOTesting