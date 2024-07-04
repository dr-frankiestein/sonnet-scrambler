//Example fetch using pokemonapi.co
document.querySelector('#randomSearch').addEventListener('click', fetchRandom)
// document.querySelector('#titleSearch').addEventListener('click', fetchByTitle)

const ol = document.querySelector('ol');

function fetchRandom(){
  // clear past poem if necessary
  ol.innerHTML =''
  // const choice = document.querySelector('input').value
  const url = 'https://poetrydb.org/random,linecount/25;14/lines'
  
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let poem = []
        let lineCount = 0;
        for (i in data) {
          if (data[i].lines.length == 14 && lineCount < 14) {
            let thisPoem = data[i].lines
            // console.log(thisPoem.length)
            // console.log(thisPoem[lineCount])
            poem.push(thisPoem[lineCount])
         
            addLine(thisPoem[lineCount])

            
            lineCount++
          }
          
        }
        console.log(poem.length)
        const test = onlyFives()
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
      
  // const test = onlyFives()
  // return test
  
}

function onlyFives() {
  const lines = ol.querySelectorAll( "li" );
  for (const line of lines) {
    console.log(line.innerHTML)
    const lineNum = line.querySelector('::before')
    console.log(lineNum)
  }
}


function addLine(line) {
  const li = document.createElement('li')
  li.textContent = line
  ol.appendChild(li)
}

// function fetchSingle() {
//   const url = 'https://poetrydb.org/random,linecount/1;14/lines'
//   // let newPoem
//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         poem.push(data[0].lines)

//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });

// }

// function fetchByTitle(){
//   const choice = document.querySelector('input').value
//   const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }