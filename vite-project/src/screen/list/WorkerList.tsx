import { WorkerInfo } from "../../types";
import WorkerRow from "./WorkerRow";

/**
 * 社員情報一覧表
 * @param props
 * @returns
 */
const WorkerList = (props: { workers: WorkerInfo[] }) => {
  return (
    <div>
      <table>
        {props.workers.map((w) => (
          <WorkerRow worker={w}></WorkerRow>
        ))}
      </table>
    </div>
  );
};

export default WorkerList;
