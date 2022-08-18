const Tour = require("../models/tour");

//get_all_tour?difficulty=hard filer
//get_all_tour?sort=price filter
//get_all_tour?page=1
const getAllTours =async (req,res) =>{
    try{
        const queryObj = {...req.query};

        let query = Tour.find(queryObj).populate({path:'guides'});

        if(req.query.sort){
            console.log(req.query.sort);
            const sortedBy = req.query.sort.split(',').join(' ');
            query = query.sort(sortedBy);
        } else {
            query = query.sort('-createdAt')
        }

        //pagination 
        const page = req.query.page * 1 || 1;
        const limit = req.query.limit || 100;
        const skip = (page-1)*limit;

        query = query.skip(skip).limit(limit);

        if(req.query.page){
            const numTours = await Tour.countDocuments();
            if(skip>=numTours) throw new Error('This page does not exist');
        }

        let tours = await query;
        return res.status(200).json({
            status:'success',
            results:tours.length,
            data:tours
        })
    } catch(e){
        return res.status(404).json({
          status: true,
          status_message: e,
          
        });
    }
}

const createTour =async (req,res) =>{
    try{
      const tour_body = req.body;
      tour_body.tour_id = new
        Date().getTime().toString(36) + Math.random().toString(36).slice(2);
      const newTour = await Tour.create(tour_body);
      return res.status(200).json({
        status:true,
        status_message:"success",
        data:newTour
      })
    } catch(e){
        console.log(e);
        return res.status(404).json({
          status: true,
          status_message: "something went wrong",
          
        });
    }
}

const getTour =async (req,res) =>{
    try{
    console.log(req.query.tour_id);
    const tour = await Tour.find({
      tour_id: req.query.tour_id,
    });
    res.status(200).json({
        status:'success',
        data:tour
    })
    } catch(e){
        console.log(e);
        return res.status(404).json({
          status: true,
          status_message: "something went wrong",
        });
    }
}

const updateTour = async (req,res) =>{
    try{
    const update_tour = await Tour.findOneAndUpdate(req.query.tour_id,req.body,{
        upsert:true,
    })
    res.status(200).json({
      status: true,
      status_message: "Updated",
      data: update_tour,
    });
    } catch(e){
        console.log(e);
        return res.status(404).json({
          status: true,
          status_message: "something went wrong",
        });
    }
}

const deleteTour = () =>{

}

const checkBody = () =>{

}

module.exports = {
  getAllTours: getAllTours,
  createTour: createTour,
  getTour: getTour,
  updateTour: updateTour,
  deleteTour: deleteTour,
  checkBody: checkBody,
};