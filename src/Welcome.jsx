function Welcome({
name, age, isStudent, marriageStatus,}) {
  return (
    <div>
      <h2>{name}</h2>

      <h2>{age}</h2>

      <h2>{isStudent.toString()}</h2>

      <h2>{marriageStatus}</h2>
    </div>
  );
}

export default Welcome;