package lt.it.akademija.Kuponas;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lt.it.akademija.Prekes.Preke;

import javax.persistence.*;
import java.util.List;


@Entity
public class Coupon {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private  Long id;

    @Column
    private String date;

    @Column
    private String buyer;

    @Column String seller;

    @OneToMany(mappedBy = "coupon", cascade = CascadeType.REMOVE)
    @JsonIgnore
    private List<Preke> prekes;

    public  void addPreke(Preke preke){
       this.prekes.add(preke);
       preke.setCoupon(this);
    }

    public  Coupon(){

    }

    public Coupon(String date, String buyer, String seller) {
        this.date = date;
        this.buyer = buyer;
        this.seller = seller;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getBuyer() {
        return buyer;
    }

    public void setBuyer(String buyer) {
        this.buyer = buyer;
    }

    public String getSeller() {
        return seller;
    }

    public void setSeller(String seller) {
        this.seller = seller;
    }

    public List<Preke> getPrekes() {
        return prekes;
    }
}
