import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const useFetch = (url) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    try {
      setTimeout(() => {
        const fetchAPI = async () => {
          let res = await axios.get(url);
          let data = res && res.data ? res.data : [];
          if (data && data.length > 0) {
            data.map(item => {
              item.Date = moment(item.Date).format("llll")
              return item
            })
            data = data.reverse();
          }
          setData(data)
          setIsLoading(false)
          setIsError(false)
        }
        fetchAPI()
      }, 2000);
    } catch (e) {
      setIsError(true)
      setIsLoading(false)
    }
  }, [url]);

  return {
    data, isLoading, isError
  }

}

export default useFetch;