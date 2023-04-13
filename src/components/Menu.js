import React, { Component } from 'react';

// const menuList = {
//     0: <board />,
//     1: <signin />,
//     2: <signup />
//   };
  
  class Menu extends Component {
    render() {
        console.log('Menu render');
        return(
            
            <ul>
                <li><a href='./components/board'>Board</a></li>
                <li><a href='/signin'>Sign In</a></li>
                <li><a href='/signup'>Sign Up</a></li>
            </ul>
        
        );
    }
  }
  
  export default Menu;