import '../scss/Covid19.scss'
import useFetch from '../createHook/fetch';
import moment from 'moment';

const Covid19 = () => {

  const toDay = new Date(new Date().setHours(0, 0, 0, 0));
  const priorDate = moment().subtract(30, 'days');

  const { data: dataCovid, isLoading } =
    useFetch(`https://api.covid19api.com/country/vietnam?from=${priorDate.toISOString()}&to=${toDay.toISOString()}`);
  return (
    <table className="customers">
      <thead>
        <tr>
          <th>Confirmed</th>
          <th>Deaths</th>
          <th>Recovered</th>
          <th>Active</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {isLoading === false && dataCovid && dataCovid.length > 0 && dataCovid.map(
          item => {
            return (
              <tr key={item.ID}>
                <td>{item.Confirmed}</td>
                <td>{item.Deaths}</td>
                <td>{item.Recovered}</td>
                <td>{item.Active}</td>
                <td>{item.Date}</td>
              </tr>
            )
          }
        )}
        {isLoading === true &&
          <tr>
            <td className='loading' colSpan={"5"}>Loading...</td>
          </tr>
        }
      </tbody>

    </table>

  );
}

export default Covid19;