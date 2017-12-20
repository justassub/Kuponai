package lt.it.akademija.Controllers;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lt.it.akademija.Prekes.CreatePrekeCommand;
import lt.it.akademija.Prekes.Preke;
import lt.it.akademija.Services.PrekeServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(value = "/prekes")
@CrossOrigin(origins = "http://localhost:3000")
public class PrekesController {

    @Autowired
    PrekeServices prekeServices;

    @Autowired
    public  PrekesController(PrekeServices prekeServices){
        this.prekeServices=prekeServices;
    }

    @RequestMapping(method = RequestMethod.GET)
    @ApiOperation(value = "get All prekes", notes = "ALl prekes as list")
    public List<Preke> getAllPrekes(){
        return prekeServices.allPrekes();
    }

    @RequestMapping(path = "/{id}",method = RequestMethod.GET)
    @ApiOperation(value = "find all prrekes that belong to coupon")
    public  List<Preke> getPrekesForCoupon(@PathVariable long id){
        return prekeServices.findOneCouponPrekes(id);
    }

    @RequestMapping(path = "/delete/{id}",method = RequestMethod.DELETE)
    @ApiOperation(value = "Deletes preke ")
    public  void deletePreke(@PathVariable long id){
        prekeServices.removePreke(id);
    }


    @RequestMapping(path = "/add/{id}",method = RequestMethod.POST)
    @ApiOperation(value = "Create preke for specific coupon")
    public  void createPreke(@PathVariable Long id, @RequestBody CreatePrekeCommand cmc){
        prekeServices.addPreke(id,cmc);
    }




}
