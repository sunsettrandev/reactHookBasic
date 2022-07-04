import '../scss/Covid19.scss'
import useFetch from '../createHook/fetch';

const Covid19 = () => {

  const { data: dataCovid, isLoading } =
    useFetch('https://api.covid19api.com/country/vietnam/status/confirmed?from=2022-02-01T00:00:00Z&to=2022-03-01T00:00:00Z')

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
        {isLoading === false && dataCovid && dataCovid.length > 0 && dataCovid.map(
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
        {isLoading === true &&
          <tr>
            <td className='loading' colSpan={"3"}>Loading...</td>
          </tr>
        }
      </tbody>

    </table>

  );
}

export default Covid19;