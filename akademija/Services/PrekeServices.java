package lt.it.akademija.Services;


import lt.it.akademija.Kuponas.Coupon;
import lt.it.akademija.Prekes.CreatePrekeCommand;
import lt.it.akademija.Prekes.Preke;
import lt.it.akademija.Repositories.CouponRepository;
import lt.it.akademija.Repositories.PrekesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;

@Service
public class PrekeServices {

    @Autowired
    PrekesRepository prekesRepository;

    @Autowired
    CouponRepository couponRepository;

    @Transactional
    public List<Preke> getPrekes(){
        return  prekesRepository.findAll();
    }

    @Transactional
    public  List<Preke> getOnePreke(Long id){
        Preke preke= prekesRepository.findOne(id);
        List<Preke> singlePrekeList= new ArrayList<Preke>();
        singlePrekeList.add(preke);
        return  singlePrekeList;

    }

    @Transactional
    public  void addPreke(Long id,@RequestBody CreatePrekeCommand cpc){
        Coupon kuponas=couponRepository.findOne(id);

        Preke naujaPreke = new Preke(cpc.getPavadinimas(),cpc.getKiekis(),cpc.getMatavimoVnt(),cpc.getPrice());
        prekesRepository.save(naujaPreke);
        kuponas.addPreke(naujaPreke);
    }


    @Transactional
    public List<Preke> allPrekes(){
        return  prekesRepository.findAll();
    }

    @Transactional
    public  List<Preke> findOneCouponPrekes(Long id){
       Coupon ieskomasKuponas= couponRepository.findOne(id);
       return ieskomasKuponas.getPrekes();
    }

    @Transactional
    public void removePreke(long id){
        prekesRepository.delete(id);
    }


}
