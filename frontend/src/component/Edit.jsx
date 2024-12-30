import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editTask, getTask } from '../redux/slices/taskSlice'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Edit({ open, onClose, children, onTaskUpdated, taskId }) {
  const [title, setTitle] = useState('')
  const [description, setDes] = useState('')
  const [dueDate, setDate] = useState('')
  const [priority, setPriority] = useState('')
  const dispatch = useDispatch()
  const task = useSelector((state) => state.tasks.tasks.find((task) => task._id === taskId))
  console.log(task);
  
 
  useEffect(() => {
    if (taskId && open) {
      dispatch(getTask(taskId))
    }
  }, [dispatch, taskId, open])

  useEffect(() => {
    if (task) {
      setTitle(task.title)
      setDes(task.description)
      setDate(task.dueDate)
      setPriority(task.priority)
    }
  }, [task])

  const HandelSave = async (e) => {
    e.preventDefault()
    const data = {
      title,
      description,
      dueDate,
      priority
    }

    try {
      await dispatch(editTask({ id: taskId, taskData: data })).unwrap()
      toast.success('Successfully Updated!')

      setTitle('')
      setDes('')
      setDate('')
      setPriority('')
      onClose()
      if (onTaskUpdated) onTaskUpdated()
    } catch (error) {
      console.error('Error sending data:', error)
      toast.error('Failed to update task')
    }
  }

  return (
    <div onClick={onClose} className={`
      fixed inset-0 flex justify-center items-center transition-colors 
      ${open ? "visible bg-black/20" : "invisible"}
    `}>
      <Toaster />
      <div onClick={(e) => e.stopPropagation()} class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full">
        <div class="relative p-4 w-full max-w-md max-h-full">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Edit Task
              </h3>
              <button onClick={onClose} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <form class="p-4 md:p-5" onSubmit={HandelSave}>
              <div class="grid gap-4 mb-4 grid-cols-2">
                <div class="col-span-2">
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Title</label>
                  <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="" />
                </div>
                <div class="col-span-2 sm:col-span-1">
                  <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Due Date</label>
                  <input type="date" value={dueDate} onChange={(e) => setDate(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="" />
                </div>
                <div class="col-span-2 sm:col-span-1">
                  <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Priority</label>
                  <select value={priority} onChange={(e) => setPriority(e.target.value)} id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option selected="">Select priority</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                  {priority && <p className="mt-4 text-s font-light text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-700 rounded-lg p-3 shadow-md transition-all duration-300">Selected priority: {priority}</p>}
                </div>
                <div class="col-span-2">
                  <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Description</label>
                  <textarea value={description} id="description" onChange={(e) => setDes(e.target.value)} rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>
                </div>
              </div>
              <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                Edit Task
              </button>
            </form>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Edit