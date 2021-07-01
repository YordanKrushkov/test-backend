const express=require('express');
const app=express();
const router=require('./routes');
const cors=require('cors')

app.use(express.static('public'))
app.use(express.urlencoded({
    limit:'50mb',
    extended:true
}))
app.use(cors())
app.use(express.json({ limit: '50mb' }));

app.use('/', router)
app.listen(4000, (err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log('Server is listening on port 4000');
})