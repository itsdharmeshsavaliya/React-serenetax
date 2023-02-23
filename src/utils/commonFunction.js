export const onSetAplhabetInput = (eve, setInput) => {
  const result = eve.target.value.replace(/[^a-z ]/gi, "");
  setInput(result);
};

export const toCapatilize = (word) => {
  const letters = word.split("");
  return letters.shift().toUpperCase() + letters.join("");
};

export const loadingPromise = (timeout = 3000) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

export const handleSSN = (event) => {
  let val = event.target.value.replace(/\D/g, "");
  let newVal = "";
  if (val.length > 4) {
    event.target.value = val;
  }
  if (val.length > 3 && val.length < 6) {
    newVal += val.substr(0, 3) + "-";
    val = val.substr(3);
  }
  if (val.length > 5) {
    newVal += val.substr(0, 3) + "-";
    newVal += val.substr(3, 2) + "-";
    val = val.substr(5);
  }
  newVal += val;
  return newVal.substring(0, 11);
};


export const resetLocalStorage = (statusCode) => {
    if(statusCode === 401) {
      localStorage.removeItem('authenticated')
      localStorage.removeItem('access_token')
    }
}

export const encodeQueryData = (data)=> {
   const ret = [];
   for (let d in data)
     ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
   return ret.join('&');
}