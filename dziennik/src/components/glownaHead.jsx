import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import logo from "../assets/logo1.png"
import logout from "../assets/logout.png"
function GlownaHead({elements, main}){


  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = elements

  return (
    <div>

      <div className=" bg-gray-800 h-10" id="nav">

        <Navbar onMenuOpenChange={setIsMenuOpen} className=" bg-gray-800 text-white flex" position="static">
          <NavbarContent justify="start">
              <NavbarMenuToggle variant="shadow"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              />
          </NavbarContent>

          <NavbarContent className="hidden w-full text-white sm:flex gap-4 " justify="center">      

            <NavbarItem isActive >
              <Link href={main} aria-current="page"className="text-gray-500" >
                  <img src={logo} alt="logo" className="h-14" />
              </Link>
            </NavbarItem>

          </NavbarContent>


          <NavbarContent className=" w-full text-white sm:flex gap-4 " justify="end">      

            <NavbarItem>
              <Link href="/" aria-current="page">
                <Button color="danger" variant="shadow">
                  Wyloguj
                </Button>  
              </Link>
            </NavbarItem>

          </NavbarContent>


            <NavbarMenu className=" bg-slate-200" isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
              {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Link

                    className="w-full"
                    href= {
                      item === "Strona główna" ? "/" : 
                      item === "Zaloguj" ? "/login" : 
                      item === "Dziennik zmian" ? "/devblog" :
                      item === "Strona Szkoły" ? "https://zse.edu.pl" :
                      item ===  "Dodaj użytkownika" ? "/dodajUsera" :
                      item === "Dodaj klasę" ? "/dodajKlase" : ""
                    }
                    size="lg"
                  >
                  {item}
                  </Link>
                </NavbarMenuItem>
              ))}
            </NavbarMenu>
        </Navbar>
      </div>
    </div>
    
  );
}export default GlownaHead