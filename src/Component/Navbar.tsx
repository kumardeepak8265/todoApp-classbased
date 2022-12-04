import { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <p className="text-xl font-medium leading-6 text-gray-900 sm:truncate">
            XTodo
          </p>
        </div>
      </div>
    );
  }
}
export default Navbar;
