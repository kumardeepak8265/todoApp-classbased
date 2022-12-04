import { Component, ChangeEvent } from "react";
import Button from "./Button";
import Input from "./Input";
type TodoFormProps = {
  value: string;
  onClick: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
class TodoForm extends Component<TodoFormProps> {
  render() {
    let { value, onChange, onClick } = this.props;
    return (
      <div className="p-2 border-2 border-gray-200">
        <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
          Create a todo
        </h3>
        <div className="w-full sm:max-w-xs">
          <Input
            placeholder="Write an article about XState"
            value={value}
            onChange={onChange}
            theme="primary"
            type="text"
          />
        </div>
        <div className="flex justify-start pt-5">
          <Button onClick={onClick}>Save</Button>
          <Button theme="secondary" onClick={onClick}>
            Cancle
          </Button>
        </div>
      </div>
    );
  }
}
export default TodoForm;
