function FirstComponent(props) {
    let url = "https://tse2.mm.bing.net/th?id=OIP.aKPAUu7Zvv87om7JQRPe2wHaHa&pid=Api&P=0&w=164&h=164";
    let alt = 'react logo';
    let MoodColor = 'blue';
    


    return (
        <>
        <p style={{color:MoodColor,backgroundColor:'black'}}>building the first component</p>
            <img src={url} alt={ alt}/>
        </>
        
    );
}
export default FirstComponent;