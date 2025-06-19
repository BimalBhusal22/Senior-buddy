const Filter = () => {
  return (
    <>
      <div className="filter shadow-lg foggybg">
        <div className="filter1">
          <h3>Discipline</h3>
          <input type="text" placeholder="Search..." />
          <br />
          <input type="radio" name="filter1" />
          Science
          <br />
          <input type="radio" name="filter1" />
          Management
          <br />
          <input type="radio" name="filter1" />
          Education
        </div>
        <div className="filter1">
          <h3>District</h3>
          <input type="text" placeholder="Search..." />
          <br />
          <input type="radio" name="filter1" />
          Kathmandu
          <br />
          <input type="radio" name="filter1" />
          Lalitpur
          <br />
          <input type="radio" name="filter1" />
          Rupandehi
        </div>
        <div className="filter1">
          <h3>Level</h3>
          <input type="radio" name="filter1" />
          +2
          <br />
          <input type="radio" name="filter1" />
          Bachelors
          <br />
        </div>
      </div>
    </>
  );
};
export default Filter;
