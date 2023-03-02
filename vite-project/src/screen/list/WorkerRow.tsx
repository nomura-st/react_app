import { WorkerInfo } from "../../types";

/**
 * 社員情報表示行
 * @param props
 * @returns
 */
const WorkerRow = (props: { worker: WorkerInfo }) => {
  return (
    <tr id={"line_" + props.worker.id}>
      <td>{props.worker.id}</td>
      <td>{props.worker.name}</td>
    </tr>
  );
};

export default WorkerRow;
