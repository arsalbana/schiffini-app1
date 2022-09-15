import styled from "styled-components";

export const NavbarWrapper = styled.nav

` div.nav{
  width: 90%;
  display: flex;
  justify-content: center;
  
 
  ul.items1{
    font-family: 'Quicksand', sans-serif;
    list-style: none;
    padding-top: 1vw;
   
   
    
    li{
      button{
        background-color: #fadd98;
        border-style: none;
        font-size: calc(.7vw + 10px);
        padding-top: 1.5vw;
        .CartProductIn{
          align-self: center;
          
        }
        
        
        .cart-widget{
          width: 90%;
          height: 90%;
          align-content: center;
          display: flex;
          flex-direction: row-reverse;
          gap: 10px;
          
          
        }
        .boton{
          border-style: none;
          align-content: center;
          justify-content: center;
          
          
          
        }
        :hover{
          background-color: #fadd98;
          border-color: #fadd98;
          text-decoration: none;
        
        }
        :link{
          color: black;
          text-decoration: none;
          border-style: none;
          
          
        }
      }
    }
    .logo{
      
      .logoa{
        
        align-self: center;
        width: 40%;
        height: auto;
        min-width: 30px;
        max-width: 120px;
       
      }
    
    }   
  }
  
}

  
  position: fixed;
  width: 100%;
  height: 120px;
  background: #fadd98;
  background-color: #fadd98;
  top: 10vh;
  right: ${props => (props.open ? "0" : "-120%")};
  
  
  transition: right 0.3s linear;

  @media only screen and (min-width: 624px) {
    
    flex-direction: row;
    position: initial;
    height: 120px;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 100%;
  }
  
  a {
    
    color: grey;
    text-decoration: none;
    align-content: center;
    align-items: center;
    justify-content: center;
    
  }
 
`;