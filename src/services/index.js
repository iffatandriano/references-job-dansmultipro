import axios from "axios";
import env from '../configs/environment';
import toast from "react-hot-toast";
import useJobsStore from "../store/job";

const axiosInstance = axios.create({
    baseURL: env.API_BASE_URL
})

axiosInstance.defaults.headers.get['Content-Type'] = 'application/json';

const endpoint = {
    jobs: '/recruitment/positions.json',
    jobsDetails: '/recruitment/positions'
}

const getJobs = (params) => axiosInstance.get(endpoint.jobs, {
                                params
                            })
                            .then((response) => {
                                return response.data;
                            })
                            .catch((error) => {
                                console.log(error);
                                toast.error(`${error?.message}`);
                                useJobsStore.setState(() => ({
                                    isLoading: false,
                                    error: error?.message
                                }))

                                return error;
                            })

const getJobsDetail = (id) => axiosInstance.get(`${endpoint.jobsDetails}/${id}`)
                                .then((response) => {
                                    useJobsStore.setState(() => ({
                                        isLoading: false,
                                        record: response.data
                                    }))
                                    return response.data
                                })
                                .catch((error) => {
                                    useJobsStore.setState(() => ({
                                        isLoading: false,
                                        error: error?.message
                                    }))
                                    toast.error(`${error?.message}`)

                                    return error;
                                })
export {
    axiosInstance,
    getJobs,
    getJobsDetail
}