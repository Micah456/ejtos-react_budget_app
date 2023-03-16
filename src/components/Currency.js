import React, { useContext } from 'react'
import { AppContext} from '../context/AppContext'

const Currency = () => {
    const {currency, dispatch}= useContext(AppContext)
    const updateCurrency = (newCurrency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency
        })
    }
    return(
        <div className='alert alert-secondary'>
            <div className="select-wrap">
                <label className="currency-label" for="inputGroupSelect03">Currency (</label>
                <select defaultValue={currency} className="custom-select" id="inputGroupSelect03" onInput={(e) => updateCurrency(e.target.value)}> 
                    <option value ="$" name="dollar">$ Dollar</option>
                    <option value ="£" name="pound">£ Pound</option>
                    <option value ="€" name="euro">€ Euro</option>
                    <option value ="₹" name="ruppee">₹ Ruppee</option>
                </select>
                <label className="close-currency-label" for="inputGroupSelect03">)</label>
            </div>
        </div>
    )
}

export default Currency