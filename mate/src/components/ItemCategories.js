import { Link } from "react-router-dom";

function ItemCategories({ categories }) {
    return (
        <div className="item-categories">
            <Link to={`/`} key={'all'}>Todas</Link>
            {
                Object.keys(categories).map(category => <Link to={`/category/${category}`} key={category}>{category}</Link>)
            }
        </div>
    )
}



export default ItemCategories;