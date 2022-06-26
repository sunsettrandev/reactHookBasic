import '../scss/Covid19.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const Covid19 = () => {

  const [dataCovid, setDataCovid] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      let res = await axios.get('https://api.covid19api.com/country/vietnam/status/confirmed?from=2022-02-01T00:00:00Z&to=2022-03-01T00:00:00Z');
      let data = res && res.data ? res.data : [];
      if (data && data.length > 0) {
        data.map(item => {
          item.Date = moment(item.Date).format("llll")
          return item
        })
      }
      setDataCovid(data)
    }
    fetchAPI()
  }, []);

  return (
    <table className="customers">
      <thead>
        <tr>
          <th>Cases</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {dataCovid && dataCovid.length > 0 && dataCovid.map(
          item => {
            return (
              <tr key={item.Date}>
                <td>{item.Cases}</td>
                <td>{item.Status}</td>
                <td>{item.Date}</td>
              </tr>
            )
          }
        )}
      </tbody>

    </table>

  );
}

export default Covid19;