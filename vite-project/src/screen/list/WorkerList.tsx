import { WorkerInfo } from "../../types";
import WorkerRow from "./WorkerRow";

/**
 * 社員情報一覧表
 * @param props
 * @returns
 */
const WorkerList = (props: { workers: WorkerInfo[] }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>ID</th>
            <th>名前</th>
            <th>誕生日</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.workers.map((w) => (
            <WorkerRow key={w.id} worker={w}></WorkerRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkerList;
