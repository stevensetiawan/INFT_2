const sorting_it_all_out = (CA, choice, length_number, new_value) => {

  const print = (CA) =>{
    let new_arr = [...CA]
    new_arr.map((e, i) => !(/^\d+(\.\d{0,2})?$/).test(e) ? new_arr[i] = Number.parseFloat(new_arr[i]).toFixed(2) : i)
    for(let i = 0; i < new_arr.length; i+=10){
      console.log(new_arr.slice(i, i+10))    
    }
    console.log(CA)
  }

  const sort = (CA) => {
    CA.sort((a, b) => {
      return a - b;
    });
    console.log(CA)
  }

  const average = (CA) => {
    console.log(CA.reduce((a, b) => a + b, 0) / CA.length)
  }

  const newCA = (CA, length_number) => {
    if(length_number > 1 || length_number < 1000){
      new_arr = Array(length_number)
        .fill()
        .map(() => (20 * Math.random()).toFixed(2));
      CA = new_arr
      console.log(CA)
    }
  }

  const gather = (CA) => {
    console.log(CA.filter((val) => Math.trunc(val) % 2 === 0 ))
  }

  const biggies = (CA) => {
    let max = Math.max(...CA)
    console.log(CA.map(e => e !== max ? e = max : e))
  }

  const reverse = (CA) => {
    for(let i = 0; i < CA.length/2; i += 1){
      let temp = CA[i]
      CA[i] = CA[CA.length-(i+1)]
      CA[CA.length-(i+1)] = temp
    }
    console.log(CA)
  }

  const push = (CA, new_value) => {
    CA[CA.length] = new_value
    console.log(CA)
  }

  const pop = (CA) => {
    CA.pop()
    if(CA.length > 0){
      console.log(CA)
    } else {
      console.log("CA is already empty")
    }
  }

  const extremes = (CA) => {
    let max = Math.max(...CA)
    let min = Math.min(...CA)

    console.log(`Arr[${CA.indexOf(max)}] = ${max} is the smallest element in array`)
    console.log(`Arr[${CA.indexOf(min)}] = ${min} is the largest element in array`)
  }

  const median = (CA) => {
    CA.length % 2 === 0 ? console.log((CA[(CA.length/2)] + CA[(CA.length/2)-1])/2) : console.log(CA[Math.ceil(CA.length/2)])
  }

  switch (choice) {
    case 'quit':
      console.log('Exit the program!');
      break;
    case 'print':
      print(CA)
      break;
    case 'sort':
      sort(CA);
      break;
    case 'average':
      average(CA)
      break;
    case 'new':
      newCA(CA,length_number)
      break;
    case 'gather':
      gather(CA)
      break;
    case 'biggies':
      biggies(CA)
      break;
    case 'reverse':
      reverse(CA)
      break;
    case 'push':
      push(CA, new_value)
      break;
    case 'pop':
      pop(CA)
      break;
    case 'extremes':
      extremes(CA)
      break;
    case 'median':
      median(CA)
      break;
    default:
      console.log(`Sorry, not a valid choice.`);
  }
}
let CA = [29, 23, 19, 17, 13, 11, 7, 5, 3, 2]

console.log(sorting_it_all_out(CA,'median', 15, 24))
