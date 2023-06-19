import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { css, keyframes, styled } from 'styled-components';
import { motion, useCycle } from 'framer-motion';

import { ThemeSVGs, SidebarButton, Sidebar } from '..';
import { sidebarData } from '../../utils/data';
import { navbarMotion } from '../../utils/motion';
import { toggleTheme } from '../../utils/utils';

export default function Navbar({ theme, setTheme }) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [scrollY, setScrollY] = useState(window.scrollY);
  const overlayRef = useRef();

  const handleThemeClick = () => { toggleTheme(setTheme); };

  const handleMenuClick = () => { toggleOpen(); };

  // Event listener to close the sidebar when clicking elsewhere
  useEffect(() => {
    const clickElsewhere = (e) => { if (isOpen && e.target === overlayRef?.current) toggleOpen(); }
    window.addEventListener('mousedown', clickElsewhere);
    return () => { window.removeEventListener('mousedown', clickElsewhere); };
  }, [isOpen]);

  // Event listener to set scrollY to scrollY
  useEffect(() => {
    const setScroll = () => { setScrollY(window.scrollY); }
    window.addEventListener('scroll', setScroll);
    return () => { window.removeEventListener('scroll', setScroll); };
  }, []);

  return (
    <>
      <Overlay ref={overlayRef} open={isOpen} className='overlayref' />

      <Container scrolly={parseInt(scrollY)} open={isOpen}>
        {/* Left Side - Logo */}
        <Logo open={isOpen} {...navbarMotion.logo(parseInt(scrollY) > 100)}>
          <Link to='/'>
            <img src={sidebarData.logo} />
          </Link>
        </Logo>

        {/* Right Side - Icons */}
        <Icons>
          {/* Theme Button */}
          {!isOpen && <ThemeSVGs theme={theme} handleClick={handleThemeClick} />}
          {/* Menu Open/Close Button */}
          <motion.div {...navbarMotion.sidebarButton(isOpen)} onClick={handleMenuClick}>
            <SidebarButton variants={navbarMotion.sidebarButtonSVG} />
          </motion.div>
        </Icons>
      </Container>

      {/* Sidebar */}
      <Sidebar isOpen={isOpen} />
    </>
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ open }) => open ? 'rgba(0, 0, 0, 0.5)' : 'none'};
  transition: all 0.5s ease-in;
  pointer-events: ${({ open }) => open ? 'auto' : 'none'};
  z-index: 900;
`;

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.85rem;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 951;
  isolation: isolate;

  svg {
    stroke: var(--c-font);
    fill: var(--c-font);
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }
  
  ${({ scrolly, open }) => (!open && scrolly > 100) && css`
    background: var(--c-navbarBackground);
    backdrop-filter: blur(5px);
    transition: all 1s ease-in-out;
  `}
`;

const Logo = styled(motion.div)`
  max-width: 121px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
  }

  img {
    max-width: 100%;
    height: auto;
    max-height: calc(100% + (1.85rem * 1));
  }

  @media (max-width: 720px) {
    visibility: ${({ open }) => open && 'hidden'};
  }
`;

const Icons = styled.div`
  height: 30px;
  display: flex;
  gap: 40px;
`;