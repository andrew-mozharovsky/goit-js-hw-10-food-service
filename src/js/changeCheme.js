import refs from './refs';

const themeColor = {
  DARK: 'dark-theme',
  LIGHT: 'light-theme',
};

const changeCheme = () => {
  if (refs.documentThem.classList.contains(themeColor.DARK)) {
    refs.documentThem.classList.remove(themeColor.DARK);
    refs.documentThem.classList.add(themeColor.LIGHT);
    localStorage.setItem('themColor', themeColor.LIGHT);
  } else {
    refs.documentThem.classList.remove(themeColor.LIGHT);
    refs.documentThem.classList.add(themeColor.DARK);
    localStorage.setItem('themColor', themeColor.DARK);
  }
};

export { changeCheme };
