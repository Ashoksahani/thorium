let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getDistrictsid = async function (req, res) {
    try {
        let id = req.query.districtsid
        let date=req.query.date
        console.log(`query params are: ${id} ${date}`)
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


// let getSortedCities= async function (req,res){
//     try{
// let cities= ["Bengaluru","Mumbai","Delhi","Kolkata","Chennai","London","Moscow"]
// let cityObjArray=[]
// for(i=0;i<cities.length;i++){
//     let obj={ city:cities[i]}
//     let resp= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=29a2ea7cefb8963cb5a38df954e4df7d`)
//     console.log(res.data.main.temp)
    
//     obj.temp=resp.data.main.temp
//     cityObjArray.push(obj)
// }
// let sorted = cityObjArray.sort(function(a,b){return a.temp - b.temp})
// console.log(sorted)
// res.status(200).send({status:true,data:sorted})
//     }catch(error){
//         console.log(error)
//         res.status(500).send({status:false, msg:"server error"})
//     }


// }

// module.exports.getSortedCities=getSortedCities


const allCity = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]

const sortCityByTemp = async function(req, res){
    try{
       // const {api_key} = req.params
    const tempArr = []
    for (let city of allCity){
        const options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=29a2ea7cefb8963cb5a38df954e4df7d`
        }
        let result = await axios(options)
        let temp = result.data.main.temp
        tempArr.push(temp)
    }
    
    const a = tempArr.map((num , i) => {
        return {city: allCity[i], temp: num}
    })
    const sort = a.sort((i, j) => i.temp - j.temp)
    res.status(200).send({data: sort})
    }catch(e){
        res.status(401).send({Err: e.message})
    }
}

module.exports.sortCityByTemp = sortCityByTemp

let memeCon = async function (req, res){
    try{
        const {mId, t0, t1} = req.body 
        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${mId}&text0=${t0}&text1=${t1}&username=chewie12345&password=meme@123`
        }
        let result = await axios(options)
        res.status(200).send({data:result.data})
    }catch(e){
        res.status(401).send({Err: e.message})
    }
}

module.exports.memeCon = memeCon



module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getDistrictsid = getDistrictsid