import Header from "./main/header";
import Select from "./main/select";
import Task from "./main/task-card";
export default function Memo() {
  return (
    <>
      <div className="">
        <Header/>
      </div>
      <div className="mid py-5">
      <Select/>
      </div>
      <div className="tasks flex flex-col gap-6">
        <Task/>
        <Task/>
        <Task/>

      </div>
      <div className="footer"></div>
    </>
  );
}
