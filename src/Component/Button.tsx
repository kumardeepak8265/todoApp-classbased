import { Component, ButtonHTMLAttributes } from "react";
type ButtonProps = {
  theme?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
class Button extends Component<ButtonProps> {
  render() {
    let { className, children, theme, onClick } = this.props;
    if (theme === undefined) {
      theme = "primary";
    }
    if (theme === "primary") {
      className =
        "inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-yellow-500 border border-transparent rounded-md shadow-sm hover:bg-yellow-600 disabled:hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500";
    } else if (theme === "secondary") {
      className =
        "px-4 py-2 ml-3 text-sm font-medium bg-white border border-gray-300 rounded-md shadow-sm text-blue-gray-900 hover:bg-blue-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500";
    }
    return (
      <div>
        <button className={className} onClick={onClick}>
          {children}
        </button>
      </div>
    );
  }
}
export default Button;
