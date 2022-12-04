import { Component } from "react";
import Input from "./Input";
import { MdDeleteForever } from "react-icons/md";
type rowprops = {
  todo?: string;
  onChange?: (todo: string) => void;
  onClick?: (todo: string) => void;
  check: boolean;
  Deletetodo: (todo: string) => void;
};

class Row extends Component<rowprops> {
  render(): React.ReactNode {
    let { todo, onChange, Deletetodo, check } = this.props;

    return (
      <div className="flex items-center space-x-2">
        <Input
          theme="secondary"
          type="checkbox"
          onChange={() => {
            onChange(todo);
          }}
          checked={check}
        />
        <h1>{todo}</h1>
        <MdDeleteForever
          className="text-3xl"
          onClick={() => {
            Deletetodo(todo);
          }}
        />
      </div>
    );
  }
}
export default Row;
