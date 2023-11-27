const Slider = (props) => {
  const step = props.step;
  const min = props.min;
  const max = props.max;
  const defaultValue = props.defaultValue;
  const onInput = props.onInput;
  const unit = props.unit;
  const id = props.id ? props.id : '';

  return (
    <div className="slider">
      <input
        id={id}
        className="slider_input"
        type="range"
        onInput={(e) => {
          onInput(Number(e.target.value));
        }}
        step={step}
        min={min}
        max={max}
        defaultValue={defaultValue}
      />
      <span className="slider_value">
        {defaultValue}
        {unit}
      </span>
    </div>
  );
};

export default Slider;
