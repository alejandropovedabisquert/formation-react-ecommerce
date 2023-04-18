import React, { Fragment } from 'react'
import { Route, RouterProvider, Routes, createRoutesFromElements } from "react-router"
import HomePage from '../pages/HomePage'
import { createBrowserRouter } from 'react-router-dom';

const AppRoute = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
          <Route exact path="/" element={<HomePage />}>
             

          </Route>
        )
      );

    return (
      <Fragment>
        <RouterProvider router={router}/>
      </Fragment>
    )

}

export default AppRoute
