import { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";

const JsonServer = () => {
  const [data, setData] = useState([]);
  const [selectDate, setSelectDate] = useState(null);
  useEffect(() => {
    axios
      .get("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="text-center">
        <DatePicker
          selected={selectDate}
          onChange={(date) => setSelectDate(date)}
          dateFormat="dd-M-yy"
        />
      </div>
      <table className="table text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, index) => {
            return (
              <tr key={index}>
                <td>{d.name}</td>
                <td>{d.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default JsonServer;
