import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// // this is the class based component approach
// class TodoList extends React.Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isDarkTheme, lightTheme, darkTheme, changeTheme } = this.context;
//     const theme = isDarkTheme ? darkTheme : lightTheme;

//     return (
//       <div
//         style={{
//           background: theme.background,
//           color: theme.text,
//           height: "140px",
//           textAlign: "center",
//         }}
//       >
//         <p className="item">Plan the Family trip</p>
//         <p className="item">Go for shopping for dinner</p>
//         <p className="item">Go for a walk</p>
//         <button className="ui button primary" onClick={changeTheme}>
//           Change the Theme
//         </button>
//       </div>
//     );
//   }
// }

// this is the functional based component approach which uses useContext hook
const TodoList = () => {
  const { isDarkTheme, lightTheme, darkTheme, changeTheme } =
    useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <div
      style={{
        background: theme.background,
        color: theme.text,
        height: "140px",
        textAlign: "center",
      }}
    >
      <p className="item">Plan the Family trip</p>
      <p className="item">Go for shopping for dinner</p>
      <p className="item">Go for a walk</p>
      <button className="ui button primary" onClick={changeTheme}>
        Change the Theme
      </button>
    </div>
  );
};

export default TodoList;
