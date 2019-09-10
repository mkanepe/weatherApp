class Storage {
    constructor() {
        this.city;
    }

    // save city in local storage
    setLocation(city) {
        localStorage.setItem('city', city);
    }

    // get city from local storage
    getLocation() {
        if(localStorage.getItem('city') !== null) {
          this.city = localStorage.getItem('city');
        }
    
        return {
          city: this.city,
        }
      }
}