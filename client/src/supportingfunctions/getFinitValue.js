export function getFiniteValue(obj) {
                  getProp(obj);

                  function getProp(o) {
                    for(var prop in o) {
                      if(typeof(o[prop]) === 'object') {
                        getProp(o[prop]);
                      } else {
                        console.log('Finite value: ',o[prop])
                      }
                    }
                  }
}