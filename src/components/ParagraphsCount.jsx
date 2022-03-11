import { useDispatch } from "react-redux";
import { countOnChange } from "../redux/paragraphsSlice";

function ParagraphsCount() {
  const dispatch = useDispatch();
  return (
    <div className="input-div">
      <p className="paragraphs-count-label">Paragraphs</p>
      <input
        min="1"
        type="number"
        onChange={(e) => dispatch(countOnChange(e.target.value))}
      />
    </div>
  );
}

export default ParagraphsCount;
