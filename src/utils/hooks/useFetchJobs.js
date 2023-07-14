import { useEffect, useCallback } from "react";
import useJobsStore from "../../store/job";
import { getJobs } from '../../services/index';

function useFetchJobs(params) {
  const { 
        isLoading,
        error,
        records,
        setIsLoading,
        setRecords,
        setNewRecords,
        setError,
    } = useJobsStore();

  const sendQuery = useCallback(async () => {
    try {
      await setIsLoading(true);
      if(error) {
        return;
      }
      await setError(false);
      const res = await getJobs(params)
      if(params.description || params.location || params.full_time) {
        await setNewRecords(res);
      } else {
        await setRecords(res);
      }
      setIsLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [params, setIsLoading, setError, setRecords, error, setNewRecords]);

  useEffect(() => {
    sendQuery(params);
  }, [params, sendQuery]);

  return { isLoading, error, records };
}

export default useFetchJobs;