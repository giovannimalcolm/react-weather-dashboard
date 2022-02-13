import './css/bootstrap.min.css';
import './css/style.css';

function App() {
  return (
    <div className="App">
    <div className="main-header">
      <h1>Weather Dashboard</h1>
    </div>
    <div className="container-fluid" style={{maxWidth: '1400px'}}>
      <div className="row">
        <aside className="col-lg-3 pb-3">
          <h2 id="sidebar-title">Search for a City:</h2>

          <form id="citySearch">
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="City Here"
                id="city-input"
              />

              <div className="input-group-append"></div>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block"
              id="sidebar-btn"
            >
              Search
            </button>
          </form>
          <div id="history"></div>
        </aside>

        <div className="col-lg-9 pb-3">
          <section id="presentDay"></section>

          <section id="weekly" className="weeklyForecast row"></section>
        </div>
      </div>
    </div>
    </div>
  );
}


export default App;
