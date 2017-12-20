package lt.it.etalonas.Services;

import lt.it.etalonas.Kuponas.Coupon;
import lt.it.etalonas.Kuponas.CreateCouponCommand;
import lt.it.etalonas.Prekes.Preke;
import lt.it.etalonas.Repositories.CouponRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;

@Service
public class CouponServices {

    @Autowired
    CouponRepository couponRepository;


    @Transactional
    public List<Coupon> getCoupons(){
        return  couponRepository.findAll();
    }

    @Transactional
    public List<Coupon> getOneCoupon(Long id){
        Coupon oneCoupon=couponRepository.findOne(id);
        List<Coupon> oneCouponList = new ArrayList<>();
        oneCouponList.add(oneCoupon);
        return  oneCouponList;
    }

    @Transactional
    public void addCoupon(@RequestBody CreateCouponCommand ccc){
        Coupon newCoupon = new Coupon(ccc.getDate(),ccc.getBuyer(),ccc.getSeller());
        couponRepository.save(newCoupon);
    }

    @Transactional
    public  void editCoupon(Long id,@RequestBody CreateCouponCommand ccc){
       Coupon couponToEdit= couponRepository.findOne(id);
        couponToEdit.setDate(ccc.getDate());
        couponToEdit.setBuyer(ccc.getBuyer());
        couponToEdit.setSeller(ccc.getSeller());

        couponRepository.save(couponToEdit);
    }
    @Transactional
    public void deleteCoupon(Long id){
        Coupon couponToRemove= couponRepository.findOne(id);
        couponRepository.delete(couponToRemove);
    }
    @Transactional
    public double getProductWorth(Long id){
        Coupon coupon=couponRepository.findOne(id);
        double fullProducts=0;
        for (Preke preke: coupon.getPrekes()){
            fullProducts=fullProducts+(preke.getKiekis()*preke.getPrice());

        }
        return fullProducts;
    }



}
