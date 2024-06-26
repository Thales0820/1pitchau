import { useEffect, useState } from "react"
import { FaShoppingCart } from 'react-icons/fa'
import { LeftContainer, NavbarContainer, NavbarExtendedContainer, NavbarInnerContainer, NavbarLink, NavbarLinkContainer, NavbarLinkExtended, OpenLinksButton, RightContainer } from "./styles";
import axios from "axios";
import { AiFillHome } from "react-icons/ai";
import { BsChatSquareDotsFill } from "react-icons/bs";

interface IDataMenu {
  id: number;
  categoria: string;
}

export const Menu = () => {

  const [extendNavbar, setExtendNavbar] = useState(false);
  const [dataMenu, setDataMenu] = useState<Array<IDataMenu>>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/categorias')
    .then((res) => {
      setDataMenu(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  })

  return (
    <>
      <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
          <LeftContainer>
            <NavbarLinkContainer>
              <OpenLinksButton
                onClick={() => {
                  setExtendNavbar((value) => !value)
                }}
              >
                {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
              </OpenLinksButton>
              <NavbarLinkExtended
                style={{
                  fontWeight: 'bold',
                  color: '#fff',
                }}
                to="/"
              >
                1Pitchau
              </NavbarLinkExtended>
              <NavbarLink to={'/'}><AiFillHome /> Home</NavbarLink>
              <NavbarLink to={'/Contato'}><BsChatSquareDotsFill size={16} /> Contato</NavbarLink>
              {
                dataMenu.map((menu) => {
                  return(
                    <NavbarLink
                    key={menu.id}
                    to={'/categoria/' + menu.id}>
                      {menu.categoria}
                    </NavbarLink>
                  )
                })
              }
            </NavbarLinkContainer>
          </LeftContainer>
          <RightContainer>
            <NavbarLinkExtended
              to="/carrinho"
            >
              <FaShoppingCart
                size={22}
              />
            </NavbarLinkExtended>
          </RightContainer>
        </NavbarInnerContainer>
        {
          extendNavbar && (
            <NavbarExtendedContainer>
              <NavbarLinkExtended to={'/'}>
                Home
              </NavbarLinkExtended>
              <NavbarLinkExtended to={'/contato'}>
                Contato
              </NavbarLinkExtended>
              {
                dataMenu.map((menu) => {
                  return(
                    <NavbarLinkExtended
                      key={menu.id}
                      to={'/categoria/' + menu.id}>
                      {menu.categoria}
                    </NavbarLinkExtended>
                  )
                })
              }
            </NavbarExtendedContainer>
          )
        }
      </NavbarContainer>
    </>
  )
}
