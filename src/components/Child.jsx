function Child(){
    const theme = useContext(ThemeContext);
    return <p>Mode Saat ini : {theme}</p>
}

export default Child;