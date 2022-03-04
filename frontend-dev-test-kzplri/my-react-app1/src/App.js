import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import PageHeader from "./components/Header/Header";
import { useDarkMode } from "./components/useDarkMode";
import { lightTheme, darkTheme } from "./components/Theme";

export const GlobalStyles = createGlobalStyle`
  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }`;

function App() {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
			document.body.classList.add("dark_mode");
		} else {
			document.body.classList.remove("dark_mode");
			setTheme("light");
		}
	};

	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<div className="App">
				{/* <BrowserRouter> */}
				<div id="buttonWrapper">
					<button className="toggle_btn" onClick={toggleTheme}>
						Dark Mode
					</button>
				</div>
				<PageHeader />
				<Dashboard />
				{/* </BrowserRouter> */}
			</div>
		</ThemeProvider>
	);
}

export default App;
