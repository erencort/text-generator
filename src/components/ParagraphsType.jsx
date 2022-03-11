import { useDispatch } from "react-redux";
import { typeOnChange } from "../redux/paragraphsSlice";

function ParagraphsType() {
  const dispatch = useDispatch();
  return (
    <div className="input-div">
      <p className="paragraphs-count-label">Include HTML</p>
      <select onChange={(e) => dispatch(typeOnChange(e.target.value))}>
        <option value="text">No</option>
        <option value="html">Yes</option>
      </select>
    </div>
  );
}

export default ParagraphsType;
