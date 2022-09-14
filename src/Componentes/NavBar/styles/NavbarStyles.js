import styled from "styled-components";

export const NavbarWrapper = styled.nav

` div.nav{
  width: 70%;
  
 
  ul.items1{
    font-family: 'Quicksand', sans-serif;
    list-style: none;
   
    
    li{
      button{
        background-color: #fadd98;
        border-style: none;
        font-size: calc(.7vw + 10px);
        .CartProductIn{
          align-self: center;
        }
        
        
        .cart-widget{
          width: 90%;
          height: 90%;
          padding-top: 10%;
          
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
        width: 50%;
        height: auto;
        min-width: 30px;
        max-width: 120px;
       
      }
    
    }   
  }
  
}

  display: flex;
  flex-direction: column;
  justify-content: center;
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
    padding: 1rem 1rem;
    color: grey;
    text-decoration: none;
    
  }
`;