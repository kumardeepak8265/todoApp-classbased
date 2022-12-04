import { Component, InputHTMLAttributes } from "react";
type Inputprops = {
  theme?: string;
} & InputHTMLAttributes<HTMLInputElement>;
class Input extends Component<Inputprops> {
  render() {
    let { className, theme, type, checked, onChange, ...rest } = this.props;
    if (theme === "primary") {
      className =
        "block p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm";
    } else if (theme === "secondary") {
      className =
        "w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500";
    }
    return (
      <input
        className={className}
        type={type}
        checked={checked}
        onChange={onChange}
        {...rest}
      />
    );
  }
}
export default Input;
