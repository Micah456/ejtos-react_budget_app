import React, { useContext } from 'react'
import { AppContext} from '../context/AppContext'
const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext)
    const totalExpenses = expenses.reduce((total, item) => total += item.cost, 0)
    const updateBudget = (newBudget) => {
        if(newBudget > 20000){
            alert("Budget cannot exceed 20,000")
            newBudget = 20000
        }
        if(newBudget < totalExpenses){
            alert("You cannot reduce budget lower than spending")
            newBudget = totalExpenses
        }
        dispatch({
            type:'SET_BUDGET',
            payload: newBudget
        })
    }
    return(
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input style={{width: '150px'}} type="number" step={10} max={20000} value={budget} onInput={(e) => updateBudget(parseInt(e.target.value))}/>
        </div>
    )
}
export default Budget
