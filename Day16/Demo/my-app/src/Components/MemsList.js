import "../styles/mems.css";
function MemsList(props) {
  return (
    <>
      <img  src={props.img} alt={props.alt} />
      <p> {props.title}</p>
    </>
  );
}
export default MemsList;
