const NotFound = ({ fetchErrorValue }) => {
  return (
    <>
      <div>Not Found</div>
      <div>{fetchErrorValue ? fetchErrorValue : null}</div>
    </>
  );
};

export default NotFound;
