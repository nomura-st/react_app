import React, { useState, useEffect } from "react";
import prisma from "../../lib/prisma";
import { WorkerInfo } from "../types/WorkerInfo";
import WorkerList from "./list/WorkerList";

// TODO:propsは必要に応じて変更
const WorkerListScreen = (props: any) => {
  const [workers, setWorkers] = useState([] as WorkerInfo[]);
  useEffect(() => {
    // useEffectはasnyc関数を渡せないので、
    // 非同期関数の実行処理として登録
    (async () => {
      const w = await prisma.workerInfo.findMany();
      setWorkers(w);
    })();
  }, []); // このhookが依存する変数はなし=初回のみ実行

  return <WorkerList workers={workers}></WorkerList>;
};

export default WorkerListScreen;
