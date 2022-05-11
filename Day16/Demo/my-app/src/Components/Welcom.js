function Welcome(props) {
    console.log(props);
    

    return (
        <p style={{color:props.favColor}}> Welcome {props.name}</p>
        
    )
}
export default Welcome;