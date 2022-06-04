import darkTheme from './darkTheme';
import lightTheme from './lightTheme';
import {useState} from 'react';

const useSwitchTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const toogleTheme = () => setIsDarkTheme(!isDarkTheme);
  const theme = isDarkTheme ? darkTheme : lightTheme;
  return [theme, toogleTheme] as const;
}

export default useSwitchTheme;


