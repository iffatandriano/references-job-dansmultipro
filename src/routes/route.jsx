import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { PuffLoader } from "react-spinners";

import { slug } from '../constants/slug';

import App from "../containers/App";
import JobsPage from "../views/jobs";
import JobDetails from "../views/jobs/features/JobDetails";

const loading = (
    <div className='h-[70vh] pb-24 pt-24 flex flex-col justify-center items-center'>
        <PuffLoader size={100} color='red' />
    </div>
);

const router = createBrowserRouter(([
    {
        path: slug.jobs.to,
        element: <App />,
        children: [
            {
                index: true,
                element: (
                    <React.Suspense fallback={loading}>
                        <JobsPage />
                    </React.Suspense>
                )
            },
            {
                path: slug.jobs.details,
                element: (
                    <React.Suspense fallback={loading}>
                        <JobDetails />
                    </React.Suspense>
                )
            }
        ]
    }
]))

export default router;