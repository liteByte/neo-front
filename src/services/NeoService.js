const baseUrl = 'https://still-stream-48323.herokuapp.com';

class NeoService {

  static instance = null;

  neos = null;

  constructor() {
    this.fetchNeos();
  }

  static getInstance() {
    if (NeoService.instance === null)
      NeoService.instance = new NeoService();
    return NeoService.instance;
  }

  fetchNeos() {
    return fetch(baseUrl + '/neo/feed')
      .then(response => {
        if (!response.ok)
          throw new Error("Something went wrong");
        return response.json();
      })
      .then(data => {
        this.neos = data;
        this.processNeos();

        setTimeout(() => {
          window.firstLoad = false;
        }, 500);

        return Promise.resolve(this.neos);
      })
      .catch(err => {
        console.log(err);
        throw err;
      })
  }

  processNeos() {
    const neos = this.neos;

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

    this.neos = this.neos.sort((a, b) => {
      if (a.size.avg === b.size.avg) return 0;
      return a.size.avg > b.size.avg ? -1 : 1;
    });
  }

  getNeos() {
    if (this.neos === null)
      return this.fetchNeos().catch(err => { throw err; });
    else
      return Promise.resolve(this.neos);
  }
}

export default NeoService.getInstance();