const path = require('path');
const isAuth=(request,response,next)=>{
    //  Monday =0; Tuesday =1; Wednesday =2; Thersday= 3; Friday =4;
    const d = new Date();
    if( (d.getDay() == 0 || d.getDay() == 4) && (d.getHours() >17 || d.getHours()<9) ){
        // return response.status(401).send({msg:'You are not authorized'})
        return response.sendFile(path.join(__dirname+'/public/closed.html'));
    }else{next()}
    }
module.exports= isAuth;