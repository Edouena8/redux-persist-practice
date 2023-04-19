import { useDispatch, useSelector } from "react-redux";
import { update, getClickValue } from "redux/clicksSlice";

export const App = () => {
  const dispatch = useDispatch();
  const value = useSelector(getClickValue);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <button type="button" onClick={() => dispatch(update())}>Number of clicks: {value}</button>
    </div>
  );
};
