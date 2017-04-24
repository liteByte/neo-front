const baseUrl = process.env.REACT_APP_BACKEND_API;

class NeoService {

  static instance = null;

  constructor() {

    this.neos = null;

  }

  static getInstance() {
    if (NeoService.instance === null)
      NeoService.instance = new NeoService();
    return NeoService.instance;
  }

  fetchNeos(date) {
    const iso = date.toISOString().substr(0, 10);
    return fetch(`${baseUrl}/neo/feed?start_date=${iso}&end_date=${iso}`)
      .then(response => {
        if (!response.ok)
          throw new Error("Something went wrong");
        return response.json();
      })
      .then(data => {
        this.neos = data;
        this.saveNeos(iso, this.neos);
        return Promise.resolve(this.neos);
      })
      .catch(err => {
        console.log(err);
        throw err;
      })
  }

  processNeos(neos) {
    let biggest = 0;
    let farthest = 0;
    for (let i = 0; i < neos.length; i++) {
      const neo = neos[i];

      const size = (neo.size.min + neo.size.max) / 2;
      if (size > biggest) biggest = size;
      neo.size.avg = size;

      const missDistance = neo.missDistance;
      if (missDistance > farthest) farthest = missDistance;
    }

    const minDisplaySize = .1;
    const minDisplayDistance = .3;
    for (let i = 0; i < neos.length; i++) {
      const neo = neos[i];

      let size = biggest > 0 ? neo.size.avg / biggest : 1;
      if (size < minDisplaySize) size = minDisplaySize;

      let distance = farthest > 0 ? neo.missDistance / farthest : 1;
      if (distance < minDisplayDistance) distance = minDisplayDistance;

      neo.display = {
        size: size,
        distance: distance,
        angle: Math.random() * 360,
        color: Math.round(Math.random() * 3),
        terrain: Math.round(Math.random() * 5),
      };
    }

    return neos.sort((a, b) => {
      if (a.size.avg === b.size.avg) return 0;
      return a.size.avg > b.size.avg ? -1 : 1;
    });
  }

  getNeos(date) {
    return this.getDate(date)
      .then(neos => {
        if (!neos) return this.fetchNeos(date).catch(err => { throw err; });
        return Promise.resolve(neos);
      })
      .then(neos => {
        this.neos = this.processNeos(neos);

        setTimeout(() => {
          window.firstLoad = false;
        }, 500);

        return this.neos;
      })
      .catch(err => { throw err; });
  }

  getDate(date) {
    if (this.checkLocalStorage() === false) return null;

    const dateKey = 'neos-' + date.toISOString().substr(0, 10);
    return new Promise(resolve => {
      for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
          if (key === dateKey) {

            try {
              resolve(JSON.parse(localStorage.getItem(dateKey)));
            } catch (e) {
              return resolve(null);
            }
          }
        }
      }
      resolve(null);
    });
  }

  saveNeos(date, neos) {
    localStorage.setItem('neos-' + date, JSON.stringify(neos));
  }

  checkLocalStorage() {
    const test = 'test';
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

}

export default NeoService.getInstance();
