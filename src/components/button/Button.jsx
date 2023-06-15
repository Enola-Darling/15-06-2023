import "./index.css";

const Button = ({ item }) => {
  console.log(item.completed);
  return (
    <button className={`Button ${item.completed} && "completed"`}>Done</button>
  );
};
export default Button;
