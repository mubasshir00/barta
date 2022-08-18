const express = require("express");
const router = express.Router();

const bookingController = require("../controllers/bookingController");
const tourController = require("../controllers/tourController");

router.get("/get_all_tour",tourController.getAllTours);
router.post("/create_tour",tourController.createTour);
// router.post("/check_body", tourController.checkBody);
router.get("/get_tour", tourController.getTour);
router.patch("/update_tour", tourController.updateTour);
router.delete("/delete_tour", tourController.deleteTour);

//booking controller
router.get("/checkout-session",bookingController.getCheckoutSession);
router.get("/get_all_booking",bookingController.getAllBookings);
router.post("/create_booking",bookingController.createBooking);
router.get("/get_booking",bookingController.getBooking);
router.patch("/update_booking",bookingController.updateBooking);
router.delete("/delete_booking",bookingController.deleteBooking)

module.exports = router