import React, {useState} from "react";

const Themer = () => {

    interface Theme {
        backgroundColor: string;
        textColor: string;
    }

    const javaTheme: Theme = {
        backgroundColor: '#fdde12',
        textColor: '#000000'
    }

    const typeTheme: Theme = {
        backgroundColor: '#0e81f1',
        textColor: '#ffffff',
    };



    const ThemeSwitcher = () => {
        const [theme, setTheme] = useState<Theme>(javaTheme);

        const toggleTheme = () => {
            setTheme(theme === javaTheme ? typeTheme : theme === typeTheme ? javaTheme : javaTheme);
        };


        return (
            <div
                style={{
                    backgroundColor: theme.backgroundColor,
                    color: theme.textColor,
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
            >
                <h1>Hello, World!</h1>
                <button style={{ backgroundColor: theme.textColor, color: theme.backgroundColor}}
                        onClick={toggleTheme}>Toggle Theme</button>
            </div>
        );
    };



    return(
        <>
            <ThemeSwitcher />

        </>
    )
}

export default Themer