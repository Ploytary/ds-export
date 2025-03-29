import { BurgerMenu, BurgerMenuParams } from '../../libs/BurgerMenu';

export function initPageHeader() {
  const mediumBreakpoint = parseInt(
    window.getComputedStyle(document.documentElement).getPropertyValue('--layout-breakpoint-large')
  );
  const params: Required<BurgerMenuParams> = {
    containerClass: 'burger-menu',
    menuClass: 'burger-menu__menu',
    togglerButtonClass: 'page-header__burger-button',
    openedClass: 'burger-menu--open',
    closeButtonClass: 'burger-menu__close-button',
    backdropClass: 'burger-menu__backdrop',
    closeBreakpoint: mediumBreakpoint,
  };

  new BurgerMenu('.burger-menu', params);
}
