import React, { Component, ChangeEvent } from "react";
import Button from "./Component/Button";
import Header from "./Component/Header";
import TodoForm from "./Component/TodoForm";
import Row from "./Component/Row";

type todopageprops = {
  n: string;
};
type todopageState = {
  value: string;
  todo: string[];
  donetodo: string[];
  form: boolean;
};
class Todopage extends Component<todopageprops, todopageState> {
  constructor(props: todopageprops) {
    super(props);
    this.state = {
      value: "",
      todo: ["Clean my computer", "Buy a keyboard"],
      donetodo: ["Write an article about @xstate/test"],
      form: true,
    };
    this.handleTodosave = this.handleTodosave.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.formControler = this.formControler.bind(this);
    this.markDone = this.markDone.bind(this);
    this.markNotDone = this.markNotDone.bind(this);
    this.Deletetodo = this.Deletetodo.bind(this);
  }
  handleTodosave() {
    this.setState({ todo: [...this.state.todo, this.state.value] });
    this.setState({ value: "" });
    this.setState({ form: !this.state.form });
  }

  handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  formControler() {
    this.setState({ form: !this.state.form });
  }
  markDone(todo: string) {
    let donetodo = this.state.todo.filter((t) => t !== todo);
    this.setState({ todo: [...donetodo] });
    this.setState({ donetodo: [...this.state.donetodo, todo] });
  }
  markNotDone(todo: string) {
    let notdonetodo = this.state.donetodo.filter((t) => t !== todo);
    this.setState({ donetodo: [...notdonetodo] });
    this.setState({ todo: [...this.state.todo, todo] });
  }
  Deletetodo(todo: string) {
    const filterTodo = this.state.todo.filter((t) => t !== todo);
    const filterDoneTodo = this.state.donetodo.filter((t) => t !== todo);
    this.setState({ todo: [...filterTodo] });
    this.setState({ donetodo: [...filterDoneTodo] });
  }
  render(): React.ReactNode {
    return (
      <div className="px-4 sm:px-6 lg:px-8 space-y-4">
        <Header></Header>

        {this.state.form && (
          <Button onClick={this.formControler}>+ Add a todo</Button>
        )}
        <h1 className="text-lg font-medium leading-6 text-gray-900">
          Things to do
        </h1>
        {this.state.todo.map((todo) => (
          <Row
            todo={todo}
            key={todo}
            onClick={this.markDone}
            onChange={this.markDone}
            check={false}
            Deletetodo={this.Deletetodo}
          />
        ))}

        {!this.state.form && (
          <TodoForm
            value={this.state.value}
            onChange={this.handleInputChange}
            onClick={this.handleTodosave}
          ></TodoForm>
        )}
        <h1 className="text-lg font-medium leading-6 text-gray-900">
          Things done
        </h1>
        {this.state.donetodo.map((todo) => (
          <Row
            todo={todo}
            key={todo}
            onClick={this.markDone}
            onChange={this.markNotDone}
            check={true}
            Deletetodo={this.Deletetodo}
          ></Row>
        ))}
      </div>
    );
  }
}
export default Todopage;
