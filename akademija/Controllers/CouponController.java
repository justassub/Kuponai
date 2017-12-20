package lt.it.akademija.Controllers;

import io.swagger.annotations.ApiOperation;
import lt.it.akademija.Kuponas.Coupon;
import lt.it.akademija.Kuponas.CreateCouponCommand;
import lt.it.akademija.Services.CouponServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/coupons")
@CrossOrigin(origins = "http://localhost:3000")
public class CouponController {

    @Autowired
    private final CouponServices couponServices;

    @Autowired
    public  CouponController(CouponServices couponServicess){
        this.couponServices=couponServicess;
    }

    @RequestMapping(method = RequestMethod.GET)
    @ApiOperation(value = "Gets All coupons ", notes ="Gets all coupons")
    public List<Coupon> allCoupons(){
        return  couponServices.getCoupons();
    }


    @RequestMapping(path = "/{id}",method = RequestMethod.GET)
    @ApiOperation(value = "Get ONE coupon", notes = "returns only one train as list")
    public  List<Coupon> getOneCoupon(@PathVariable Long id){
        return couponServices.getOneCoupon(id);
    }

    @RequestMapping(path = "/edit/{id}", method = RequestMethod.PUT)
    @ApiOperation(value = "Edits one specific Coupon",notes = "Edits one specific coupon")
    public  void editCoupon(@PathVariable Long id, @RequestBody CreateCouponCommand ccc){
        couponServices.editCoupon(id,ccc);
    }

    @RequestMapping(path = "/create",method = RequestMethod.POST)
    @ApiOperation(value = "creates one coupon",notes = "creates a coupon by tatking data")
    public  void createCoupon(@RequestBody CreateCouponCommand ccc){
        couponServices.addCoupon(ccc);
    }

    @RequestMapping(path = "/delete/{id}",method = RequestMethod.DELETE)
    @ApiOperation(value = "deletes coupon with all prekes")
    public  void deleteCoupon(@PathVariable long id){
        couponServices.deleteCoupon(id);
    }


}
