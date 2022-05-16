import CardRecipe from './Card';

export default  function Cards(props) {
    return (
        <>
            {
            props.recipes.map((recipe)=>{
                return (
                  <>
                    <CardRecipe recipe={recipe} />
                  </>
                );
            })
            }
        </>
        
    )
}