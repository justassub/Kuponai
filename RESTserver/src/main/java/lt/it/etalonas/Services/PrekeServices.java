package lt.it.etalonas.Services;


import lt.it.etalonas.Kuponas.Coupon;
import lt.it.etalonas.Prekes.CreatePrekeCommand;
import lt.it.etalonas.Prekes.Preke;
import lt.it.etalonas.Repositories.CouponRepository;
import lt.it.etalonas.Repositories.PrekesRepository;
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
