import { WorkerInfo } from "../../types";
import DatePick from "../DatePick";

/**
 * 社員情報表示行
 * @param props
 * @returns
 */
const WorkerRow = (props: { worker: WorkerInfo }) => {
  return (
    <tr id={"line_" + props.worker.id}>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>{props.worker.id}</td>
      <td>{props.worker.name}</td>
      <td>
        <DatePick date={props.worker.birthday}></DatePick>
      </td>
      <th>
        <button className="btn">details</button>
      </th>
    </tr>
  );
};

export default WorkerRow;
