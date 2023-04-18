import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

function Account() {

    const [showForm, setShowForm] = useState(false);

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault()
    
        // dispatch(createAcc({ showForm }))
        setShowForm('')
      }

    const showform = (e) => {
        e.preventDefault();
        setShowForm(!showForm)
    }

  return (
    <div>
    <section className='form'>
        <form>
            <div className='form-group'>
            <label htmlFor='text'><b>Apply for loans</b></label>
            </div>

            <div className='form-group'>
                <button className='btn' onClick={showform}>
                    Apply
                </button>
            </div>
        </form>

        {showForm &&( 
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                <label for="loans">Which loan do you want</label> 
                <select name="loans" >
                    <option value="homeloan">
                        Home Loan
                    </option>
                    <option value="carloan">
                        Car Loan
                    </option>
                    <option value="studentloan">
                        Student Loan
                    </option>
                </select>
                <label>Enter your Name</label>
                <input type="text" id="name" placeholder='Enter Your name'></input>
                <br></br>
                <label>Enter your designation</label>
                <input type="text" id="role" placeholder='Enter Your designation'></input>
                <br></br>
                <label>Enter your Salary</label>
                <input type="number" value="salary" placeholder='Enter Your salary'></input>
                <br></br>
                <label>Enter your PAN number</label>
                <input type="text" id="pan" placeholder='Enter Your name'></input>
                <br></br>
                <label>Enter Loan Amount:</label>
                <input type="number" id='loan' placeholder='Enter amount' />
                <br></br>
                <button type='submit' className='btn btn-block'>
                    Submit
                </button>
                </div>
            </form>
        )}
    </section>
    </div>
  )
}

export default Account;
