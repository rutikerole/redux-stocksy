import React from 'react'
import { connect } from 'react-redux'

function input(props) {

  const getValue = () => {
    alert("Phone number is saved")
  }  

  return (
    <>
        <input 
            type="text"
            value={props.inputValue}
            onChange={props.inputChanged}
        />
        <button onClick={getValue}>Get Link</button>
    </>
  )
}


const mapStateToProps = (state) => {
    return {
        inputValue : state.inputValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputChanged : (e) => {
            const action = { type:"INPUT_CHANGE", text: e.target.value};
            dispatch(action)

        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(input)