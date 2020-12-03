import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../Img/banner.svg'
import  ButtonStyled  from '../../UiComponents/Common/Button'

const HomePage = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#252525'
      }}
    >
      <img 
        src={banner} 
        alt='banner' 
        style={{
          width: '70%',
          margin: '10px auto',
          position: 'absolute', 
          left: '0',
          right: '0'
        }}
      />
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <nav
          style={{
            width: '60%',
            margin: '0 auto',
            justifyContent: 'space-between',
            display: 'flex'
          }}
        >
          <Link 
            to='characters'
            style={{textDecoration: 'none'}}
          >
            <ButtonStyled 
              label='Characters'
            />
          </Link>
          <Link 
            to='episodes'
            style={{textDecoration: 'none'}}
          >
            <ButtonStyled 
              label='Episodes'
            />
          </Link>
          <Link 
            to='/locations'
            style={{textDecoration: 'none'}}
          >
            <ButtonStyled 
              label='Locations'
            />
          </Link>
          <Link 
            to='/my-watch-list'
            style={{textDecoration: 'none'}}
          >
            <ButtonStyled 
              label='My watch list'
            />
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default HomePage;