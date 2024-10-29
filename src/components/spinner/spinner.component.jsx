import './spinner.styles.scss';

const COMPONENT = "spinner";

const Spinner = () => {
  return (
    <div className={COMPONENT}>
      <div className={`${COMPONENT}__body`}></div>
    </div>
  )
};

export default Spinner;