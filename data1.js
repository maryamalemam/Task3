const request = require ('request')

  const forecast = (latitude , longtitude , callback ) => {

    const url = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=" + latitude + "," + longtitude
    
    request ({url, json : true} , (error , response) => {
         
        if(error) {
             callback ("Unable to connect weather service" , undefined)
        } else if(response.body.error){
             callback (response.body.error.message , undefined)
        } else {
                callback (undefined , response.body.location.name + ' The weath Is ' + response.body.current.condition.text 
                + " While Temp " + response.body.current.temp_c    )
        }
    })
    }

    forecast ( 29.871903452398 , 26.4941838299718 , (error , data) => {
     console.log("ERROR : " , error)
     console.log("DATA : " , data)
  })
         