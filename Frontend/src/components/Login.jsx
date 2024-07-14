import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

// Validation schema for the form
const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required')
})

const Login = () => {
    const initialValues = {
        email: '',
        password: ''
    }

    const onSubmit = values => {
        console.log('Form data', values)
        // Handle form submission, such as making an API call to login
    }

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {formik => (
                            <Form>
                                <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                    <Link to="/">
                                        ✕
                                    </Link>
                                </button>
                                <h3 className="font-bold text-lg">Login</h3>
                                <div className='mt-4 space-y-2 space-x-2'>
                                    <label htmlFor="email">Email</label>
                                    <Field type="email" id="email" name="email" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none' />
                                    <ErrorMessage name="email" component="div" className="text-red-600" />
                                </div>
                                <div className='mt-4 space-y-2 space-x-2'>
                                    <label htmlFor="password">Password</label>
                                    <Field type="password" id="password" name="password" placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none' />
                                    <ErrorMessage name="password" component="div" className="text-red-600" />
                                </div>
                                <div>
                                    <div className='flex justify-around mt-5'>
                                        <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700'>Login</button>
                                        <p>Not registered? <span className='underline text-blue-500 cursor-pointer'><Link to="/signup">Sign up</Link></span></p>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </dialog>
        </div>
    )
}

export default Login
