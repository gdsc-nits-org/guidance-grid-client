import "./Trending.scss";

const Trending = () => {
  return (
    <>
      <div className="head">
        <h1>GUIDANCE GRID</h1>
      </div>
      <div className="searchbar">
        <input type="text" placeholder="Search blogs" />
      </div>
      <secttion className="trending">
        <h3>Trending Articles</h3>
        <div className="trend-art1">
          <div className="card">
            <p className="art_name">
              {" "}
              01 <img src="./Images/profile.png" alt="" /> GDSC in Code.
            </p>
            <p>Code is now available!</p> <p className="time">Nov 21, 10 mins read.</p>
          </div>
          <div className="card">
            <p className="art_name">
              {" "}
              02 <img src="./Images/profile.png" alt="" /> GDSC in Code.
            </p>{" "}
            <p>Code is now available!</p> <p className="time">Nov 21, 10 mins read.</p>
          </div>
          <div className="card">
            <p className="art_name">
              {" "}
              03 <img src="./Images/profile.png" alt="" /> GDSC in Code.
            </p>{" "}
            <p>Code is now available!</p> <p className="time">Nov 21, 10 mins read.</p>
          </div>
        </div>
        <div className="trend-art2">
          <div className="card">
            <p className="art_name">
              {" "}
              04 <img src="./Images/profile.png" alt="" /> GDSC in Code.
            </p>{" "}
            <p>Code is now available!</p> <p className="time">Nov 21, 10 mins read.</p>
          </div>
          <div className="card">
            <p className="art_name">
              {" "}
              05 <img src="./Images/profile.png" alt="" /> GDSC in Code.
            </p>{" "}
            <p>Code is now available!</p> <p className="time">Nov 21, 10 mins read.</p>
          </div>
          <div className="card">
            <p className="art_name">
              {" "}
              06 <img src="./Images/profile.png" alt="" /> GDSC in Code.
            </p>{" "}
            <p>Code is now available!</p> <p className="time">Nov 21, 10 mins read.</p>
          </div>
        </div>
      </secttion>
    </>
  );
};

export default Trending;
