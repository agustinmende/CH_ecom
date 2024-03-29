import { Link } from "react-router-dom";

function ItemCategories({ categories }) {

    return (
        <div className="item-categories">
            <Link to={`/`} key={'all'}>Todas</Link>
            {
               categories.map(category => <Link to={`/category/${category.name}`} key={category.name}>{category.name}</Link>)
            }
        </div>
    )
}



export default ItemCategories;