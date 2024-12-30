import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ChatbotWidget from './chatboot/ChatbotWidget'
import Update from './Add'
import Add from './Add'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, deleteTask, editTask, fetchTasks, searchTasks, setFilter } from '../redux/slices/taskSlice'
import { GetAlldata } from '../Service/LoginService'
import Edit from './Edit'
import toast, { Toaster } from 'react-hot-toast'

const TaskExemple = () => {
  const [open, setOpen] = useState(false)
  const [openn, setEopen] = useState(false)
  const [editTaskId, setEditTaskId] = useState(null)
  const [confirmDelete, setConfirmDelete] = useState({ show: false, taskId: null })

  const dispatch = useDispatch()
  const { tasks, filters, loading } = useSelector((state) => state.tasks)

  useEffect(() => {
    dispatch(fetchTasks(filters)) // Récupère les tâches selon les filtres
  }, [dispatch, filters])

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    dispatch(setFilter({ [name]: value })) // Met à jour les filtres
  }

  const handleSearch = (keyword) => {
    dispatch(searchTasks(keyword)) // Lance la recherche
  }
  const handleTaskAdded = (newTaskData) => {
    dispatch(addTask(newTaskData))
  }
  const handleEditAdded = (newTaskData) => {
    dispatch(editTask(newTaskData))
  }

  const handleEdit = (taskId) => {
    setEditTaskId(taskId)
    setEopen(true)
  }

  const handleDelete = async (taskId) => {
    try {
      await dispatch(deleteTask(taskId)).unwrap()
      toast.success('Task successfully deleted!')
    } catch (error) {
      toast.error('Failed to delete task')
    }
  }

  const confirmDeleteTask = (taskId) => {
    setConfirmDelete({ show: true, taskId })
  }

  const handleConfirmDelete = () => {
    handleDelete(confirmDelete.taskId)
    setConfirmDelete({ show: false, taskId: null })
  }

  const handleCancelDelete = () => {
    setConfirmDelete({ show: false, taskId: null })
  }

  return (
    <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <Toaster />
      <ChatbotWidget />
      <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div class="w-full md:w-1/2">
              <form class="flex items-center">
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <input type="text" id="simple-search" onChange={(e) => handleSearch(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required="" />
                </div>
              </form>
            </div>
            <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <button onClick={() => setOpen(true)} type="button" data-modal-target="default-modal" data-modal-toggle="default-modal" class="flex items-center justify-center text-violet-400 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                <FontAwesomeIcon icon={faPlus} />
                Add Task
              </button>

              <Add open={open} onClose={() => setOpen(false)} onTaskAdded={handleTaskAdded} />

              <Edit open={openn} onClose={() => setEopen(false)} taskId={editTaskId} onTaskUpdated={handleEditAdded} />
            </div>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-4 py-3">Id</th>
                  <th scope="col" class="px-4 py-3">Task name</th>
                  <th scope="col" class="px-4 py-3">description</th>
                  <th scope="col" class="px-4 py-3">dueDate</th>
                  <th scope="col" class="px-4 py-3">priority</th>
                  <th scope="col" class="px-4 py-3">status</th>
                  <th scope="col" class="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.length === 0 ? (
                  <tr>
                    <td colSpan="7" class="text-center">Aucune tâche trouvée.</td>
                  </tr>
                ) : (
                  tasks.map((t) => (
                    <tr class="border-b dark:border-gray-700" key={t._id}>
                      <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {t._id}
                      </th>
                      <td class="px-4 py-3">{t.title}</td>
                      <td class="px-4 py-3">{t.description}</td>
                      <td class="px-4 py-3">{t.dueDate}</td>
                      <td class="px-4 py-3">{t.priority}</td>
                      <td class="px-4 py-3">{t.status}</td>
                      <td class="px-4 py-3 flex items-center justify-end space-x-7">
                        <button onClick={() => handleEdit(t._id)} className="text-blue-500 hover:text-blue-700">
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button onClick={() => confirmDeleteTask(t._id)} className="text-red-500 hover:text-red-700">
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          {/* Footer */}
          <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing
              <span class="font-semibold text-gray-900 dark:text-white">1-10</span>
              of
              <span class="font-semibold text-gray-900 dark:text-white">1000</span>
            </span>
            <ul class="inline-flex items-stretch -space-x-px">
              <li>
                <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span class="sr-only">Previous</span>
                  <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
              </li>
              <li>
                <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
              </li>
              <li>
                <a href="#" aria-current="page" class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
              </li>
              <li>
                <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
              </li>
              <li>
                <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
              </li>
              <li>
                <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span class="sr-only">Next</span>
                  <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {confirmDelete.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
            <p className="mb-4">Are you sure you want to delete this task?</p>
            <div className="flex justify-end space-x-4">
              <button onClick={handleCancelDelete} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded">
                Cancel
              </button>
              <button onClick={handleConfirmDelete} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default TaskExemple