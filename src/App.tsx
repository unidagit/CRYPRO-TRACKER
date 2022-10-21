import Router from "./Router";
import GlobalStyle from "./styles/global";
import { ReactQueryDevtools } from "react-query/devtools";
import { darkTheme, lightTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atom";

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}

export default App;
