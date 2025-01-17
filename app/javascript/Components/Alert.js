import React from "react";

const Alert = (props) => {
  // console.log(props);

  const success = (props) => {
    return (
      <div
        className="flex bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="flex-1 font-bold">That's Fab!</strong>
        <span className="flex-1 block sm:inline">{props.flash.success}</span>
        <span
          // onClick={props.onClick}
          className="absolute top-0 bottom-0 right-0 px-4 py-3"
        >
          {/* <svg
          className="fill-current h-6 w-6 text-green-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg> */}
        </span>
      </div>
    );
  };
  const alert = (props) => {
    return (
      <div
        className="flex bg-red-100 border border-green-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="flex-1 font-bold">Holy smokes!</strong>
        <span className="flex-1 block sm:inline">{props.flash.alert}</span>
        <span
          // onClick={props.onClick}
          className="absolute top-0 bottom-0 right-0 px-4 py-3"
        >
          {/* <svg
          className="fill-current h-6 w-6 text-green-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg> */}
        </span>
      </div>
    );
  };
  return (
    <>
      {props.flash.success && success(props)}
      {props.flash.alert && alert(props)}
    </>
  );
};
export default Alert;
