import React, { useEffect, useRef } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createTask, deleteTask, getTask } from '../redux/slices/TaskSlices';

const Home = () => {
  const title = useRef()
  const description = useRef()
  const dispatch = useDispatch()
  const { isAuth } = useSelector(state => state.user)
  const {TaskData}=useSelector(state=>state.task)
 
  const { error } = useSelector(state => state.task)
  useEffect(() => {
   dispatch(getTask())
}, [])
  return (
    <div>
      <Form onSubmit={(event) => {
        event.preventDefault()
        dispatch(createTask({ title: title.current.value, description: description.current.value }))
      }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" ref={title} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>description</Form.Label>
          <Form.Control type="text" placeholder="description" ref={description} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {Array.isArray(TaskData)&& TaskData.map(el=><div>
        <h1>{el.title}</h1>
        <h1>{el.description}</h1>
        <button onClick={()=>{dispatch(deleteTask(el._id))}}>delete</button>
      </div>) }
    </div>
  )
}

export default Home