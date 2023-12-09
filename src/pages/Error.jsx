import { useNavigate } from "react-router-dom";

export default function ErrorComponent() {
  const history = useNavigate();
  function goBack() {
    history(-1);
  }
  return (
    <div id="error">
      <button
        onClick={() => {
          goBack();
        }}
      >
        Go Back
      </button>
      <p>OOPS SOMETHING WENT WRONG!!</p>
    </div>
  );
}
