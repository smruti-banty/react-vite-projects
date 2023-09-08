interface ResetProps {
  reset: () => void;
}
const Reset: React.FC<ResetProps> = ({ reset }) => (
  <button onClick={reset}>Reset</button>
);

export default Reset;
