import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBudget, addExp } from '../features/Budgetslice';

export default function Moneymanager() {
    const [count, setCount] = useState("");
    const [addProduct, setAddProduct] = useState("");
    const [addAmount, setAddAmount] = useState("");

    const [productList, setProductList] = useState([])

    const dispatch = useDispatch();

    const Data = useSelector((state) => state.BudgetKey.Data);

    const handleAddBudget = () => {
        const amount = Number(count)

        if (amount) {
            dispatch(addBudget(amount));
            setCount('');
        }
    };

    const handleAddProduct = () => {
        const amount = Number(addAmount)

        if (amount) {
            dispatch(addExp(amount));
            setProductList([...productList, { addAmount: amount, addProduct }]);
            setAddProduct('');
            setAddAmount('');
        }
    };

    return (
        <div className="money-manager">
            <div className="header">
                <h1>Money Manager</h1>
            </div>

            <div className="budget-section">
                <h3 className="budget-display">Current Budget: ${Data}</h3>
                <div className="input-container">
                    <input
                        type="number"
                        className="budget-input product-name-input"
                        placeholder=' '
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                    />
                    <label>Enter Product Price</label>
                </div>

                <button className="add-budget-button" onClick={handleAddBudget}>Add Budget</button>
            </div>
            <div className="product-section">
                <div className="input-container">
                    <input
                        type="number"
                        className="product-price-input"
                        placeholder=" "
                        value={addAmount}
                        onChange={(e) => setAddAmount(e.target.value)}
                    />
                    <label>Enter Product Price</label>
                </div>

                <div className="input-container">
                    <input
                        type="text"
                        className="product-name-input"
                        placeholder=" "
                        value={addProduct}
                        onChange={(e) => setAddProduct(e.target.value)}
                    />
                    <label>Enter Product Name</label>
                </div>

                <button className="add-product-button" onClick={handleAddProduct}>Add Product</button>
            </div>


            <div className="product-list">
                {
                    productList.map((e, i) => (
                        <ul key={i} className="product-item">
                            <li>Price: ${e.addAmount}</li>
                            <li>Product: {e.addProduct}</li>
                        </ul>
                    ))
                }
            </div>
        </div>
    );
}
