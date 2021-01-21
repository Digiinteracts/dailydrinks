class OrderDataService {
  getAll() {
    return (localStorage.getItem('order')!==null)?JSON.parse(localStorage.getItem('order')):[];
  }

  get(id) {
    var storageData = (localStorage.getItem('order')!==null)?JSON.parse(localStorage.getItem('order')):[];
    return storageData[id];
  }

  create(data) {
    var dataStorage = [];
    dataStorage = JSON.parse(localStorage.getItem('order'));
    if(dataStorage!==null){
      dataStorage.push(data);
    } else {
      dataStorage = [data];
    }
    return localStorage.setItem('order',JSON.stringify(dataStorage));
  }

  update(id, data) {
    console.log(id);
    var storageData = (localStorage.getItem('order')!==null)?JSON.parse(localStorage.getItem('order')):[];
    storageData[id] = data
    console.log(storageData);
    return localStorage.setItem('order',JSON.stringify(storageData));
  }

  delete(id) {
    var storageData = (localStorage.getItem('order')!==null)?JSON.parse(localStorage.getItem('order')):[];
    storageData.splice(id,1);
    console.log(storageData);
    return localStorage.setItem('order',JSON.stringify(storageData));
  }

  deleteAll() {
    return localStorage.removeItem('order');
  }
}

export default new OrderDataService();
