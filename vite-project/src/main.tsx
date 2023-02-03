import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WorkerListScreen from "./screen/WorkerListScreen";

// TODO:テストデータ
const workers = [1, 2, 3].map((id) => ({
  id: `${id}`,
  name: `社員 太郎AAA${id}`,
  birthday: new Date(2020, 1, id),
  office: {
    id: `${id + 10}`,
    name: `会社${id}`,
  },
}));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WorkerListScreen />
  </React.StrictMode>
);
