import { useState } from "react";
import './AddProduct.scss';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');
    const obj = { name, price, size, color }
    const [isShowForm, setIsShowForm] = useState(true)
    let productsList = JSON.parse(localStorage.getItem('productsList'));

    function handleAddProduct(product) {
        setName('');
        setPrice('');
        setSize('');
        setColor('');

        if (productsList) {
            productsList.push(obj)
            localStorage.setItem('productsList', JSON.stringify(productsList));
        } else {
            localStorage.setItem('productsList', JSON.stringify([obj]));
        }

    }
    function handleShowHide() {
        setIsShowForm(!isShowForm);
    }

    return (
        <div className="add-product">
            {isShowForm &&
                <fieldset >
                    <legend>Add a new product</legend>
                    <div>
                        <span>Name</span>
                        <input value={name} onChange={(e) => setName(e.target.value)} type='text'></input>
                    </div>
                    <div>
                        <span>Price</span>
                        <input value={price} onChange={(e) => setPrice(e.target.value)} type='number'></input>
                    </div>
                    <div>
                        <span>Size</span>
                        <input value={size} onChange={(e) => setSize(e.target.value)} type='number'></input>
                    </div>
                    <div>
                        <span>Color</span>
                        <input value={color} onChange={(e) => setColor(e.target.value)} type='text'></input>
                    </div>
                    <button onClick={() => handleAddProduct()}>Add a new product</button>
                </fieldset>
            }
            <div className="hide-show">
                {isShowForm && <button onClick={() => handleShowHide()}>Hide Form</button>}
                {isShowForm || <button onClick={() => handleShowHide()}>Show Form</button>}
            </div>
            {!!productsList &&
                <ul className="product-list">
                    {productsList.map((product, index) => {
                        return (
                            <li key={index}>{`Product ${index + 1}: 
                            Name: ${product.name};
                            Price: ${Number(product.price).toLocaleString()} đ;
                            Size: ${product.size};
                            Color: ${product.color}
                            `}</li>
                        )
                    })}
                </ul>
            }

        </div>
    )
}

export default AddProduct;

