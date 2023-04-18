import React, {useState} from 'react'

function Gift() {

    const [showForms, setShowForms] = useState(false);

    // const { name, salary, score } = showForms

    const showforms = (e) => {
        e.preventDefault();
        setShowForms(!showForms)
    }



  return (
    <div>
         <section className='form'>
        <form>
            <div className='form-group'>
            <label htmlFor='text'><b>Apply for Gift Cards </b></label>
            </div>

            <div className='form-group'>
                <button className='btn' onClick={showforms}>
                    Apply
                </button>
            </div>
        </form> 

        {showForms && (
            <form>
                <div className='form-group'>
                    <label>Name</label>
                    <input type="text" id="name" placeholder='Enter Your Name' />
                    <br></br>
                    <label>Enter your Salary</label>
                    <input type="number" id="salary" placeholder='Enter Your salary'></input>
                    <br></br>
                    <label>Credit Score</label>
                    <input type="number" id="score" placeholder='Enter your credit score'/>
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

export default Gift;