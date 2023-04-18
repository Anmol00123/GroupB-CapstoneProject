import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'
import { FaCheck } from 'react-icons/fa'





function GoalItem({ goal }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
      <div>{new Date(goal.createdAt).toLocaleString('en-US')}
      </div>
      <h2>{goal.text}</h2>
      <i><FaCheck/></i>
      <h4>Successful</h4>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default GoalItem
