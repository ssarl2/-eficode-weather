import React from 'react';
import ReactDOM from 'react-dom';

const baseURL = process.env.ENDPOINT;

const getWeatherFromApi = async () => {
  try {
    const response = await fetch(`${baseURL}/weather`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
  
  return {};
};

const postWeatherToApi = async (latitude, longitude) => {
    await fetch(`${baseURL}/weather`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({latitude, longitude})
    })
    .then(response => response.json())
    // .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
};

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: 'ready',
      dt_txt: '',
      cnt: 40, // up to 40
      lat: 'latitude',
      lon: 'longitude'
    };
  }
  
  showData = () => {
    const { icon } = this.state;
    const { dt_txt } = this.state;
    const { cnt } = this.state;

    // This is to prevent a error becaust
    // react will render before the componentDidMount()
    if(icon == 'ready') {
      return <p>Getting geolocation...</p>;
    }

    const tmp = []
    for (let i = 0; i < cnt; i++) {
      tmp.push(
        <div>
          <p className = "p">{dt_txt[i]}</p>
          <img src={`/img/${icon[i]}.svg`} />
        </div>
      )
    }
    return tmp;
  }
  
  getPosition = () => {
    return new Promise((resolve, reject) => {
      window.navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  async componentDidMount() {
    
    // this.getPosition()
    // .then(position => this.setState({
    //   lat: position.coords.latitude,
    //   lon: position.coords.longitude
    // }))
    // .then(setTimeout(() => {window.location.reload(true)},5000))
    // .catch(err => console.log(err));

    window.navigator.geolocation.getCurrentPosition(position => this.setState({
      lat: position.coords.latitude,
      lon: position.coords.longitude
    }), err => console.log(err))

    const list = await getWeatherFromApi();
    const ic = list.map(it => it.weather[0].icon.slice(0, -1));
    const time = list.map(it => it.dt_txt.slice(5, 16));

    this.setState({ icon: ic, dt_txt: time });
  }

  render() {
    const { lat } = this.state;
    const { lon } = this.state;

    postWeatherToApi(lat, lon);

      return (
      <div className="icon">
        { this.showData() }
      </div>
    );
  }

}

ReactDOM.render(
  <Weather />,
  document.getElementById('app')
  );